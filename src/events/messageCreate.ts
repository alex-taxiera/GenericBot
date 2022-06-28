import { Event } from '@hephaestus/eris'

import { client } from '@client'

const event: Event = {
  name: 'messageCreate',
  handler: (message) => {
    if (message.content.toLowerCase() === 'ayy') {
      client.client
        .createMessage(message.channel.id, 'lmao')
        .catch(() => undefined)
    }
  },
}

export default event
