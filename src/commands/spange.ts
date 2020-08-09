import {
  Command,
  CommandResults,
} from 'eris-boiler'

function badChar (charCode: number): boolean {
  return charCode > 122 || charCode < 97
}

function tooClose (indices: Array<number>, index: number): boolean {
  return indices.includes(index) ||
  indices.includes(index + 1) ||
  indices.includes(index - 1)
}

export default new Command({
  name: 'spange',
  description: 'MaKe yOur tExT sPanGe',
  run: (_, { params, msg }): CommandResults => ({
    webhook: true,
    avatarURL: msg.author.avatarURL,
    username: msg.author.username,
    content: params.map((param) => {
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
    }).join(' '),
  }),
})
