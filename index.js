const {
	default: makeWASocket,
	useSingleFileAuthState,
	DisconnectReason,
	getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const P = require('pino')


const prefix = ''
const ownerNumber = ['904146060445']
	
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

			var items = ['Gizem', 'Derya','Seher', 'Mert', 'Tuana'];

			const betaname = items[Math.floor(Math.random() * items.length)];
			
			const isMe = botNumber.includes(senderNumber)
			const isOwner = ownerNumber.includes(senderNumber) || isMe
			
			const reply = async(teks) => {
				await conn.sendMessage(from, { text: teks }, { quoted: mek })
			}
			


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


			}


			switch (command) {

case 'merhaba':
	
	reply(`İyi günler *${pushname}*, ben ${betaname} 🤗`)

	let buttonsx= [
		{buttonId: prefix + 'menu', buttonText: {displayText: '🦾  YAZILIM MENÜ'}, type: 1},
		{buttonId: prefix + 'konum', buttonText: {displayText: '📍 KONUM'}, type: 1},
		{buttonId: prefix + 'hizmetler', buttonText: {displayText: '👩‍💻 HİZMETLER'}, type: 1},
	  ]
	let buttonMessagessssss = {
		image: {url: 'https://i.hizliresim.com/9ss6jx1.png'},
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
	
	reply(`İyi günler *${pushname}*, ben ${betaname} 🤗`)

	let buttonsxx= [
		{buttonId: prefix + 'menu', buttonText: {displayText: '🦾  YAZILIM MENÜ'}, type: 1},
		{buttonId: prefix + 'konum', buttonText: {displayText: '📍 KONUM'}, type: 1},
		{buttonId: prefix + 'hizmetler', buttonText: {displayText: '👩‍💻 HİZMETLER'}, type: 1},
	  ]
	let buttonMessagesss = {
		image: {url: 'https://i.hizliresim.com/9ss6jx1.png'},
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

case "konum": {
	let sentMsg  = await conn.sendMessage(
		from, 
		{ location: { degreesLatitude: 41.0322806231775,   degreesLongitude: 29.028546991391305 } }
	)
	
}
break


case 'siparis':
	reply(`${pushname} İsteğiniz üzerine siparişiniz firmamıza bildirilmiştir. Size destek olabilmek çok keyifliydi. Biz hep buradayız, dilediğiniz zaman tekrar yazabilirsiniz. 😊`)
	break




case "hizmetler":{
	let buttons= [
		{buttonId: prefix + 'menu', buttonText: {displayText: 'YAZILIM MENÜ'}, type: 1},
		{buttonId: prefix + 'konum', buttonText: {displayText: 'MAĞAZA KONUM'}, type: 1},
	  ]
	let buttonMessages = {
		image: {url: 'https://miro.medium.com/max/1838/1*fkyEgZnbf3jJP3-G7xykLg.jpeg'},
		caption: "*BEDEN TABLOSU*",
		footer: 'UPO MARKT | 0414 606 04 45',
		buttons: buttons,
		headerType: 4
	}
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
		
	]
    },
   
]
let listMessage = {
  text: "💸 Online ödeme\n🚛 1-14 iş gününde teslimat\n📦 Temiz kodlama",
  footer: "",
  title: " 🧑‍💻 UPO MARKT | Yazılım  🧑‍💻",
  buttonText: "🛒 Yazılım Listesi 🛒",
  sections
}


 await conn.sendMessage(from, listMessage)
 await conn.sendMessage(from,  { audio: fs.readFileSync("./mert.mp3"), ptt: true })

 
 

break

			}
			
		} catch (e) {
			const isError = String(e)
			
			console.log(isError)
		}
	}
	