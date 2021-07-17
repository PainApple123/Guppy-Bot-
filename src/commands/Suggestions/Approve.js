const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'approve',
    cooldown: 0,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I dont have permission to EMBED_LINKS!')
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not have permission to use that command!')
        const messageID = args[0];
        const approveQuery = args.slice(1).join(" ");

        try {
            const suggestionChannel = message.guild.channels.cache.get('855878432142262322');
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID)

            const data = suggestedEmbed.embeds[0];


            const approveEmbed = new MessageEmbed()
            .setAuthor(data.author.name, data.author.iconURL)
            .setTitle('Suggestion Approved!')
            .setDescription(data.description)
            .setColor('#4ff52a')
            .addField(`Reason:`, approveQuery);

            suggestedEmbed.edit(approveEmbed);

            const user = await client.users.cache.find((u) => u.tag === data.author.name)
            user.send(`Your suggestion has been Approved!`)
            user.send(approveEmbed)
        } catch(err) {
            console.log(err)
        }
    }
}