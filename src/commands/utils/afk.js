const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require("../../Collection");
module.exports = {
    name: 'afk',
    cooldown: 0,
    /** 
    * @param {Client} client 
    * @param {Message} message 
    * @param {String[]} args 
    */
    run: async(client, message, args) => {
        const reason = args.join(" ") || "No Reason Specified!"

        afk.set(message.author.id, [Date.now(), reason])

        message.reply(`You are now AFK for \`${reason}\``)
    }
}