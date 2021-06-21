const util = require('minecraft-server-util');

module.exports = {
    name: 'serverstatus',
    description: 'get information about a minecraft server',
    execute(client, message, args, Discord){
        if(!args[0] === undefined) args[0] = "play.wolfplaza.nl";
        if(!args[1] === undefined) args[1] = "25569";
        
        util.status('play.wolfplaza.nl', {port: parseInt('25569')}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#00ee00')
            .setTitle('WolfPlaza Server Status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Spelers', value: response.onlinePlayers},
                {name: 'Max Spelers', value: response.maxPlayers},
            )
            .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");

            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('Er was een error bij het inladen van de server');
            throw error;
        })
    }
}