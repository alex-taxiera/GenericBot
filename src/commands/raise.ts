import {
  Command,
  CommandResults
} from 'eris-boiler'

export default new Command({
  name: 'raise',
  description: 'raise your blank',
  run: (_, { params }): CommandResults => {
    const fullParam = params.join(' ').toLowerCase()

    return `ヽ༼ຈل͜ຈ༽ﾉ raise your ${fullParam} ヽ༼ຈل͜ຈ༽ﾉ`
  }
})
