import {
  DiscordEvent
} from 'eris-boiler'

export default new DiscordEvent({
  name: 'messageCreate',
  run: (_, msg): void => {
    if (msg.content.toLowerCase() === 'ayy') {
      msg.channel.createMessage('lmao')
    }
  }
})
