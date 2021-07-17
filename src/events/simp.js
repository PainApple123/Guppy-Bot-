const { MessageEmbed } = require('discord.js');
const client = require('../index.js')

// message
/* Emitted whenever a message is created.
PARAMETER      TYPE           DESCRIPTION
message        Message        The created message    */
client.on("message", (message) => {
if (message.content === 'https://media.discordapp.net/attachments/786929814690594847/854511658394320906/a_8fd6ca92c6ee86fc44c071cafe449b92.gif') {
    message.channel.send('**SIMP**')
    }
    if(message.content === 'https://tenor.com/view/dead-chat-xd-dead-cat-xd-gif-21810400') {
        message.channel.send('**OH NO XDXD**!')
    }
    if(message.content === "gdead") {
        if(message.author.id !== '416352888177033216') return;
        message.channel.send('**Dead Chat**<:plsrevchat:858161535301189644><:plsrevchat:858161535301189644><:plsrevchat:858161535301189644>')
    }
    if(message.content === "gembed") {
        if(!message.member.hasPermission('KICK_MEMBERS')) return;
        const embed = new MessageEmbed()
        .setTitle('The ||$slut|| Command is DISABLED so dont try it or you will Recive a warning!')
        message.channel.send(embed)

    }
})