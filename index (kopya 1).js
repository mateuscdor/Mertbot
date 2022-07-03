const {
	default: makeWASocket,
	useSingleFileAuthState,
	DisconnectReason,
	getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const P = require('pino')


const prefix = '.'
const ownerNumber = ['904146060445']
	
module.exports = async(conn, mek, store) => {
		try {
			const type = getContentType(mek.message)
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			
			const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
			const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
			
			const isCmd = body.startsWith(prefix)
			const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
			
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const isGroup = from.endsWith('@g.us')
			const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
			const senderNumber = sender.split('@')[0]
			const botNumber = conn.user.id.split(':')[0]
			const pushname = mek.pushName || 'Coder Mert'
			
			const isMe = botNumber.includes(senderNumber)
			const isOwner = ownerNumber.includes(senderNumber) || isMe
			
			const reply = async(teks) => {
				await conn.sendMessage(from, { text: teks }, { quoted: mek })


			}
			

			if (mek.message.listResponseMessage){
				list = mek.message.listResponseMessage.singleSelectReply.selectedRowId
				if (list.includes(`482315`)){
				reply('.482315')}

				if (list.includes(`475574`)){
				reply('.475574')}
			}



			switch (command) {

case 'merhaba':
	
	
reply(`İyi günler *${pushname}*. Alfa Ayakkabı'ya hoş geldiniz. Size daha hızlı yardımcı olabilmem için istediğiniz ayakkabı modeline ihtiyacım var. Mağazamızda bulunan tüm ayakkabıları listeliyorum. Listeden seçerek belirtebilirsiniz`)
reply('.menu')

let reactionMessage1 = {
	react: {
		text: "💫",
		key: mek.key
	}
}


await conn.sendMessage(from, reactionMessage1)

break

case "konum":
	let sentMsg  = await conn.sendMessage(
		from, 
		{ location: { degreesLatitude: 37.92845239236922,   degreesLongitude: 40.17069727853868 } }
	)
	
break



case "bedentablosu":
	let buttonssssssss = [
	  ]
	let buttonMessagessssssssssssss = {
		image: {url: 'https://louiscardy.com.tr/i/u/beden-tablosu.jpg'},
		caption: "*BEDEN TABLOSU*",
		footer: 'Alfa Ayakkabı',
		buttons: buttonssssssss,
		headerType: 4
	}
	await conn.sendMessage(from, buttonMessagessssssssssssss)
break



case "memo":
	let buttons = [
		{buttonId: 'id1', buttonText: {displayText: 'SATIN AL'}, type: 1},
		
	  ]

	let buttonMessages = {
		image: {url: 'https://www.clandestino.com.tr/image/cachewebp/data/2019yaz/sh-001-black-01-615x850.webp'},
		caption: "*Deri Babet Siyah*\n\n💰499,00 TL\nSH 001 BLACK\nBeden : 36, 37, 38, 39, 40\n\n36 dakika içerisinde sipariş ver, ürünün bugün ücretsiz kargoda",
		footer: 'Alfa Ayakkabı',
		buttons: buttons,
		headerType: 4
	}
	await conn.sendMessage(from, buttonMessages)

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
		
	  ]

	let buttonMessage = {
		image: {url: 'https://img.tozlu.com/Uploads/UrunResimleri/buyuk/siyahbeyaz-kadin-cirtli-sneaker-spor-a--495f-.jpg'},
		caption: "*SiyahBeyaz Kadın Cırtlı Sneaker Spor Ayakkabı 482315*\n\n🏷️ ₺79,99\n👠 Spor Ayakkabı Siyah-Beyaz\n\n\n30 dakika içerisinde sipariş ver, ürünün kargoda\n\n🫣 Beden tablosu için *.bedentablosu* yazınız",
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
		caption: "*Siyah Kadın Yüksek Taban Günlük Spor Ayakkabı 475574*\n\n🏷️ ₺139,99\n👠 Spor Ayakkabı Siyah\n\n\n30 dakika içerisinde sipariş ver, ürünün kargoda\n\n🫣 Beden tablosu için *.bedentablosu* yazınız",
		footer: 'Alfa Ayakkabı',
		templateButtons: templateButtons2,
		headerType: 4
		
	}
	await conn.sendMessage(from, reactionMessage2)
	await conn.sendMessage(from, buttonMessage2)
	 break





case "menu":
let sections = [
    {
	rows: [
	    {title: "SiyahBeyaz Kadın Cırtlı Sneaker Spor Ayakkabı", rowId: `${prefix}482315`, description: "482315"},
	    {title: "Siyah Kadın Yüksek Taban Günlük Spor Ayakkabı", rowId: `${prefix}475574` , description: "475574"}
	]
    },
   {
	rows: [
	    {title: "Lacivert Kadın Yüksek Taban Günlük Spor Ayakkabı", rowId: `${prefix}475575`, description: "475575"},
	    {title: "Siyah Kadın Bağcıklı Yüksek Taban Günlük Spor Ayakkabı", rowId: `${prefix}475082`, description: "475082"}
	]
    },
	{
		rows: [
			{title: "Siyah Kadın Bağcıklı Sneaker Spor Ayakkabı", rowId: `${prefix}482310`, description: "482310"},
			{title: "Siyah Kadın Bağcıklı Anaroklu Yüksek Taban Günlük Spor Ayakkabı", rowId: `${prefix}479589`, description: "479589"}
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
 await conn.sendMessage(from,  { audio: { url: "./mert.mp3" }, mimetype: 'audio/mp4' },  { url: "/mert.mp3" }, // can send mp3, mp4, & ogg
)
 
 

break

			}
			
		} catch (e) {
			const isError = String(e)
			
			console.log(isError)
		}
	}
	