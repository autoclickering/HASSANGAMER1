const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`Logging into Discord`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`on  ${client.guilds.size} Servers `);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`♥`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("online")
 });


client.on("ready", () => {
let channel =     client.channels.get("510213840068411413
")
setInterval(function() {
channel.send(الله اكبر♥);
}, 25)
})
 
 
client.login(process.env.BOT_TOKEN);
