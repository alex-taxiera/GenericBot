import {
  Command,
  CommandResults,
} from 'eris-boiler'

export default new Command({
  name: 'ping',
  description: 'pong',
  run: async (_, { msg }): Promise<CommandResults> => {
    const test = await msg.channel.createMessage('Pong!')
    const time = test.timestamp - msg.timestamp

    return `total ping: ${time}ms`
  },
})
