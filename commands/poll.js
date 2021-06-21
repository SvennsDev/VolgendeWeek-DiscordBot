module.exports = {
    name: 'poll',
    description: 'Maak een poll!',
    execute(message, args, client, Discord, discord){

    // !announcement title | bericht

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet");

    var seperator = "|";

    if (args[0] == null) {

        var embed = new Discord.MessageEmbed()
            .setTitle("Gebruik")
            .setDescription(`Maak een poll door gebruik te maken van: \n !poll titel ${seperator} bericht ${seperator} Emoji 1 ${seperator} Emoji 2`)
            .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "✅";
    if (argsList[3] === undefined) argsList[3] = "❌";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        emoji1: argsList[2].trim(),
        emoji2: argsList[3].trim()

    }

    var announceEmbed = new Discord.MessageEmbed()
        .setTitle(`${options.titel}`)
        .setColor('#007bff')
        .setDescription(`\n\n ${options.bericht} \n`)
        .setTimestamp()
        .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");

    var channel = message.member.guild.channels.cache.find(channels => channels.name === "📊┃polls");
    if (!channel) return message.reply("Dit kanaal bestaat niet");

    channel.send(announceEmbed).then((msg) =>{
        msg.react(`${options.emoji1}`);
        msg.react(`${options.emoji2}`);
        message.delete();
    }).catch((err)=>{
        throw err;
    });

    }
}