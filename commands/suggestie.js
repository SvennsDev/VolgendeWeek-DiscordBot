module.exports = {
    name: 'suggestie',
    aliases: ['suggest', 'suggesties'],
    permissions: [],
    description: 'Maak een suggestie!',
    execute(message, args, client, Discord, discord){
        const channel = message.guild.channels.cache.find(c => c.name === '📝┃suggesties');
        if(!channel) return message.channel.send('Het suggestie kanaal is niet gevonden!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setTitle("Suggestie")
        .setColor("#007bff")
        .setDescription(messageArgs)
        .addField(`Door:`, message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");

        channel.send(embed).then((msg) =>{
            msg.react('✅');
            msg.react('❌');
            msg.react('❓');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}