module.exports = {
    name: 'giveaway',
    description: 'Maak een suggestie!',
    async execute(message, args, client, Discord, discord){
    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry jij kan dit niet doen");

    var channel = message.member.guild.channels.cache.get("830821775280570419");

    if (!channel) return message.channel.send("Channel niet gevonden!");

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    if (!winnerCount) return message.reply("Geen aantal spelers opgegeven");
    if (!time) return message.reply("Geen tijd opgegeven");
    if (!item) return message.reply("Geen winnaars item opgegeven");

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new Discord.MessageEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setFooter(`Eindigd op ${dateEnd}`, "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png")
        .setDescription(`Doe mee met de giveaway en win **${item}** \n Klik op de 🎉 om mee te doen aan de giveaway!`);

    var embedSend = await channel.send(giveawayEmbed);
    embedSend.react("🎉");

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }

        }

        if (peopleReacted.length == 0) {
            return message.channel.send("Niemand heeft gewonnen dus de bot wint.");
        }

        if (peopleReacted.length < winnerCount) {
            return message.channel.send("Er zijn te weinig mensen die mee deden daarom heeft de bot gewonnen.");
        }

        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if (winners[o] == peopleReacted[random]) {
                    inList = true;
                    y--;
                    break;
                }

            }

            if (!inList) {
                winners.push(peopleReacted[random]);
            }

        }

        for (let y = 0; y < winners.length; y++) {

            message.channel.send("🎉 **GIVEAWAY AFGELOPEN!** 🎉")
            var serverEmbed = new Discord.MessageEmbed()
            .setTitle(`${item}`)
            .setDescription(`Gefeliciteerd, **${winners[y].username}** \n Heeft **${item}** gewonnen!`)
            .setColor("#22ff00")
            .setTimestamp()
            .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");

            return message.channel.send(serverEmbed);
        }

    }, time * 1000)
    }
}