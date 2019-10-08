const { Command } = require('eris-boiler')

module.exports = new Command({
  name: 'aesthetic',
  description: 'make your text ａｅｓｔｈｅｔｉｃ',
  options: {
    deleteResponse: false
  },
  run: async ({ params }) => {
    const fullParam = params.join(' ')
    let str = ''
    for (let i = 0; i < fullParam.length; i++) {
      const charCode = fullParam[i].charCodeAt()
      if (goodChar(charCode)) {
        str += String.fromCharCode((charCode + 65248))
      } else {
        str += fullParam[i]
      }
    }
    return str
  }
})

function goodChar (charCode) {
  return charCode < 127 && charCode !== 32
}
