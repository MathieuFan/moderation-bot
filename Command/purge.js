exports.exec = (bot,msg,params) => {
if (msg.member.hasPermission('MANAGE_MESSAGES')) {
let args = msg.content.split(" ").slice(1);
 let messagecount = parseInt(args.join(' '));
  msg.channel.fetchMessages({limit: `${isNaN(messagecount) ? 100 : messagecount }`}).then(messages => { msg.channel.bulkDelete(messages,true).then()})
      msg.delete(msg.author);
    }else{ 
		if (msg.member.hasPermission('EMBED_LINKS')) {
          let embed = new bot.discord.RichEmbed()
          .setColor(16711680)
          .setDescription("You don't have the right perm for delete messages")
          msg.channel.send({embed})
} else {
    msg.channel.send("```You don't have the right perm for delete messages```") }
    }console.log(`commande purge utilisée sur ${msg.guild.name}`)
}     
