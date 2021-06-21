const moment = require("moment");

module.exports = {
    name: 'serverinfo',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var serverEmbed = new Discord.MessageEmbed()
        .setTitle("WolfPlaza")
        .setColor("#006eff")
        .addField("ServerInfo:", `discord.gg/nCTGEGkjRk`)
        .addField(` **Naam**:`, `WolfPlaza Server`)
        .addField(` **Eigenaar:**`, `@GewoonDamon#0007`)
        .addField(` **Members**:`, `${message.guild.memberCount}`)
        .addField(` **Regio:**`, `Europa`)
        .addField(` **Aangemaakt:**`, `${moment(message.guild.createdAt).format('LL')}`)
        .addField(` **TextChannels:**`, `${message.guild.channels.cache.filter(chan => chan.type == "text").size}`)
        .addField(` **VoiceChannels:**`, `${message.guild.channels.cache.filter(chan => chan.type == "voice").size}`)
        .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");
        
    return message.channel.send(serverEmbed);
    }
}