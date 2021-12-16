module.exports = {
    name: 'ping',
    description: "This is a ping command, kinda straight forward",
    execute(message, args, client, Discord, Math) {
        message.channel.send("Ping is being calculated...").then((msg) => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            message.delete()
            message.channel.send(`${ping} ms`);
          });
}
}

