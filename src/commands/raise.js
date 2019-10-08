const { Command } = require('eris-boiler')

module.exports = new Command({
  name: 'raise',
  description: 'raise your blank',
  options: {
    deleteResponse: false
  },
  run: async ({ params }) => {
    const fullParam = params.join(' ').toLowerCase()

    return `ヽ༼ຈل͜ຈ༽ﾉ raise your ${fullParam} ヽ༼ຈل͜ຈ༽ﾉ`
  }
})
