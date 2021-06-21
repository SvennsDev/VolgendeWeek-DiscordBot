module.exports = {
    name: "close",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(message, args, client, Discord, discord) {
        
        const categoryID = "804092603225079828";

        if (message.channel.parentID == categoryID) {

            message.channel.delete();
        
            // Create embed.
            var embedCreateTicket = new Discord.MessageEmbed()
                .setTitle("Ticket closed")
                .setDescription(`Het ticket **#${message.channel.name}** is gesloten`)
                .setTimestamp()
                .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");
        
            // Channel voor logging
            var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log");
            if (!ticketChannel) return message.reply("Kanaal bestaat niet");
        
            ticketChannel.send(embedCreateTicket);
        
        } else {
        
            message.channel.send("Gelieve dit command te doen bij een ticket.");
        
        }
    }
}