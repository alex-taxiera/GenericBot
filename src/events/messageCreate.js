const { Event } = require('eris-boiler')

module.exports = new Event({
  name: 'messageCreate',
  run: async (bot, msg) => {
    if (msg.content.toLowerCase() === 'ayy') return msg.channel.createMessage('lmao')
    bot.ora.processMessage(bot, msg)
  }
})
