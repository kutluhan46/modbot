const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField(' | Funny Bot Komutları',`
**.avatar** : Profil Fotoğrafınızı Gösterir.
**.aşk-ölçer** : Aşk Ölçmeni Sağlar.
**.hacked** : Hacked Çerçeve Efekti.
**.kafasınasık** : Etiketlediğiniz Kişinin Kafasına Sıkar.
**.wasted** : Profil Fotoğrafınıza Wasted Efekti Verir.
**.zarat** : Zar Atarsınız.
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["Funny"], 
  permLevel: 0
};
exports.help = {
  name: 'funny'
};