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
			
			const isMe = botNumber.includes(senderNumber)
			const isOwner = ownerNumber.includes(senderNumber) || isMe
			
			const reply = async(teks) => {
				await conn.sendMessage(from, { text: teks }, { quoted: mek })
			}
			


			if (mek.message.listResponseMessage){
				list = mek.message.listResponseMessage.singleSelectReply.selectedRowId
				if (list.includes(`a`)){
				reply('482315')}

				if (list.includes(`b`)){
				reply('475574')}

				if (list.includes(`c`)){
				reply('482310')}

				if (list.includes(`d`)){
				reply('479671')}

				if (list.includes(`e`)){
				reply('475887')}

			}


			switch (command) {

case 'merhaba':
	
	reply(`İyi günler *${pushname}* 😊`)

	let buttonsx= [
		{buttonId: prefix + 'menu', buttonText: {displayText: '👠  AYAKKABI MENÜ'}, type: 1},
		{buttonId: prefix + 'konum', buttonText: {displayText: '📍 MAĞAZA KONUM'}, type: 1},
		{buttonId: prefix + 'bedentablosu', buttonText: {displayText: '📐 BEDEN TABLOSU'}, type: 1},
	  ]
	let buttonMessagessssss = {
		image: {url: 'https://www.sirnakisplatformu.com/upload/2021/04/alfa_400_400.jpg'},
		caption: "Alfa Ayakkabı'ya hoş geldiniz. Size daha hızlı yardımcı olabilmem için istediğiniz ayakkabı modeline ihtiyacım var. Mağazamızda bulunan tüm ayakkabıları listeliyorum.",
		footer: 'Alfa Ayakkabı',
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

case "konum": {
	let sentMsg  = await conn.sendMessage(
		from, 
		{ location: { degreesLatitude: 37.92845239236922,   degreesLongitude: 40.17069727853868 } }
	)
	
}
break


case 'siparis':
	reply(`${pushname} İsteğiniz üzerine siparişiniz firmamıza bildirilmiştir. Size destek olabilmek çok keyifliydi. Biz hep buradayız, dilediğiniz zaman tekrar yazabilirsiniz. 😊`)
	break




case "bedentablosu":{
	let buttons= [
		{buttonId: prefix + 'menu', buttonText: {displayText: 'AYAKKABI MENÜ'}, type: 1},
		{buttonId: prefix + 'konum', buttonText: {displayText: 'MAĞAZA KONUM'}, type: 1},
	  ]
	let buttonMessages = {
		image: {url: 'https://louiscardy.com.tr/i/u/beden-tablosu.jpg'},
		caption: "*BEDEN TABLOSU*",
		footer: 'Alfa Ayakkabı',
		buttons: buttons,
		headerType: 4
	}
	await conn.sendMessage(from, buttonMessages)
}
break



case "482315":
	let reactionMessage = {
		react: {
			text: "🔍",
			key: mek.key
		}
	}

	let templateButtons = [
		{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://www.smmalpha.com/'}},
		{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 414 606 04 45'}},
		{index: 3, quickReplyButton: {displayText: 'SATIN AL', id: prefix + 'siparis'}},

		
	  ]

	let buttonMessage = {
		image: {url: 'https://img.tozlu.com/Uploads/UrunResimleri/buyuk/siyahbeyaz-kadin-cirtli-sneaker-spor-a--495f-.jpg'},
		caption: "*SiyahBeyaz Kadın Cırtlı Sneaker Spor Ayakkabı 482315*\n\n🏷️ ₺79,99\n👠 Spor Ayakkabı Siyah-Beyaz\n\n\n30 dakika içerisinde sipariş ver, ürünün kargoda\n\n🫣 Beden tablosu için *bedentablosu* yazınız",
		footer: 'Alfa Ayakkabı',
		templateButtons: templateButtons,
		headerType: 4
		
	}
	await conn.sendMessage(from, reactionMessage)
	await conn.sendMessage(from, buttonMessage)
	 break

case "475574":
	let reactionMessage2 = {
		react: {
			text: "🔍",
			key: mek.key
		}
	}

	let templateButtons2 = [
		{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://www.smmalpha.com/'}},
		{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 414 606 04 45'}},
		
	  ]

	let buttonMessage2 = {
		image: {url: 'https://img.tozlu.com/Uploads/UrunResimleri/buyuk/siyah-kadin-yuksek-taban-gunluk-spor-a--a0a2-.jpg'},
		caption: "*Siyah Kadın Yüksek Taban Günlük Spor Ayakkabı 475574*\n\n🏷️ ₺139,99\n👠 Spor Ayakkabı Siyah\n\n\n30 dakika içerisinde sipariş ver, ürünün kargoda\n\n🫣 Beden tablosu için *bedentablosu* yazınız",
		footer: 'Alfa Ayakkabı',
		templateButtons: templateButtons2,
		headerType: 4
		
	}
	await conn.sendMessage(from, reactionMessage2)
	await conn.sendMessage(from, buttonMessage2)
	
	 break

	 
 case "482310":
		let reactionMessage3 = {
			react: {
				text: "🔍",
				key: mek.key
			}
		}
	
		let templateButtons3 = [
			{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://www.smmalpha.com/'}},
			{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 414 606 04 45'}},
			
		  ]
	
		let buttonMessage3 = {
			image: {url: 'https://img.tozlu.com/Uploads/UrunResimleri/buyuk/siyah-kadin-bagcikli-sneaker-spor-ayak-2b4c57.jpg'},
			caption: "*Siyah Kadın Bağcıklı Sneaker Spor Ayakkabı 482310*\n\n🏷️ ₺89,99 \n👠 Spor Ayakkabı Siyah\n\n\n30 dakika içerisinde sipariş ver, ürünün kargoda\n\n🫣 Beden tablosu için *bedentablosu* yazınız",
			footer: 'Alfa Ayakkabı',
			templateButtons: templateButtons3,
			headerType: 4
			
		}
		await conn.sendMessage(from, reactionMessage3)
		await conn.sendMessage(from, buttonMessage3)
		
		 break


 case "479671":
		let reactionMessage4 = {
			react: {
				text: "🔍",
				key: mek.key
			}
		}
	
		let templateButtons4 = [
			{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://www.smmalpha.com/'}},
			{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 414 606 04 45'}},
			
		  ]
	
		let buttonMessage4 = {
			image: {url: 'https://img.tozlu.com/Uploads/UrunResimleri/buyuk/kotmavisi-kadin-duz-taban-gunluk-ayakk-e103-4.jpg'},
			caption: "*KOTMAVİSİ Kadın Düz Taban Günlük Ayakkabı 479671*\n\n🏷️ ₺139,99 \n👠 Günlük Ayakkabı KOTMAVİSİ\n\n\n30 dakika içerisinde sipariş ver, ürünün kargoda\n\n🫣 Beden tablosu için *bedentablosu* yazınız",
			footer: 'Alfa Ayakkabı',
			templateButtons: templateButtons4,
			headerType: 4
			
		}
		await conn.sendMessage(from, reactionMessage4)
		await conn.sendMessage(from, buttonMessage4)
		
		 break


case "475887":
			let reactionMessage5 = {
				react: {
					text: "🔍",
					key: mek.key
				}
			}
		
			let templateButtons5 = [
				{index: 1, urlButton: {displayText: 'Web Sitemiz', url: 'https://www.smmalpha.com/'}},
				{index: 2, callButton: {displayText: 'Hemen Ara', phoneNumber: '+90 414 606 04 45'}},
				
			  ]
		
			let buttonMessage5 = {
				image: {url: 'https://img.tozlu.com/Uploads/UrunResimleri/buyuk/bej-kadin-sivri-burun-kalin-topuklu-ay-b847-3.jpg'},
				caption: "*Bej Kadın Sivri Burun Kalın Topuklu Ayakkabı 475887*\n\n🏷️ ₺169,99 \n👠 Topuklu Ayakkabı Bej\n\n\n30 dakika içerisinde sipariş ver, ürünün kargoda\n\n🫣 Beden tablosu için *bedentablosu* yazınız",
				footer: 'Alfa Ayakkabı',
				templateButtons: templateButtons5,
				headerType: 4
				
			}
			await conn.sendMessage(from, reactionMessage5)
			await conn.sendMessage(from, buttonMessage5)
			
			 break

case "menu":
let sections = [
    {
	rows: [
	    {title: "SiyahBeyaz Kadın Cırtlı Sneaker Spor Ayakkabı", rowId: `${prefix}a`, description: "482315"},
	    {title: "Siyah Kadın Yüksek Taban Günlük Spor Ayakkabı", rowId: `${prefix}b`, description: "475574"},
		{title: "Siyah Kadın Bağcıklı Sneaker Spor Ayakkabı", rowId: `${prefix}c`, description: "482310"},
	    {title: "KOTMAVİSİ Kadın Düz Taban Günlük Ayakkabı", rowId: `${prefix}d`, description: "479671"},
		{title: "Bej Kadın Sivri Burun Kalın Topuklu Ayakkabı", rowId: `${prefix}e`, description: "475887"},
		{title: "Siyah Kadın Bağcıklı Anaroklu Yüksek Taban Günlük Spor Ayakkabı", rowId: `${prefix}f`, description: "479589"}
	]
    },
   
]
let listMessage = {
  text: "💸 Kapıda Ödeme\n🚛 1-3 iş gününde teslimat\n📦 Şeffaf Kargo",
  footer: "",
  title: "👠 ALFA AYAKKABI 👠",
  buttonText: "🛒 Ayakkabı Listesi 🛒",
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
	