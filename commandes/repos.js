"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🛠️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/jbkeny/jbkeny;
  const img = 'https://files.catbox.moe/ibi3x2.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *𝐉𝐁𝐊𝐄𝐍𝐘.*\n support our channel *by*,  https://chat.whatsapp.com/BlYI9Cdy4q2KIbovipzKtO

╭─────────────────────➳
│╭────────────────────➳
││ 🗼 *REPOSITORY:* ${data.html_url}
││ 🌟 *STARS:* ${repoInfo.stars}
││ 🧧 *FORKS:* ${repoInfo.forks}
││ 📅 *RELEASE DATE:* ${releaseDate}
││🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
││ 👨‍💻 *OWNER:* *𝐉𝐁𝐊𝐄𝐍𝐘*
││ 🩸 *THEME:* *𝐉𝐁𝐊𝐄𝐍𝐘 𝐓𝐄𝐂𝐇*
││ 🥰 *𝐄𝐍𝐉𝐎𝐘 𝐓𝐎 𝐔𝐒𝐄 𝐉𝐁𝐊𝐄𝐍𝐘 *
│╰────────────────────➳
│╭──────────────────❍ 
││  ╭───────────────➳
││  │ _*𝐌𝐀𝐃𝐄 𝐁𝐘 𝐉𝐁𝐊𝐄𝐍𝐘*_
││  ╰───────────────➳
│╰──────────────────❍ 
╰─────────────────────➳ 
 ❍━━━━━━━━━━━━━━━━━━❍`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
