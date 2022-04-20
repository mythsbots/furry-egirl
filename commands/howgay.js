const Discord = require('discord.js')

module.exports = {
    name: 'howgay',
    description: 'just a howgay command',
    async execute(args, message, discord){
        let user = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setAuthor('The Gay Calculator')
        .setDescription(`${user.username} is ` + rng + "% Gay 🌈")
        .setColor('GREEN')

        message.channel.send({embeds: [howgayembed]})
    }
};