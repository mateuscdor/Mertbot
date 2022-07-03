const {default: makeWASocket, useSingleFileAuthState, DisconnectReason, makeInMemoryStore,  getContentType} = require('@adiwajshing/baileys');
const fs = require('fs');
const P = require('pino');
const qrcode = require('qrcode-terminal')
const { color } = require('./lib/color');
const { state, saveState } = useSingleFileAuthState('./SessionQR.json');

const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) });

function nocache(module, cb = () => { }) {
	fs.watchFile(require.resolve(module), async () => {
		await uncache(require.resolve(module))
		cb(module)
	})
}
function uncache(module = '.') {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(module)]
			resolve()
		} catch (e) {
			reject(e)
		}
	})
}

require('./index')
nocache('./index', module => console.log('Bot güncellendi...'));

const start = () => {
	const conn = makeWASocket({
		logger: P({ level: 'silent' }),
		printQRInTerminal: true,
		auth: state,
	})
    conn.ev.on('messages.upsert', async(mek) => {
    mek = mek.messages[0]
	  if (!mek.message) return	
	mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
	if (mek.key && mek.key.remoteJid === 'status@broadcast') return
    require('./index')(conn, mek, store)
    })		
    conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect } = update
		if (connection === 'close') {
			if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
				start()
			}
		} else if (connection === 'open') {
			console.log('Bota bağlantı kuruldu')
		}
	})
    conn.ev.on('creds.update', saveState)
    
}

start()