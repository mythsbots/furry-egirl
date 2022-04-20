const { MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball',
    description: '8ball',
    async execute(message, args, discord){
        if(!args[0]) return message.reply("Please ask a full question please!")
        let replies = ["Yes", "Outlook seems good", "Yus", "Of course", "Yes - definitely", "No", "Better not tell you now.", "Outlook is not so good..", "Nah", "Never", "Cannot predict now.", "I dont know.", "I dont know *yet*..", "Not a chance", "I think so.", "Only for today!", "Not for today", "Sadly..yes", "Sadly no..", "Maybe", "Ask again later.."];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor('AQUA')
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send({embeds: [ballembed]})
    }
}