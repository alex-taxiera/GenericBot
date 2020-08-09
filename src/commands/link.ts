import {
  GuildCommand,
  CommandResults,
  Permission,
  DataClient,
  GuildCommandContext,
  CommandData
} from 'eris-boiler'
import * as logger from 'eris-boiler/util/logger'

import {
  inviteOptions
} from '../config'

export default new GuildCommand({
  name: 'link',
  description: 'Generate a single use, 24hr invite link for the server',
  options: {
    permission: new Permission<DataClient, GuildCommandContext>({
      level: Infinity,
      reason: '',
      run: (_, { msg }): boolean =>
        msg.channel.guild.id === inviteOptions.guildId
    })
  },
  run: (_, { msg }): Promise<CommandResults> | CommandResults => {
    const channel = msg.channel.guild.channels
      .find((ch) => ch.name === inviteOptions.channelName)
    if (!channel) {
      return 'missing channel, homeslice'
    }
    if (channel.type !== 0 && channel.type !== 5 && channel.type !== 2) {
      return 'bad channel, my dude'
    }

    return channel.createInvite({
      maxAge: 24 * 60 * 60,
      maxUses: 1
    }, `Created for ${msg.author.id}`)
      .then((invite) => `discord.gg/${invite.code}`)
      .catch(() => {
        logger.warn(`COULD NOT CREATE INVITE FOR ${channel.guild.id}`)
        return 'error bro, sorry'
      })
  }
} as CommandData<DataClient, GuildCommandContext>)
