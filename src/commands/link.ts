import { TopLevelCommand } from '@hephaestus/eris'

const command: TopLevelCommand = {
  type: 1,
  name: 'link',
  description: 'Generate a single use, 24hr invite link for the server',
  action: async (interaction, client) => {
    const invite = await client.createChannelInvite(
      interaction.channel.id,
      {
        maxAge: 24 * 60 * 60,
        maxUses: 1,
      }, `Created for ${interaction.member?.id ?? ''}`)

    void interaction.createMessage({
      content: `discord.gg/${invite.code}`,
      flags: 64,
    })
  },
}

export default command
