const { Command } = require('eris-boiler')

module.exports = new Command({
  name: 'spange',
  description: 'MaKe yOur tExT sPanGe',
  options: {
    deleteResponse: false
  },
  run: async ({ params }) => {
    return params.map((param) => {
      param = param.toLowerCase()
      if (param.split('').every((ch) => badChar(ch.charCodeAt()))) {
        return param
      }
      const indices = []

      let rng
      let charCode = ''
      for (let i = 0; i < (param.length * 0.33); i++) {
        do {
          rng = Math.floor(Math.random() * (param.length - 1 - 0 + 1)) + 0
          charCode = param[rng].charCodeAt()
        } while (badChar(charCode) || tooClose(indices, rng))

        indices.push(rng)
      }

      let str = ''
      for (let i = 0; i < param.length; i++) {
        if (indices.includes(i)) {
          str += String.fromCharCode(param[i].charCodeAt() - 32)
        } else {
          str += param[i]
        }
      }
      return str
    }).join(' ')
  }
})

function badChar (indices, charCode, rng) {
  return charCode > 122 || charCode < 97
}

function tooClose (indices, index) {
  return indices.includes(index) ||
  indices.includes(index + 1) ||
  indices.includes(index - 1)
}
