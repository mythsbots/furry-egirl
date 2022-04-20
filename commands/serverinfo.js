const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'serverinfo',
    description: 'just a serverinfo command',
    async execute(args, message, discord, client){
        const serverinfo = new MessageEmbed()
        .setTitle('Server Information')
        .addField('Server ID:', message.guild.id)
        .addField('Amount of Members in the Server:', message.guild.memberCount)
        
        message.channel.send({embeds: [serverinfo]});
    }
}