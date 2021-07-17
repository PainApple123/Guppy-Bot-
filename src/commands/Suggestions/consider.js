const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'consider',
    cooldown: 0,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not have permission to use that command!')
        if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I dont have permission to EMBED_LINKS!')
        const messageID = args[0];
        const considerQuery = args.slice(1).join(" ");

        try {
            const suggestionChannel = message.guild.channels.cache.get('855878432142262322');
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID)

            const data = suggestedEmbed.embeds[0];

            const considerEmbed = new MessageEmbed()
            .setAuthor(data.author.name, data.author.iconURL)
            .setTitle('Suggestion Considered!')
            .setDescription(data.description)
            .setColor('YELLOW')
            .addField(`Reason`, considerQuery);


            suggestedEmbed.edit(considerEmbed);

            const user = await client.users.cache.find((u) => u.tag === data.author.name)
            user.send(`Your suggestion has been Considered!`)
            user.send(considerEmbed)
        } catch(err) {
            console.log(err)
        }
    }
}