const { Command } = require('eris-boiler')

module.exports = (bot) => new Command(
  bot,
  {
    name: 'lenny',
    description: '( ͡° ͜ʖ ͡° )',
    options: {
      deleteResponse: false
    },
    run: async () => '( ͡° ͜ʖ ͡° )'
  }
)
