import { Event } from '@hephaestus/eris'

import { client } from '@client'

const event: Event = {
  name: 'ready',
  handler: () => {
    client.client.editStatus([ { type: 0, name: 'himself' } ])
    setInterval(
      () => client.client.editStatus([ { type: 0, name: 'himself' } ]),
      60 * 60 * 24,
    )
  },
}

export default event
