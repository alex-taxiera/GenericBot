import { TopLevelCommand } from '@hephaestus/eris'
import config from 'config'

const command: TopLevelCommand = {
  type: 1,
  guildId: config.get('inviteOptions.guildId'),
  name: 'link',
  description: 'Generate a single use, 24hr invite link for the server',
  action: async (interaction, client) => {
    const invite = await client.createChannelInvite(
      config.get('inviteOptions.channelId'),
      {
        maxAge: 24 * 60 * 60,
        maxUses: 1,
      }, `Created for ${interaction.member?.id ?? ''}`)

    void interaction.createMessage(`discord.gg/${invite.code}`)
  },
}

export default command
