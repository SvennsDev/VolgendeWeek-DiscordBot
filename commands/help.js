module.exports = {
    name: 'help',
    description: 'Maak een suggestie!',
    execute(message, args, client, Discord, discord){

         var textA = new Discord.MessageEmbed()
         .setTitle(`Bot commands`)
         .setColor("#007bff")
         .setDescription("\n")
         .addField("__Algemeen__", "!help - Geeft al de verschillende commands \n")
         .addField("__Informatie__", "!avatar - Stuur je eigen avatar.\n !suggestie - Type een suggestie. \n !ping - Zie hoeveel ping de bot heeft \n !serverstatus - Stuur de server status.\n !ticket - Maak een ticket aan\n !botinfo - Stuur de informatie van de bot \n !serverinfo - Stuur alle server info\n !leden - Laat zien hoeveel leden er zijn");
         
         var textB = new Discord.MessageEmbed()
         .setTitle(`__Staff__`)
         .setColor("#007bff")
         .setDescription("!announcement - Stuur een annoucement \n !ban - Ban iemand \n !clear - Verwijder berichten \n !kick - Kick een member. \n !giveaway - Maak een giveaway \n")
         .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");
         
         message.author.send(textA);
         message.author.send(textB);

         var reply = new Discord.MessageEmbed()
         .setTitle(`Help`)
         .setColor("#007bff")
         .setDescription("Alle help commands staan in je dm! :mailbox_with_mail:")
         .setFooter("Copyright © | WolfPlaza 2021", "https://images-ext-1.discordapp.net/external/085esAL70tOClTZIN-HsX7JU15iU1Z7k0rnW0eIEGTM/https/media.discordapp.net/attachments/802601154525528074/816816786946785300/WolfPlaza.png");

         message.channel.send(reply);
     }
}