const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bam',
    cooldown: 0,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const Bamuser = message.mentions.members.first();
        if(!Bamuser) return message.channel.send('WHO should i BAM!')

        message.channel.send(`Successfully BAMMED ${Bamuser}!`)
    }
}