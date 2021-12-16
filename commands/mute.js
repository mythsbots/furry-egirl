module.exports = {
    name: 'mute',
    description: "Mutes members!",
    execute(message, args, ms){
        if(message.member.roles.cache.has('873413631214243901')){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted, imagine tho.`);
        } else{
            message.channel.send('Either that person doesnt exist or you dont have perms.');
        };
    }
}}