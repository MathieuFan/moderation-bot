exports.exec = (bot,msg,params) => {
	if(params.length < 1){
	msg.channel.send("Precise your report") 
	}else{
	msg.guild.channels.find("name", "report").send("New report\n"+params.join(" "))
	msg.channel.send("The report has been sent.")
	console.log(`The report has been done on ${msg.guild.name}`) 
	}
}
