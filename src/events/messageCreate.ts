import {
  Message,
} from 'eris'
import {
  DiscordEvent,
} from 'eris-boiler'

export default new DiscordEvent({
  name: 'messageCreate',
  run: (_, msg: Message): void => {
    if (msg.content.toLowerCase() === 'ayy') {
      msg.channel.createMessage('lmao').catch(() => undefined)
    }
  },
})
