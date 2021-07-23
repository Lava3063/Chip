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
		message.channel.send('Boop! Nice to see you HUMAN. :robot:');
	}
 	else if (message.content === `${prefix}help`) {

		message.channel.send({embed: {
			color: 3447003,
			title: "My Commands",
			fields: [
			{ name: "!ping", value: "Pings me. If you get a response, im up. If not, im down"},
			{ name: "!beep", value: "Beep Boop, I am a ROBOT. Pleased to meet you, HUMAN"},
			{ name: "!about", value: "About Chip"},
			{ name: "!github", value: "Displays My Github Page" },
			{ name: "!help", value: "Displays this embed"},
			{ name: "!invite", value: "Displays bot invite link"},

			]
			}
			});
	}
	else if (message.content === `${prefix}github`) {
		message.channel.send('Here is my GitHub page!');
		message.channel.send('https://github.com/Lava3063/Chip');
		message.channel.send('Feel free to suggust ideas in the issues section, report an issue, or contribute to development');
	}
	else if (message.content === `${prefix}about`) {
		message.channel.send('Hi! Im chip. Im a discord bot designed to be my creators first project, and for all of you to have fun with me.');
	}
	else if (message.content === `${prefix}invite`) {

		message.channel.send({embed: {
			color: 4565743,
			title: "Invite me to your server!",
			fields: [
			{ name: "https://discord.com/oauth2/authorize?client_id=867866394804224051&scope=bot+applications.commands", value: " Hope to see you soon! -Chip", inline: true},
			]
			}
			});
	}


});