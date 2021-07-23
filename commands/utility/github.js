module.exports = {
	name: 'github',
	description: 'Links to the github page',
	execute(message, args) {
		message.channel.send('Here is my GitHub page!');
		message.channel.send('https://github.com/Lava3063/Chip');
		message.channel.send('Feel free to suggust ideas in the issues section, report an issue, or contribute to development');
	},
};