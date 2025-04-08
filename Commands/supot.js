'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});

const { zokou } = require("../framework/zokou");

zokou({
  'nomCom': "support",
  'reaction': '🐥',
  'categorie': "Support-Owner",
  'nomFichier': __filename
}, async (zk, dest) => {
    await zk.sendMessage(dest, {
        text: "*Holla*\n\n*Click on the button below to join the official WhatsApp Channel*",
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363317462952356@newsletter',
                newsletterName: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
                serverMessageId: 143,
            },
            forwardingScore: 999, // Score to indicate it has been forwarded
            externalAdReply: {
                title: "JBKENY",
                body: "Next Generation",
                thumbnailUrl: 'https://files.catbox.moe/ibi3x2.jpg', // Add thumbnail URL if required 
                sourceUrl: 'https://files.catbox.moe/ibi3x2.jpg', // Add source URL if necessary
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    });
});
