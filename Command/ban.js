exports.exec = (bot,msg,params) => {

 if (!msg.member.hasPermission('BAN_MEMBERS')) {
 return msg.reply("You need to have perm BAN_MEMBERS to do this")
   }
 if (!msg.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
   return message.reply("The bot need to have perm BAN_MEMBERS to do this")
  }
 if (msg.mentions.users.size === 0) {
  return msg.reply("Please mentionned an user to ban")
  }
 let banMember = msg.guild.member(msg.mentions.users.first());
 if (!banMember) {
  return msg.reply("This user doesn't exist");
  }

 if (!banMember.bannable) {
  return msg.reply("This user can't be banned");
  }

 let args = msg.content.split(" ").slice(1);
   if (isNaN(args[1]) || args[1] > 7) args[1] = 0;
    banMember.ban(parseInt(args[1]))
   .then(member => {
    return msg.channel.send(`The user **${member.user.username}**(${member.user.id}) was succesfully banned`)
 })
console.log(`The user "${msg.mentions.users.first().username}" has been banned from ${msg.guild.name}`)
}
