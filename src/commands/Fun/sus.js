const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'sus',
    cooldown: 0,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        message.channel.send('<a:pepeExplode:856668154783334420><a:pepeExplode:856668154783334420><a:pepeExplode:856668154783334420><a:pepeExplode:856668154783334420>').then(message.delete())
    }
}