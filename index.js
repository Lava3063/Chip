const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong! :ping_pong:');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop! :robot:');
	}
 	else if (message.content === `${prefix}help`) {
		message.channel.send('Here are the commands I take:');
		message.channel.send('!ping: Pings me and if you get a response, im up. If not, im down');
		message.channel.send('!beep: Beep Boop, I am a ROBOT. Pleased to meet you, HUMAN');
		message.channel.send('!help: Displays this message');
	}
	else if (message.content === `${prefix}github`) {
		message.channel.send('Here is my GitHub page!')
		message.channel.send('https://github.com/Lava3063/Chip')
		message.channel.send('Feel free to suggust ideas in the issues section, report an issue, or contribute to development')
	}
	else if (message.content === `${prefix}about`) {
		message.channel.send('Hi! Im chip. Im a discord bot designed to be my creators first project, and for all of you to have fun with me.')
	}

	

});