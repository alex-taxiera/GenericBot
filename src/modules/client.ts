import config from 'config'
import { Forge } from '@hephaestus/eris'

export const client = new Forge(config.get('DISCORD_TOKEN'), {
  intents: [
    'guilds',
    'guildMembers',
    'guildMessages',
  ],
  restMode: true,
})
