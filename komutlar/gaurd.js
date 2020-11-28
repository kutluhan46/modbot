  
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField(' | Guard Bot Komutları',`

**.ban** : Etiketlenen Kişiyi Yasaklar . ÖR; .ban @etiket sebeb
**.küfür koruma** : Küfür Filtresini Etkinleştirir. ÖR; .küfür (aç/kapat)
**.reklam taraması** :Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.
**.rol-koruma** : Anti-raid özelliği aktif eder.
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["guard"], 
  permLevel: 0
};
exports.help = {
  name: 'Guard'
};