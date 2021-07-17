const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dm',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You are Missing Permissions!')

        let mentionedMember = message.mentions.members.first()
        if(!mentionedMember) return message.channel.send()
        const query = args.slice(1).join(" ");
        if(!query) return message.channel.send('What do you wanna send to that user!')

        mentionedMember.send(query)
    }
}