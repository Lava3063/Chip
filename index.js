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
		message.channel.send('Boop! Nice to SEE you HUMAN. :robot:');
	}
 	else if (message.content === `${prefix}help`) {
		message.channel.send('Here are the commands I take:');
		message.channel.send('!ping: Pings me and if you get a response, im up. If not, im down');
		message.channel.send('!beep: Beep Boop, I am a ROBOT. Pleased to meet you, HUMAN');
		message.channel.send('!about: About Chip ')
		message.channel.send('!github: Links my GitHub page')
		message.channel.send('!help: Displays this message');
		message.channel.send('!invite: Get an invite link, so you can add me to your server')
	}
	else if (message.content === `${prefix}github`) {
		message.channel.send('Here is my GitHub page!')
		message.channel.send('https://github.com/Lava3063/Chip')
		message.channel.send('Feel free to suggust ideas in the issues section, report an issue, or contribute to development')
	}
	else if (message.content === `${prefix}about`) {
		message.channel.send('Hi! Im chip. Im a discord bot designed to be my creators first project, and for all of you to have fun with me.')
	}
	else if (message.content === `${prefix}invite`) {
		message.channel.send('Oh, you want to have me join your server? Shure, ill join! Here is my link. Looking forward to seeing a new server!')
		message.channel.send('Dev here. Thank you for choosing to have my bot come to your server. I know this is cheesy, but it means a lot to me.')
		message.channel.send('This bot will go offline and online, due to it being hosted on my laptop, and commands will change, cause its in active development.')
		message.channel.send('Keeping those things in mind, have fun!')
		message.channel.send('https://discord.com/oauth2/authorize?client_id=867866394804224051&scope=bot+applications.commands')
	}


});