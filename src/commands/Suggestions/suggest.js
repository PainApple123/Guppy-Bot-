const { Client, Message, MessageEmbed } = require('discord.js');
  
module.exports = {
    name: 'suggest',
    cooldown: 0,
    /** 
    * @param {Client} client 
    * @param {Message} message 
    * @param {String[]} args 
    */
    run: async(client, message, args) => {
        if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I dont have permission to EMBED_LINKS!')
        const suggestionQuery = args.join(' ')
        const channel = message.guild.channels.cache.find(c => c.name === '〔🍪〕suggestions');
        if(!suggestionQuery) return message.reply('Please Give a suggestion!')

        const sembed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**Suggestion**: ${suggestionQuery}`)
        .setColor('#f567f0')
        .setTimestamp();

        message.channel.send('Submitted Suggestion!')
        channel.send(sembed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}