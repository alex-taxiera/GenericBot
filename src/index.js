const { join } = require('path')
const {
  DataClient,
  SQLManager
} = require('eris-boiler')
const { config: envLoad } = require('dotenv')

envLoad()

const {
  GB_TOKEN,
  GB_DB_CLIENT,
  GB_DB_NAME,
  GB_DB_USER,
  GB_DB_PASS,
  GB_DB_HOST
} = process.env

const {
  oratorOptions,
  statusManagerOptions
} = require('../config/settings.json')

const databaseManager = new SQLManager({
  dbInfo: {
    connectionInfo: {
      database: GB_DB_NAME,
      user: GB_DB_USER,
      password: GB_DB_PASS,
      host: GB_DB_HOST
    },
    client: GB_DB_CLIENT
  }
})

const bot = new DataClient(GB_TOKEN, {
  databaseManager,
  oratorOptions,
  statusManagerOptions
})

bot
  .addCommands(join(__dirname, '/commands'))
  .addEvents(join(__dirname, '/events'))
  .connect()
