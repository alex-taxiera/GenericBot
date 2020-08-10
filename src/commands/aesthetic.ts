import {
  Command,
  CommandResults,
} from 'eris-boiler'

function goodChar (charCode: number): boolean {
  return charCode < 127 && charCode !== 32
}

export default new Command({
  name: 'aesthetic',
  description: 'make your text *ａｅｓｔｈｅｔｉｃ*',
  options: {
    deleteInvoking: true,
  },
  run: (_, { params, msg }): CommandResults => {
    const fullParam = params.join(' ')
    let str = ''
    for (let i = 0; i < fullParam.length; i++) {
      const charCode = fullParam.charCodeAt(i)
      if (goodChar(charCode)) {
        str += String.fromCharCode((charCode + 65248))
      } else {
        str += fullParam[i]
      }
    }
    return {
      content: `*${str}*`,
      webhook: true,
      avatarURL: msg.author.avatarURL,
      username: msg.author.username,
    }
  },
})
