module.exports = {
	name: 'kick',
	description: 'Kicks a user',
	guildOnly: true,
	permissions: 'KICK_MEMBERS',
	execute(message, args) {
        let member = message.mentions.members.first();
		if(!member) return message.reply("Please mention a valid member of this server");
		if(!member.kickable) return message.reply("I cannot kick this member!");
		member.kick();
		message.channel.send("User has been kicked")
	},
};