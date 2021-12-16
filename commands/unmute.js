module.exports = {
    name: 'unmute',
    description: "Unmutes members!",
    execute(message, args){
        if(message.member.roles.cache.has('873413631214243901')){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted, do better.`);
        }} else{
            message.channel.send('You cant unmute someone who isnt here. Or maybe you dont have perms. Either one.');
        }
    }
}