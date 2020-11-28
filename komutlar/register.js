  
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField(' | Register Bot Komutları',`

**.erkek-kayıt** : Kişiye erkek rolü verir. ÖR; !e @etiket isim yaş
**.kız-kayıt** : Kişiye kız rolü verir. ÖR; !k @etiket isim yaş
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["register"], 
  permLevel: 0
};
exports.help = {
  name: 'register'
};