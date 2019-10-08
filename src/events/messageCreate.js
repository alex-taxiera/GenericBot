const { Event } = require('eris-boiler')

module.exports = new Event({
  name: 'messageCreate',
  run: async (bot, msg) => {
    if (msg.content.toLowerCase() === 'ayy') {
      msg.channel.createMessage('lmao')
    }
  }
})
