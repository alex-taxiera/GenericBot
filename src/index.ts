import { join } from 'path'

import {
  DataClient
} from 'eris-boiler'

import {
  oratorOptions,
  statusManagerOptions
} from './config'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const bot = new DataClient(process.env.GB_TOKEN ?? '', {
  oratorOptions,
  statusManagerOptions
})

bot
  .addCommands(join(__dirname, 'commands'))
  .addEvents(join(__dirname, 'events'))
  .connect()
