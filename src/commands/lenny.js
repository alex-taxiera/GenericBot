const Command = require('../classes/Command.js')

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
