module.exports = {
  name: "say",
  description: "Make the bot say something",
  execute(message, args) {
    return message.channel.send(message.content.replace("p~say ", ""));
  }
}