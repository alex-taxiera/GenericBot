import {
  Command,
  CommandResults,
} from 'eris-boiler'

export default new Command({
  name: 'lenny',
  description: '( ͡° ͜ʖ ͡° )',
  run: (_, { msg }): CommandResults => ({
    content: '( ͡° ͜ʖ ͡° )',
    webhook: true,
    avatarURL: msg.author.avatarURL,
    username: msg.author.username,
  }),
})
