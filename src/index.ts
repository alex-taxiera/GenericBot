import { join } from 'path'
import {
  load
} from 'docker-secret-env'
import {
  DataClient
} from 'eris-boiler'

import {
  oratorOptions,
  statusManagerOptions
} from './config'

load()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const bot = new DataClient(process.env.DISCORD_TOKEN ?? '', {
  oratorOptions,
  statusManagerOptions
})

bot
  .addCommands(join(__dirname, 'commands'))
  .addEvents(join(__dirname, 'events'))
  .connect()
