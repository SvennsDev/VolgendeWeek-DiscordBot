module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client, discord) {
        const channel = '💬│commands';
        const EventRole = message.guild.roles.cache.find(role => role.name === "📜| Event");
        const RoleplayRole = message.guild.roles.cache.find(role => role.name === "🎉 | RolePlay");
 
        const EventEmoji = '📢';
        const RoleplayEmoji = '🎉';
 
        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Speler taggs!')
        .setDescription('Van welke categorie wil jij wel een of niet een melding krijgen!\n\n', `Klik op ${EventEmoji} voor events`, `Klik op ${RoleplayEmoji} voor events`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(EventEmoji);
        messageEmbed.react(RoleplayEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === EventEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(EventRole);
                }
                if (reaction.emoji.name === RoleplayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(RoleplayRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === EventEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(EventRole);
                }
                if (reaction.emoji.name === RoleplayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(RoleplayRole);
                }
            } else {
                return;
            }
        });
    }
 
}   