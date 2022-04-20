const Discord = require('discord.js');

require('dotenv').config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-'

const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
        const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('fursuiting rn');
    client.user.setPresence({ activities: [{ name: 'Furry Porn Simulator (VR!) 2021' }]});
    client.user.setStatus('dnd');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command === '8ball'){
        client.commands.get('8ball').execute(message, args);
    } else if (command === 'howgay'){
        client.commands.get('poll').execute(message, args);
    } else if (command === 'poll'){
        client.commands.get('poll').execute(message, args);
    } else if (command === 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args);
    }
 });


client.login(process.env.DISCORD_TOKEN);