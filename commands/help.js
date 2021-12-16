const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "A help command, also straight forwards.",
    execute(message, args, Discord, channel) {
            const Embed = new MessageEmbed()
                .setColor('#8effdd')
                .setTitle('Hey! The prefix is -')
                .setAuthor('Help Menu')
                .setDescription('Here are the commands for the server.')
                .setThumbnail('https://cdn.discordapp.com/icons/871836728124637204/3c0c805c77cafb4be66e94b77fe99ff3.webp?size=100')
                .addFields(
                    { name: 'help', value: 'Shows this menu!'},
                    { name: 'ping', value: 'Pings the bot and shows latency.'},
                    { name: 'mute', value: 'Mutes a member (Admin+).'},
                    { name: 'unmute', value: 'Unmutes a member (Admin+)'},
                    { name: 'clear', value: 'Clears the amount of messages specified by an admin! (Admin+)'},
                )
                .setFooter('Bot made by myth, report any bugs to him!')
                message.channel.send({ embeds: [Embed] });
        }
}