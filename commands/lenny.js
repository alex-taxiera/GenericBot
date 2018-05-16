const Command = require('../classes/Command.js')

module.exports = (bot) => {
  return new Command(
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
}
