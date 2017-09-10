exports.exec = (bot,msg,params) => {
	      if (msg.member.hasPermission('MANAGE_MESSAGES')) {        
          let args = msg.content.split(" ").slice(1);
      if (args.length != 2) {
      msg.reply("```I don't know the command, sorry```");
      return;
}
  if(args[1] == parseInt(args[1])){
      let userId = msg.mentions.users.first().id;
      let messagecount = parseInt(args[1]) - 1;
      msg.channel.fetchMessages({limit: 100}).then(messages => {
          let msg_array = messages.array();
          msg_array = msg_array.filter(m => m.author.id === userId);
          msg_array.length = messagecount + 1;
          msg_array.map(m => m.delete().catch(console.error));
      });
    }
      var link = msg.content.split(' ');
      link.shift();
      link = link.join(' ');
      link.substring(args[0].length + args[1].lenght + 2);
      msg.channel.sendMessage(args[1] + " latest messages by " + msg.mentions.users.first().username + " has been deleted ").then(m => m.delete(12000));
      msg.delete(msg.author)
         
} else {
      if (msg.member.hasPermission('EMBED_LINKS')) {
          let embed = new bot.discord.RichEmbed()
          .setColor(16711680)
          .setDescription("You don't have the right perm for delete messages")
          msg.channel.send({embed})
} else {
    msg.channel.send("```You don't have the right perm for delete messages```") }
    }console.log(`Delete command has been executed on ${msg.guild.name}, for delete the last message of "${msg.mentions.users.first().username}"`) 
}
