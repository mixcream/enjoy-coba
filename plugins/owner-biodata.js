import moment from 'moment-timezone'

let jam = moment.tz ('asia/jakarta').format('HH:mm:ss')
let tanggal = moment.tz("asia/jakarta").format("ll") 
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    "documentMessage": {
                    "title": `${ucapan()} @${m.sender.split("@")[0]}`, 
                    "jpegThumbnail": fs.readFileSync('./thumbnail.jpg')
                          }
                        }
                      }
const teks = `
-----
`
conn.sendMessage(m.chat,{ text: teks }, { quoted: anu })
}



handler.help = ['obio']

handler.tags = ['info']

handler.command = /^obio$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Selamat Pagi "
  }
  if (time >= 10) {
    res = "Selamat Siang "
  }
  if (time >= 15) {
    res = "Selamat Sore "
  }
  if (time >= 18) {
    res = "Selamat Malam "
  }
  return res
}