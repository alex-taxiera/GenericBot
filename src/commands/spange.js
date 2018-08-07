const { Command } = require('eris-boiler')

module.exports = (bot) => new Command(
  bot,
  {
    name: 'spange',
    description: 'MaKe yOur tExT sPanGe',
    options: {
      deleteResponse: false
    },
    run: async ({ params }) => {
      const fullParam = params.join(' ').toLowerCase()
      let indices = []

      let rng
      let charCode = ''
      for (let i = 0; i < (fullParam.length * 0.33); i++) {
        do {
          rng = Math.floor(Math.random() * (fullParam.length - 1 - 0 + 1)) + 0
          charCode = fullParam[rng].charCodeAt()
        } while (badChar(indices, charCode, rng))

        indices.push(rng)
      }

      let str = ''
      for (let i = 0; i < fullParam.length; i++) {
        if (indices.includes(i)) {
          str += String.fromCharCode(fullParam[i].charCodeAt() - 32)
        } else {
          str += fullParam[i]
        }
      }
      return str
    }
  }
)

function badChar (indices, charCode, rng) {
  return charCode > 122 || charCode < 97 || indices.includes(rng) || indices.includes(rng + 1) || indices.includes(rng - 1)
}
