exports.exec = (bot,msg,params) => {

if (msg.mentions.users.size === 0) {
    return msg.reply("Please mention a user to kick").catch(console.error);
  }
  let kickMember = msg.guild.member(msg.mentions.users.first());
  if (!kickMember) {
    return msg.reply("That user does not seem valid");
  }
  if (!msg.member.hasPermission('KICK_MEMBERS')) {
 return msg.reply("You need to have perm KICK_MEMBERS to do this")
   }
  if (!msg.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return msg.reply("I don't have the permissions KICK_MEMBER to do this.")
  }
if (!kickMember.kickable) return msg.channel.send(`${msg.author.toString()} I can't kick this member`)
  kickMember.kick().then(member => {
    msg.reply(`${member.user.username} was succesfully kicked.`).catch(console.error);
  })
  console.log(`The user "${msg.mentions.users.first().username}" has been kicked from the server ${msg.guild.name}`)
}
