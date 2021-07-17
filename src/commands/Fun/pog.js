const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pog',
    cooldown: 0,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        message.channel.send("<:Guppoggers:859175726564376596><:Guppoggers:859175726564376596><:Guppoggers:859175726564376596><:Guppoggers:859175726564376596>").then(message.delete())
    }
}