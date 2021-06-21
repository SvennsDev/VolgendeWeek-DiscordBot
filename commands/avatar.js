module.exports = {
    name: 'avatar',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]) ||
        client.users.cache.find(user => user.username.toLowerCase() == args.join(" ").toLowerCase()) ||
        client.users.cache.find(user => user.tag.toLowerCase() == args.join(" ").toLowerCase()));

    if (!member) member = message.member;

    var embed = new Discord.MessageEmbed()
        .setTitle(`Avatar ${member.user.username}`)
        .setColor("#007bff")
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096}))
        .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");

    message.channel.send(embed);
    }
}