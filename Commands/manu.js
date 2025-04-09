const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = (s.MODE.toLowerCase() === "yes") ? "public" : "private";

    cm.map((com) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Nairobi");
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `🎩 *Hello ${nomAuteurMessage}!* 🎩
━━━━━━━━━━━━━━━━━━━━
🚀 *𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:* 𝐉𝐁𝐊𝐄𝐍𝐘
━━━━━━━━━━━━━━━━━━━━
🌍 *SYSTEM INFO:*
💻 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
━━━━━━━━━━━━━━━━━━━━
⚙️ *BOT STATUS:*
⭕ ᴍᴏᴅᴇ: *${mode}*
💫 ᴘʀᴇғɪx: *[ ${prefixe} ]*
⏳ ᴛɪᴍᴇ: ${temps}
📆 ᴅᴀᴛᴇ: ${date}
━━━━━━━━━━━━━━━━━━━━
📢 *𝐂𝐇𝐀𝐍𝐍𝐄𝐋𝐒 & 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐈𝐎𝐍𝐒:*  
use this link... to get all services in one click
🔵 https://jacobmusyokaservicessite.onrender.com  
━━━━━━━━━━━━━━━━━━━━
${readMore}
📜 *COMMAND MENU* 📜
━━━━━━━━━━━━━━━━━━━━\n`;

    let menuMsg = ``;

    for (const cat in coms) {
        menuMsg += `🌏 *${cat.toUpperCase()}* 🌍\n`;
        for (const cmd of coms[cat]) {
            menuMsg += `   💎 ${cmd}\n`;
        }
        menuMsg += `━━━━━━━━━━━━━━━━━━━━\n`;
    }

    menuMsg += `✨ *𝐉𝐁𝐊𝐄𝐍𝐘 - 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒅 𝒃𝒚 𝐉𝐁𝐊𝐄𝐍𝐘* ✨`;

    let imageUrl = "";

    try {
        zk.sendMessage(dest, { 
            image: { url: imageUrl }, 
            caption: infoMsg + menuMsg, 
            footer: "© 𝐉𝐁𝐊𝐄𝐍𝐘" 
        }, { quoted: ms });
    } catch (e) {
        console.log("🥵 Menu error: " + e);
        repondre("🥵 Menu error: " + e);
    }
});
