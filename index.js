const { DataClient } = require('eris-boiler')
require('dotenv').load()
const defaultSettings = require('./config/settings.json')

const bot = new DataClient({sourceFolder: './src', defaultSettings})
bot.connect()
