import { TopLevelCommand } from '@hephaestus/eris'

const command: TopLevelCommand = {
  type: 1,
  name: 'lenny',
  description: '( ͡° ͜ʖ ͡° )',
  action: async (interaction) =>
    await interaction.createMessage('( ͡° ͜ʖ ͡° )'),
}

export default command
