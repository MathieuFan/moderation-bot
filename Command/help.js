exports.exec = (bot,msg,params) => {	   
msg.channel.send("", {embed: {
  color: 3447003,
  author: {
  },
  title: 'List of all command',
  description: `The prefix is "$"`,
  fields: [  
    {
      name: '**__help__**',
      value: 'See the list of commands'
    },
    {
      name: '**__purge__**',
      value: 'Purge a channel, need "MANAGE_MESSAGES"',
    },
    {
      name: '**__delete @<user> <number>__**',
      value: 'Delete last <number> messages of <user>, need "MANAGE_MESSAGES"',
    },
    {
      name: '**__Report__**',
      value: 'Report a user need to create a textual channel named "report" for log the reports',
    },
    {
      name: '**__info__**',
      value: 'Infos about the bot and his creator',
    },
    {
      name: '**__serverinfo__**',
      value: 'Infos about the server where the bot exectued the command'
    },
    {
      name: '**__ban @<user> | unban @<user>__**',
      value: 'Ban an user, need BAN_MEMBERS | Unban an user'
    },
    {
      name: '**__mute @<user>__**',
      value: 'Mute | Unmute an user, need "MANAGES_ROLES" and a role named "Muted" with just the perm "READ_MESSAGES". /!\ The role need to be under the role moderator/admin (or other role, can be use the command), but need to be on top of other roles. Set the role on a textual channel with the perm read messages and can\'t write messages.'
    },
     {
      name: '**__kick @<user>__**',
      value: 'kick an user, need "KICK_MEMBERS"'
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: bot.user.avatarURL,
    text: '© ModoBot'
  }}}).catch(console.error)
     console.log(`The command /help has been executed on ${msg.guild.name}`)
}
