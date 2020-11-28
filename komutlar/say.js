const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args,) => {
  let erkekRolü = "778011591127203882";
  let kızRolü = "778011590024626176";
  let ekipRolü = "778011589059543091";
  const embeddd = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setDescription(
      `<a:nr_siyahkelebek:778421068674629642>Sunucu Toplam Üye: ${message.guild.memberCount} \nToplam Aktif Üye: ${
        message.guild.members.filter(b => b.presence.status !== "offline").size
      } \n<a:nr_siyahkelebek:778421068674629642>Erkek Üye: ${
        message.guild.roles.get(erkekRolü).members.size
      } \n<a:nr_siyahkelebek:778421068674629642>Kız Üye: ${message.guild.roles.get(kızRolü).members.size} \n<a:nr_siyahkelebek:778421068674629642>Ekip: ${
        message.guild.roles.get(ekipRolü).members.size
      } \n<a:nr_siyahkelebek:778421068674629642>Aktif Erkek Üye: ${
        message.guild.roles
          .get(erkekRolü)
          .members.filter(x => x.presence.status !== "offline").size
      }  \n<a:nr_siyahkelebek:778421068674629642>Aktif Kız Üye: ${
        message.guild.roles
          .get(kızRolü)
          .members.filter(x => x.presence.status !== "offline").size
      } \n<a:nr_siyahkelebek:778421068674629642>Aktif Ekip: ${
        message.guild.roles
          .get(ekipRolü)
          .members.filter(x => x.presence.status !== "offline").size
      } \n<a:nr_siyahkelebek:778421068674629642>Ses Kanalında Bulunan: ${
        message.guild.members.filter(a => a.voiceChannel).size
      }`
    );
  message.channel.send(embeddd);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sy'],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sunucudaki üyeleri sayar.",
  usage: "say",
  kategori: "moderasyon"
};
