const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('WolfieBot is online!');

    client.user.setActivity("Play.WolfPlaza.nl", { type: "PLAYING" });
});

// var swearWords = ["koe", "kalf", "varken"];

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;


    // var msg = message.content.toLowerCase();

    // for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

    //     if (msg.includes(swearWords["vloekwoorden"][i])) {

    //         message.delete();

    //         return message.reply("Gelieve niet te vloeken").then(msg => msg.delete({ timeout: 3000 }));

    //     }

    // }


     var messageArray = message.content.split(" ");


    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    var senteceUser = "";
    var amountSwearWords = 0;

    for (let y = 0; y < messageArray.length; y++) {

        const word = messageArray[y].toLowerCase();

        var changeWord = "";

        for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

            if (word.includes(swearWords["vloekwoorden"][i])) {

                changeWord = word.replace(swearWords["vloekwoorden"][i], "******");

                senteceUser += " " + changeWord;

                amountSwearWords++;

            }

        }

        if (!changeWord) {
            senteceUser += " " + messageArray[y];
        }

    }

    if (amountSwearWords != 0) {

        message.delete();
    }
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'ticket'){
        client.commands.get('ticket').execute(message, args, client, Discord);
    } else if (command == 'serverstatus'){
        client.commands.get('serverstatus').execute(client, message, args, Discord);
    } else if (command == 'suggestie'){
        client.commands.get('suggestie').execute(message, args, client, Discord);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args, client, Discord);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args, client, Discord);
    } else if (command == 'giveaway'){
        client.commands.get('giveaway').execute(message, args, client, Discord);
    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args, client, Discord);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args, client, Discord);
    } else if (command == 'botinfo'){
        client.commands.get('botinfo').execute(message, args, client, Discord);
    } else if (command == 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args, client, Discord);
    } else if (command == 'leden'){
        client.commands.get('leden').execute(message, args, client, Discord);   
    } else if (command == 'poll'){
        client.commands.get('poll').execute(message, args, client, Discord);   
    } else if (command == 'close'){
        client.commands.get('close').execute(message, args, client, Discord);   
    }
});
 
client.login('ODA0MDIzNzc3OTE0MTI2Mzc3.YBGTfg.jKik46X1qIm_m6LuHrgypGVitY4');
 
 
//----- Command JS File -----
// 
//module.exports = {
//    name: 'ping',
//    description: "this is a ping command!",
//    execute(message, args){
//        message.channel.send('pong!');
//    }
//}