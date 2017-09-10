const Discord = require("discord.js");//discord api in JS
const bot = new Discord.Client({autoReconnect: true});//for automatically reconnect the bot
const config = require("./config.json");//the config file with the prefix, name, and token
bot.discord = Discord;

//Modules
let purge         =    require(`./Command/purge.js`)           //purge command
let del           =    require(`./Command/delete.js`)          //delete command
let report        =    require(`./Command/report.js`)          //report command
let info          =    require(`./Command/info.js`)            //info command
let help          =    require(`./Command/help.js`)            //help command
let serverinfo    =    require(`./Command/serverinfo.js`)      //serverinfo command
let kick          =    require(`./Command/kick.js`)            //kick command
let ban           =    require(`./Command/ban.js`)             //ban command
let mute          =    require(`./Command/mute.js`)            //mute command

//prefix
let prefix = config.prefix;

bot.on('ready', () => {//bot when is connected

 bot.user.setStatus("online")//status
 bot.user.setGame("Your game description")//game
  console.log(`The bot has sucefully join: ${bot.guilds.map(g => g.name).join(" ,")}`); //bot is now connected
});

//bot token
bot.login(config.token);

//msg function
bot.on("message", msg => {
	
	if (!msg.content.startsWith(prefix)) return;
	let command = msg.content.split(" ")[0].slice(prefix.length)//split prefix (replace msg.content.startsWith(prefix+"")
    let params= msg.content.split(" ").slice(1)//params to split 
     
//purge a channel
if (command === "purge"){
	purge.exec(bot,msg,params)
}

//delete messages
if (command === "delete"){
	del.exec(bot,msg,params)
}

//report command
if (command === "report") {
	report.exec(bot,msg,params)
}

//info command
if (command === "info") {
	info.exec(bot,msg,params)
}

//help command
if (command === "help") {
	help.exec(bot,msg,params)
}

//serverinfo command
if (command === "serverinfo") {
	serverinfo.exec(bot,msg,params)
}

//kick command
if (command === "kick") {
	kick.exec(bot,msg,params)
}

//ban command
if (command === "ban") {
	ban.exec(bot,msg,params)
}

//mute/unmute command
if (command === "mute") {
	mute.exec(bot,msg,params)
}

})

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

