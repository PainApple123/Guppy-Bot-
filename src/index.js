const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});

const path = require('path')
const fs = require('fs')
const config = require('./config.json');
module.exports = client;
client.commands = new Collection();
client.prefix = config.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
}); 

client.on("ready", () => {
    client.user.setActivity('Guppy Videos!', { type: 'WATCHING' });
  })
  
  client.on('message', (message) => {
    const { content } = message

    const eachLine = content.split('\n')

    for (const line of eachLine) {
      if (line.includes('=')) {
        const split = line.split('=')
        const emoji = split[0].trim()
        message.react(emoji)
      }
    }
  })

client.login(config.token);