const Discord = require('discord.js');
const prefix = require('./config.json');
const token = require('./sensinfo.json')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong! :ping_pong:');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop! :sdkrobot:');
	}
});