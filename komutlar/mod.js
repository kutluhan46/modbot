const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField(' | Moderasyon Bot Komutları',`
**.emoji-bilgi** : İsmini yazdığınız emoji hakkında bilgi verir
**.emojiekle** : Sunucuya emoji eklersiniz. ÖR; .emojiekle <link> <isim>
**.mute** : Seçilen Kullanıcıya Mute Atar ÖR; .mute @etiket Süre(s=sn/m=dk/h=gün/d=gün) sebeb
**.jail** : Etiketlenen kişiyi jaile atar
**.sa-as** : Sa As Sistemi
**.reboot** : Botu yeniden başlatır. (sadece  bot sahibi idsi yazılan yapabilir yani <@692010615899947008> yapabilir)
**.çekiliş** : Sunucuda Çekiliş yapmanızı sağlar'
**.oylama** : Sunucuda oylma yapmanızı sağlar
**.ses-mute** : Seste mute atar.
**.say** : Sunucuyu sayar.
**.tag-say** : Tagda kaç kişi olduğunu sayar.
**.tag** : Sunucu Tagını Gösterir
**.afk** : Afk Olursunuz`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["mod"], 
  permLevel: 0
};
exports.help = {
  name: 'Moderasyon'
};