import { join } from 'path'

import { client } from '@client'

client.commands.add(join(__dirname, 'commands'))
client.events.add(join(__dirname, 'events'))
// eslint-disable-next-line no-console
client.connect().catch(console.error)
