import { TopLevelCommand } from '@hephaestus/eris'

function badChar (charCode: number): boolean {
  return charCode > 122 || charCode < 97
}

function tooClose (indices: number[], index: number): boolean {
  return indices.includes(index) ||
  indices.includes(index + 1) ||
  indices.includes(index - 1)
}

const command: TopLevelCommand = {
  type: 1,
  guildId: '436591833196265473',
  name: 'spange',
  description: 'MaKe yOur tExT sPanGe',
  options: [
    {
      type: 3,
      name: 'text',
      description: 'the text to spangitize',
      required: true,
    },
  ],
  action: (interaction) => {
    const fullParam = interaction.data.options
      ?.find(({ name }) => name === 'text')
    if (fullParam?.type === 3) {
      void interaction.createMessage(fullParam.value.split(/\s+/).map((param) => {
        param = param.toLowerCase()
        if (param.split('').every((ch) => badChar(ch.charCodeAt(0)))) {
          return param
        }
        const indices = []

        let rng: number
        let charCode: number
        for (let i = 0; i < (param.length * 0.33); i++) {
          do {
            rng = Math.floor(Math.random() * (param.length - 1 - 0 + 1)) + 0
            charCode = param[rng].charCodeAt(0)
          } while (badChar(charCode) || tooClose(indices, rng))

          indices.push(rng)
        }

        let str = ''
        for (let i = 0; i < param.length; i++) {
          if (indices.includes(i)) {
            str += String.fromCharCode(param.charCodeAt(i) - 32)
          } else {
            str += param[i]
          }
        }
        return str
      }).join(' '))
    }
  },
}

export default command
