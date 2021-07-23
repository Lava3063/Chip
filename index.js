const mySecret = process.env['TOKEN']
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);

client.on('message', message => {
    if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong! :ping_pong:');
	}
});