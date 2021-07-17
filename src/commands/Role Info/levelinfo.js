const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {
    name: 'info',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('**Level Roles!!**')
        .setDescription('<@&862413642402103346> Get by being level 5+ \n <@&856639466910908416> Get by being Level 10+ \n <@&856639569721556992> Get by being level 20+ \n <@&856639678274338866> Get by being level 30+ \n <@&856639768631574569> Get By Being level 40+ \n <@&856640062846402571> Get By Being Level 60+ \n <@&856640183180853289> Get By Being Level **70!!+** ')
        .setColor('#2c9196')
        .setImage('https://images.cooltext.com/5541035.png')

        await message.channel.send(embed).then(message.delete())
    }
}