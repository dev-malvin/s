const fs = require('fs')

//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.owner = "263714757857"
global.developer = "263776388689"
global.bot = ""
global.devname = "Malvin King"
global.ownername = "ᴍᴀʟᴠɪɴ ᴋɪɴɢ"
global.botname = "⎋sᴛᴀʀ xᴅ"
global.versisc = "2"
global.packname = "⎋sᴛᴀʀ xᴅ"
global.SESSION_ID = ""
//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/263714757857"
global.linkyt = "https://www.youtube.com/malvintech2"
global.linktt = "https://tiktok.com"
global.linktele = "https://t.me/malvintech"

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.prefix = ["","!",".",",","#","/","🎭","〽️"]
global.autoRecording = false
global.autoTyping = true
global.autorecordtype = false
global.autoread = true
global.autobio = false
global.anti92 = false
global.owneroff = false
global.autoswview = true

//~~~~~~~~~~~ Settings Thumbnail ~~~~~~~~~~~//
global.thumbbot = "https://i.ibb.co/Wv1PV58f/malvin-xd.jpg"
global.thumbown = "https://i.ibb.co/Wv1PV58f/malvin-xd.jpg"

//~~~~~~~~~~~ Settings Channel ~~~~~~~~~~~//
global.idchannel = "120363402507750390@newsletter*"
global.channelname = "ー⎋sᴛᴀʀ xᴅ UPDATES"
global.channel = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"

//~~~~~~~~~~~ Settings Message ~~~~~~~~~~~//
global.mess = {
  developer: " `[ Developer Only!! ]` \n This feature is for developers only!!",
  owner: " `[ Owner Only!! ]` \n This feature is for owners only!!",
  group: " `[ Group Only!! ]` \n This feature is for group chats only!!",
  private: " `[ Private Only!! ]` \n This feature is for private chats only!!",
  admin: " `[ Admin Only!! ]` \n This feature is for admins only!!",
  botadmin: " `[ Bot Admin Only!! ]` \n This feature is for bot admins only!!",
  wait: " `[ Wait!! ]` \n Please wait, loading...",
  error: " `[ Error!! ]` \n An error occurred!!",
  done: " `[ Done!! ]` \n Process completed!!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
