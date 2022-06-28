import { TopLevelCommand } from '@hephaestus/eris'

const command: TopLevelCommand = {
  type: 1,
  guildId: '436591833196265473',
  name: 'lenny',
  description: '( ͡° ͜ʖ ͡° )',
  action: async (interaction) =>
    await interaction.createMessage('( ͡° ͜ʖ ͡° )'),
}

export default command
