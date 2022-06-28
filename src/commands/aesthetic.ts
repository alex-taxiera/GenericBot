import { TopLevelCommand } from '@hephaestus/eris'

function goodChar (charCode: number): boolean {
  return charCode < 127 && charCode !== 32
}

const command: TopLevelCommand = {
  type: 1,
  name: 'aesthetic',
  description: 'make your text *ａｅｓｔｈｅｔｉｃ*',
  options: [
    {
      type: 3,
      name: 'text',
      description: 'the text to aestheticize',
      required: true,
    },
  ],
  action: (interaction) => {
    const fullParam = interaction.data.options
      ?.find(({ name }) => name === 'text')

    if (fullParam?.type === 3) {
      let str = ''
      for (let i = 0; i < fullParam.value.length; i++) {
        const charCode = fullParam.value.charCodeAt(i)
        if (goodChar(charCode)) {
          str += String.fromCharCode((charCode + 65248))
        } else {
          str += fullParam.value[i]
        }
      }
      void interaction.createMessage(`*${str}*`)
    }
  },
}

export default command
