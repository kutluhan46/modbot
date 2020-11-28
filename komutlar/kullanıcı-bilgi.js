const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
  const Durum = user.presence.status;
            const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
            const durm = (Durum == "online" ? (client.emojis.get('497040317552394241') + "Ã‡evrimiÃ§i") : (Durum == "offline" ? (client.emojis.get('497041097101410307') + "Ã‡evrimdÄ±ÅŸÄ±") : (Durum == "idle" ? (client.emojis.get('497040874010837012') + "BoÅŸta") : (Durum == "dnd" ? (client.emojis.get('497040545957543936') + "RahatsÄ±z Etmeyin") : ("Bilinmiyor/bulunamadÄ±.")))))
      const botemoji = client.emojis.get('497041350651412480')
            var tarih = ''
            if(moment(user.createdAt).format('MM') === '01') {
                var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '02') {
                var tarih = `${moment(user.createdAt).format('DD')} Åžubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '03') {
                var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '04') {
                var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '05') {
                var tarih = `${moment(user.createdAt).format('DD')} MayÄ±s ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '06') {
                var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '07') {
                var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '08') {
                var tarih = `${moment(user.createdAt).format('DD')} AÄŸustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '09') {
                var tarih = `${moment(user.createdAt).format('DD')} EylÃ¼l ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '10') {
                var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '11') {
                var tarih = `${moment(user.createdAt).format('DD')} KasÄ±m ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '12') {
                var tarih = `${moment(user.createdAt).format('DD')} AralÄ±k ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
  
    const member = message.guild.member(user);
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(user.avatarURL)
        .addField("Â» Tag:", `${user.tag}`)
        .addField("Â» ID:", `${user.id}`)
        .addField("Â» Sunucudaki KullanÄ±cÄ± AdÄ±:", `${member.nickname !== null ? `${member.nickname}` : 'Sunucuda kullanÄ±cÄ± adÄ± bulunmuyor.'}`)
        .addField("Â» Hesap KuruluÅŸ Tarihi:", `${tarih}`)
        .addField("Â» Bot mu?:", `${user.bot ? `${botemoji}`  : "HayÄ±r."}`)
        .addField("Â» Durum:", `${durm}`)
        .addField("Â» Åžuanda OynadÄ±ÄŸÄ± Oyun:", `${user.presence.game ? user.presence.game.name : 'Åžuanda hiÃ§ bir oyun oynamÄ±yor.'}`)
        .addField("Â» Rolleri:", `${member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') ? member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') : 'Bu kullanÄ±cÄ±nÄ±n bu sunucuda hiÃ§ rolÃ¼ bulunmuyor.'}`)
     message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanÄ±cÄ±','kb'],
  permLevel: `Yetki gerekmiyor. (${0})`
};

exports.help = {
  name: 'kullanÄ±cÄ±-bilgi',
  category: "kullanÄ±cÄ±",
  description: 'Ä°stediÄŸiniz kullanÄ±cÄ± hakkÄ±nda bilgi verir.',
  usage: 'kullanÄ±cÄ±-bilgi <@kiÅŸi-etiket>'
};