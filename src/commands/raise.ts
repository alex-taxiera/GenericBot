import { TopLevelCommand } from '@hephaestus/eris'

const command: TopLevelCommand = {
  type: 1,
  name: 'raise',
  description: 'raise your blank',
  options: [
    {
      type: 3,
      name: 'text',
      description: 'the text to raise',
      required: true,
    },
  ],
  action: (interaction) => {
    const fullParam = interaction.data.options
      ?.find(({ name }) => name === 'text')

    if (fullParam?.type === 3) {
      void interaction
        .createMessage(`ヽ༼ຈل͜ຈ༽ﾉ raise your ${fullParam.value} ヽ༼ຈل͜ຈ༽ﾉ`)
    }
  },
}

export default command
