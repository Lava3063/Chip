module.exports = {
	name: 'invite',
	description: 'Sends the bot invite link',
	execute(message, args) {
		message.channel.send({embed: {
			color: 4565743,
			title: "Invite me to your server!",
			fields: [
			{ name: "https://discord.com/oauth2/authorize?client_id=867866394804224051&scope=bot+applications.commands", value: " Hope to see you soon! -Chip", inline: true},
			]
			}
			});
	},
};