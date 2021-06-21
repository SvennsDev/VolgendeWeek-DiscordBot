module.exports = {
    name: 'botinfo',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var serverEmbed = new Discord.MessageEmbed()
        .setTitle("Wolfie Bot")
        .setColor("#006eff")
        .addField("BotInfo:", `discord.gg/nCTGEGkjRk`)
        .addField(` **Naam**:`, `${client.user.username}`)
        .addField(` **Versie**:`, `BETA 0.5`)
        .addField(` **Ping:**`, `${message.createdTimestamp- Date.now()} ms`)
        .addField(` **Developers:**`, `DevelopementTeam`)
        .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");
        
    return message.channel.send(serverEmbed);
    }
}