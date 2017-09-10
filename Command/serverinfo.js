exports.exec = (bot,msg,params) => {
	msg.delete()
let vocaux = msg.guild.channels.array().filter(g => g.type == 'voice').length
let ecris = msg.guild.channels.array().filter(g => g.type == 'text').length
let createur = msg.guild.owner.user.username
let region = msg.guild.region
let id = msg.guild.id
let icon = msg.guild.iconURL
let NbPrésentSurServ = msg.guild.memberCount
let nom = msg.guild.name
let créance = msg.guild.createdAt
let verif = msg.guild.verificationLevel
const embed = new bot.discord.RichEmbed()
  .setTitle("Serveur info ")
  .setAuthor("Mathieu Fan", "https://i.imgur.com/hRlv4aR_d.jpg")
  .setColor('RANDOM')
  .setDescription("Info from the server.")
  .setThumbnail(`${icon}`)
  .addField('Name of the server:', `${nom}`, true)
  .addField('Id of the server:', `${id}`, true)
  .addField('Number of people on the server:', `${NbPrésentSurServ}`)
  .addField('Server created at:', `${créance}`, true)
  .addField('Level require for talk:', `${verif}`, true)
  .addField('Server\'s region', `${region}`, true)
  .addField('Server Owner', `${createur}`)
  .addField('Number of textual channel:', `${ecris}`, true)
  .addField('Number of vocal channel:', `${vocaux}`, true) 
  msg.channel.send({embed});
  console.log(`The command serverinfo has been executed on ${msg.guild.name}`)
}
