const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('778187211078107156') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setDescription(`⚙️ | **${ayarlar.prefix}Mod** Moderasyon-Bot-Komutları\n⚙️ | **${ayarlar.prefix}Register** Register-Bot-Komutları\n⚙️ | **${ayarlar.prefix}Guard** Guard-Bot-Komutşarı\n⚙️ | **${ayarlar.prefix}Funny** Funny-Bot-Komutları`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage('') //sunucunuzun ppsinin linkini koyun istemezseniz boş bırakabilirsiniz
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
}