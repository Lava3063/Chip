module.exports = {
	name: 'beep',
	description: 'Beep Boop, I am a robot.',
	execute(message, args) {
		message.channel.send('Boop! Nice to see you HUMAN. :robot:');
	},
};