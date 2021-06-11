import { join } from 'path'

import config from 'config'
import {
  DataClient,
} from 'eris-boiler'

const bot = new DataClient(config.get('DISCORD_TOKEN'), {
  oratorOptions: config.get('oratorOptions'),
  statusManagerOptions: config.get('statusManagerOptions')
})

bot
  .addCommands(join(__dirname, 'commands'))
  .addEvents(join(__dirname, 'events'))
  .connect()
  // eslint-disable-next-line no-console
  .catch(console.error)
