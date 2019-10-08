const { Command } = require('eris-boiler')

module.exports = new Command({
  name: 'lenny',
  description: '( ͡° ͜ʖ ͡° )',
  options: {
    deleteResponse: false
  },
  run: async () => '( ͡° ͜ʖ ͡° )'
})
