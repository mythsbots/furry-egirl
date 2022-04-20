module.exports = {
    name: 'clear',
    description: "Clears Messages!",
    async execute(message, args){
        if (message.member.roles.cache.has("873413631214243901")){
            if(!args[0]) return message.reply("Enter the amount of messages you want to clear!");
            if(isNaN(args[0])) return message.reply("Enter a real number this time.");

            if(args[0] > 100) return message.reply("You cannot clear that many messages at one time!");
            if(args[0] < 1) return message.reply("You need to delete atleast one message!");

            await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        } else {
            message.channel.send('Hey! You dont have the perms for that.')
        }
    }
}