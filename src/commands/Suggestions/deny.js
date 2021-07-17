const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'deny',
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
        const denyQuery = args.slice(1).join(" ");

        try {
            const suggestionChannel = message.guild.channels.cache.get('855878432142262322');
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID)

            const data = suggestedEmbed.embeds[0];

            const denyEmbed = new MessageEmbed()
            .setAuthor(data.author.name, data.author.iconURL)
            .setTitle('Suggestion Denied!')
            .setDescription(data.description)
            .setColor('#f52a2a')
            .addField(`Reason:`, denyQuery);

            suggestedEmbed.edit(denyEmbed);

            const user = await client.users.cache.find((u) => u.tag === data.author.name)
            user.send(`Your suggestion has been Denied!` )
            user.send(denyEmbed)
        } catch(err) {
            console.log(err)
        }
    }
}