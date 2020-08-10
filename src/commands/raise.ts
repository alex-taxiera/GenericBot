import {
  Command,
  CommandResults,
} from 'eris-boiler'

export default new Command({
  name: 'raise',
  description: 'raise your blank',
  options: {
    deleteInvoking: true,
  },
  run: (_, { params, msg }): CommandResults => {
    const fullParam = params.join(' ').toLowerCase()

    return {
      content: `ヽ༼ຈل͜ຈ༽ﾉ raise your ${fullParam} ヽ༼ຈل͜ຈ༽ﾉ`,
      webhook: true,
      avatarURL: msg.author.avatarURL,
      username: msg.author.username,
    }
  },
})
