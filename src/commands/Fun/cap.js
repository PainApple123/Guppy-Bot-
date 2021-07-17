const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'cap',
    cooldown: 0,
    /** 
    * @param {Client} client 
    * @param {Message} message 
    * @param {String[]} args 
    */
    run: async (client, message, args) => {
        const capUser = message.mentions.members.first() || message.member;

        const capEmbed = new MessageEmbed()
        .setTitle('**STOP THE CAP <a:ADKekgiggle:856665325244121088>**')
        .setDescription(`**${message.member} has caught ${capUser} CAPPING** !`)
        .setColor('RED')
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp();

        message.channel.send(capEmbed).then((msg) =>{
            message.delete();
        })

    }
}