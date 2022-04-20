const { MessageEmbed, MessageReaction, Channel } = require("discord.js")

module.exports = {
    name: 'poll',
    description: 'just a poll command',
    async execute (args, message, discord, client){
        console.log(message);
    }
}