const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong! :ping_pong:');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop! Nice to see you HUMAN. :robot:');
	
	} else if (command === 'kick') {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}
		const taggedUser = message.mentions.users.first();

		message.channel.send(`Kicked ${taggedUser.username}`);

	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
		});

		message.channel.send(avatarList);

	} else if (command === 'purge') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to purge messages in this channel');
		});
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
			{ name: "!userinfo", value: "Displays info about the user (eg, Name, User ID)"},
			{ name: "!server", value: "Displays server info (eg, Server name People online"},

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
	} else if (message.content === `${prefix}userinfo`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}

});
