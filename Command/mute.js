exports.exec = (bot,msg,params) => {
    if(!msg.member.hasPermission("MANAGE_ROLES")){
        return msg.reply("You need to have perm MANAGE_ROLES to do this")
    }
     if (msg.mentions.users.size === 0) {
        return msg.reply("Please mentionned an user to mute/unmute")
    }
    if (!msg.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
   return message.reply("The bot need to have perm BAN_MEMBERS to do this")
    } 
    
    let mutedRole = msg.guild.roles.find('name', 'Muted')
    let member = msg.guild.member(msg.mentions.users.first())
    
    if(!member.roles.find('name','Muted')){
        member.addRole(mutedRole.id).then(addRole => msg.channel.send(`The user ${params[0]} is now muted`)).catch(console.err)
        console.log(`The user "${msg.mentions.users.first().username}" has been muted from the server ${msg.guild.name}`)
    }else{
        member.removeRole(mutedRole.id).then(removeRole => msg.channel.send(`The user ${params[0]} is now unmuted`)).catch(console.err)
        console.log(`The user "${msg.mentions.users.first().username}" has been unmuted from the server ${msg.guild.name}`)
    }     
}

