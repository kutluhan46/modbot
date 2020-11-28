const Discord = require("discord.js"); 

exports.run = (client, message, args) => { 

if (!message.member.permissions.has("MOVE_MEMBERS")) return message.channel.send("⛔ Bu komutu kullana bilmek için `Üyeleri taşı` yetkisine sahip olmanız gerek") 
let kanal = args[1]; 
let kullanici = message.mentions.members.first() 
if (!kanal) return message.channel.send("Kanal belirtmedin") 
if (!kullanici) return message.channel.send("Kullanıcıyı belirtmedin") 

kullanici.setVoiceChannel(`${kanal}`)
.then(() => message.channel.send(`${kullanici} #${kanal}; adlı kanala taşındı`)) 
.catch(console.error); 
} 
//OSKOBS
exports.conf = { 

enabled: true,
guildOnly: true, 
aliases: ['üyeyitaşı'], 
permLevel: 0
 }; 
//OSKOBS
exports.help = { 
name: 'taşı', 
description: 'İstediğiniz kişiniyi bir sesli kanaldan diğerine taşır.', 
usage: 'taşı [kullanıcı] [kanal id]' 
};