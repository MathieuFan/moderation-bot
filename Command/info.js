exports.exec = (bot,msg,params) => {
	const embed = new bot.discord.RichEmbed()
  .setTitle('Informations about me')
  .setAuthor('Made by Mathieu Fan', 'https://i.imgur.com/hRlv4aR_d.jpg')
.setColor(0x00AE86)
  .setDescription('ModoBot is created for make the moderation more easyli.')
  .addField('Uptime:', (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " secondes ")
.addField("Mathieu Fan's youtube channel:", 'https://youtube.com/user/TheMathieuFan', true)
.addField("Mathieu Fan's twitch channel:", 'https://twitch.tv/themathieu77', true)
msg.channel.send({embed});
        console.log(`Info command has been executed on ${msg.guild.name}`)
}
