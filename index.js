const {
	default: makeWASocket,
	useSingleFileAuthState,
	DisconnectReason,
	getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const P = require('pino')
const axios = require('axios')

const prefix = ''
const ownerNumber = ['905413616548']
	
module.exports = async(conn, mek, store) => {
		try {
			const type = getContentType(mek.message)
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			
			const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
			const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "templateButtonReplyMessage") && mek.message[type].selectedId ? mek.message[type].selectedId : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''

			const isCmd = body.startsWith(prefix)
			const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
			
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const isGroup = from.endsWith('@g.us')
			const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
			const senderNumber = sender.split('@')[0]
			const botNumber = conn.user.id.split(':')[0]
			const pushname = mek.pushName || 'Müşteri'

			var items = ['Gizem', 'Derya','Seher', 'Canan', 'Tuana', 'Alev', 'Arzu', 'Aslı', 'Ferda', 'Nil'];

			const betaname = items[Math.floor(Math.random() * items.length)];
			
                        const x = await getJson(`https://raw.githubusercontent.com/keyiflerolsun/A101AktuelRobot/main/A101.json`)
                        const c = x['Bu Hafta'] for (let i = 0; i < c.length; i++)
                        
			const isMe = botNumber.includes(senderNumber)
			const isOwner = ownerNumber.includes(senderNumber) || isMe
			
			const reply = async(teks) => {
				await conn.sendMessage(from, { text: teks }, { quoted: mek })
			}
			
			const getJson = async (url, options = {}) => {
  			try {
    		let { data } = await axios({
      		method: options.method || 'GET',
      		url,
    		});
    		return data;
  			} catch (e) {
    		throw e;
  			}
			};

			if (mek.message.listResponseMessage){
				list = mek.message.listResponseMessage.singleSelectReply.selectedRowId
				if (list.includes(`a`)){
				reply('0001')}

				if (list.includes(`b`)){
				reply('0002')}

				if (list.includes(`c`)){
				reply('0003')}

				if (list.includes(`d`)){
				reply('0004')}

				if (list.includes(`e`)){
				reply('stickerpack1')}

				if (list.includes(`f`)){
				reply('hizmetler')}


			}


			switch (command) {

case 'merhaba':
	
	reply(`İyi günler *${pushname}*, ben Dijital Asistanınız ${betaname} 🤗`)

	let buttonsx= [
		{buttonId: prefix + 'menu', buttonText: {displayText: '🎮 YAZILIM MENÜ'}, type: 1},
		{buttonId: prefix + 'konum', buttonText: {displayText: '📍 KONUM'}, type: 1},
		{buttonId: prefix + 'a101', buttonText: {displayText: '🍟 A101 KATALOG'}, type: 1},
	  ]
	let buttonMessagessssss = {
		image: {url: 'https://i.hizliresim.com/tw47gsj.jpg'},
		caption: "UPO MARKT'a hoş geldiniz. Size daha hızlı yardımcı olabilmem için istediğiniz yazılım modeline ihtiyacım var. Tüm hizmetleri listeliyorum...",
		footer: 'UPO MARKT | 0414 606 04 45',
		buttons: buttonsx,
		headerType: 4
	}


let reactionMessage1 = {
	react: {
		text: "💫",
		key: mek.key
	}
}


await conn.sendMessage(from, reactionMessage1)
await conn.sendMessage(from, buttonMessagessssss)


break


case 'selam':
	
	reply(`İyi günler *${pushname}*, ben Dijital Asistanınız ${betaname} 🤗`)

	let buttonsxx= [
		{buttonId: prefix + 'menu', buttonText: {displayText: '🎮 YAZILIM MENÜ'}, type: 1},
		{buttonId: prefix + 'konum', buttonText: {displayText: '📍 KONUM'}, type: 1},
		{buttonId: prefix + 'stickerpack1', buttonText: {displayText: '🍟 STİCKER PACK'}, type: 1},
	  ]
	let buttonMessagesss = {
		image: {url: 'https://i.hizliresim.com/tw47gsj.jpg'},
		caption: "UPO MARKT'a hoş geldiniz. Size daha hızlı yardımcı olabilmem için istediğiniz yazılım modeline ihtiyacım var. Tüm hizmetleri listeliyorum...",
		footer: 'UPO MARKT | 0414 606 04 45',
		buttons: buttonsxx,
		headerType: 4
	}


let reactionMessage1x = {
	react: {
		text: "💫",
		key: mek.key
	}
}


await conn.sendMessage(from, reactionMessage1x)
await conn.sendMessage(from, buttonMessagesss)


break

case "a101":
reply(${c})
await conn.sendMessage(from, {image: {url: c[i]}})
break

case "konum": {
	let sentMsg  = await conn.sendMessage(
		from, 
		{ location: { degreesLatitude: 41.0322806231775,   degreesLongitude: 29.028546991391305 } }
	)
	
}
break

case "test" :{
const x = await getJson('https://raw.githubusercontent.com/Dariush757/animes.raw/main/texto.json')
const j = x['Bu Hafta']
for (let i = 0; i < j.length; i++) {
conn.sendMessage(from, {image: {url: j[i]}}, {quoted: mek})
}
}
break

case "stickerpack1": {

	let reactionMessage = {
		react: {
			text: "🔍",
			key: mek.key
		}
	}

	await conn.sendMessage(from, reactionMessage)


	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/2.webp") })
	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/3.webp") })
	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/4.webp") })
	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/5.webp") })
	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/6.webp") })
	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/7.webp") })
	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/8.webp") })
	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/9.webp") })
	await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/10.webp") })

	reply(`Tamamlandı 🍟`)




}
break


case "gelistirici":
	let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Coder Mert\n' // full name
            + 'ORG:UPO MARKT;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=905413616548:+90 541 361 65 48\n' // WhatsApp ID + phone number
            + 'END:VCARD'
let sentMsg  = await conn.sendMessage(
    from,
    { 
        contacts: { 
            displayName: 'Coder Mert', 
            contacts: [{ vcard }] 
        }
    }
)


break


case 'siparis':
	reply(`${pushname} isteğiniz üzerine siparişiniz firmamıza bildirilmiştir. Size destek olabilmek çok keyifliydi. Biz hep buradayız, dilediğiniz zaman tekrar yazabilirsiniz. 😊`)
	break




case "hizmetler":{

	let reactionMessage = {
		react: {
			text: "🔍",
			key: mek.key
		}
	}

	let buttons= [
		{buttonId: prefix + 'menu', buttonText: {displayText: 'YAZILIM MENÜ'}, type: 1},
		{buttonId: prefix + 'gelistirici', buttonText: {displayText: 'GELİŞTİRİCİLER'}, type: 1},
	  ]
	let buttonMessages = {
		image: {url: 'https://miro.medium.com/max/1838/1*fkyEgZnbf3jJP3-G7xykLg.jpeg'},
		caption: "*HİZMETLERİMİZ*\n\nMobil Uygulama\nWeb Tabanlı Yazılımlar\nWeb Tasarımı\nEğitim Yazılımı\nPersonel ve Saha Takip\n\n\nFirmanıza özel kurumsal web ve mobil yazılımlara ihtiyacınız varsa bizimle iletişime geçebilirsiniz.",
		footer: 'UPO MARKT | 0414 606 04 45',
		buttons: buttons,
		headerType: 4
	}

	await conn.sendMessage(from, reactionMessage)
	await conn.sendMessage(from, buttonMessages)
}
break



case "0001":
	let reactionMessage = {
		react: {
			text: "🔍",
			key: mek.key
		}
	}

	let templateButtons = [
		{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://codermert.github.io/'}},
		{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 541 361 65 48'}},
		{index: 3, quickReplyButton: {displayText: 'SATIN AL', id: prefix + 'siparis'}},

		
	  ]

	let buttonMessage = {
		image: {url: 'https://aday.ius.edu.ba/sites/default/files/artificial-intelligence-2167835_1920.jpg'},
		caption: "*Android Mobil Uygulama*\n\n🏷️ ₺1000'den başlayan fiyatlarla\n 🧑‍💻 Android OS\n\n\n30 dakika içerisinde sipariş ver, %30 indirim yakala",
		footer: 'UPO MARKT | 0414 606 04 45',
		templateButtons: templateButtons,
		headerType: 4
		
	}
	await conn.sendMessage(from, reactionMessage)
	await conn.sendMessage(from, buttonMessage)
	 break

case "0002":
	let reactionMessage2 = {
		react: {
			text: "🔍",
			key: mek.key
		}
	}

	let templateButtons2 = [
		{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://codermert.github.io/'}},
		{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 541 361 65 48'}},
		{index: 3, quickReplyButton: {displayText: 'SATIN AL', id: prefix + 'siparis'}},

		
	  ]

	let buttonMessage2 = {
		image: {url: 'https://socialmedia.com.tr/wp-content/uploads/2022/06/social-audio.png'},
		caption: "*Sosyal Medya Tasarım*\n\n🏷️ ₺100'den başlayan fiyatlarla\n 🧑‍💻 EPS - PSD\n\n\n30 dakika içerisinde sipariş ver, %30 indirim yakala",
		footer: 'UPO MARKT | 0414 606 04 45',
		templateButtons: templateButtons2,
		headerType: 4
		
	}
	await conn.sendMessage(from, reactionMessage2)
	await conn.sendMessage(from, buttonMessage2)
	
	 break

	 
 case "0003":
		let reactionMessage3 = {
			react: {
				text: "🔍",
				key: mek.key
			}
		}
	
		let templateButtons3 = [
			{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://codermert.github.io/'}},
			{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 541 361 65 48'}},
			{index: 3, quickReplyButton: {displayText: 'SATIN AL', id: prefix + 'siparis'}},

			
		  ]
	
		let buttonMessage3 = {
			image: {url: 'https://www.cybermagonline.com/img/sayfa/phone-with-instagram-popping-up-icons-274845-85.jpg'},
			caption: "*Instagram Account*\n\n🏷️ ₺1'den başlayan fiyatlarla\n 🧑‍💻 Telefon Doğrulaması \nHesap oluşturucumuz, popüler SMS siteleriyle hesaplarınızı otomatik olarak Telefonla Doğrulayabilir.\n\n 🧑‍💻 Oluşturduğumuz IG hesaplarına Türk isim - biyografi, resim hatta özel avatar yüklüyoruz!\n\n\n30 dakika içerisinde sipariş ver, %30 indirim yakala",
			footer: 'UPO MARKT | 0414 606 04 45',
			templateButtons: templateButtons3,
			headerType: 4
			
		}
		await conn.sendMessage(from, reactionMessage3)
		await conn.sendMessage(from, buttonMessage3)
		
		 break


 case "0004":
		let reactionMessage4 = {
			react: {
				text: "🔍",
				key: mek.key
			}
		}
	
		let templateButtons4 = [
			{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://codermert.github.io/'}},
			{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 541 361 65 48'}},
			{index: 3, quickReplyButton: {displayText: 'SATIN AL', id: prefix + 'siparis'}},

			
		  ]
	
		let buttonMessage4 = {
			image: {url: 'https://cdn.wmaraci.com/blog/smm-panel.png'},
			caption: "*Sosyal Medya Hizmeti*\n\n🏷️ ₺200'den başlayan fiyatlarla\n 🧑‍💻 Tüm Sosyal Medya Ağlarını Tek Panelden Rahatça Yönetin\n\n\n30 dakika içerisinde sipariş ver, %30 indirim yakala",
			footer: 'UPO MARKT | 0414 606 04 45',
			templateButtons: templateButtons4,
			headerType: 4
			
		}
		await conn.sendMessage(from, reactionMessage4)
		await conn.sendMessage(from, buttonMessage4)
		
		 break





case "menu":
let sections = [
    {
	rows: [
	    {title: "Android Mobil Uygulama", rowId: `${prefix}a`, description: "0001"},
	    {title: "Sosyal Medya Tasarım", rowId: `${prefix}b`, description: "0002"},
	    {title: "Instagram Account", rowId: `${prefix}c`, description: "0003"},
	    {title: "Sosyal Medya Hizmeti", rowId: `${prefix}d`, description: "0004"},
	    {title: "Sticker Paketi", rowId: `${prefix}e`, description: "0005"},
	    {title: "Hizmetlerimiz", rowId: `${prefix}f`, description: "0006"},
		
	]
    },
   
]
let listMessage = {
  text: "💸 Online ödeme\n🚛 1-14 iş gününde teslimat\n📦 Temiz kodlama",
  footer: "",
  title: " 🧑‍💻 ᴜᴘᴏ ᴍᴀʀᴋᴛ | ʏᴀᴢɪʟɪᴍ  🧑‍💻",
  buttonText: "🛒 Yazılım Listesi 🛒",
  sections
}


 await conn.sendMessage(from, listMessage)
 await conn.sendMessage(from,  { sticker: fs.readFileSync("./Media/2.webp") })

break


default:
if (body.startsWith('=>')) {
let _return
let _text = `(async () => { ${body.slice(2)} })()`
try {
_return = await eval(_text)
} catch (e) {
const isError = String(e)
console.log(isError)
} finally {
reply(require('util').format(_return))
}}

if (body.startsWith('~')) {
		try {
		let evaled = await eval(body.slice(2))
		if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
		reply(`${evaled}`)
		} catch (err) {
		reply(`${err}`)
		}
		}
			}
			
		} catch (e) {
			const isError = String(e)
			
			console.log(isError)
		}
	}
