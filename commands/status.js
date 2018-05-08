const Command = require('../classes/Command.js')

module.exports = new Command({
  name: 'status',
  description: 'View, add, or remove random statuses',
  parameters: ['"view"|"add"|"del" status to add or delete'],
  permission: 'Admin',
  run: async ({ msg, params, bot }) => {
    const option = params.splice(0, 1)[0]
    const fullParam = params.join(' ')
    const games = await bot.dbm.getGames() || []
    const names = games.map((val) => val.name)

    switch (option) {
      case 'view':
        return 'Current random statuses:\n' + names.join(',\n')
      case 'add':
      // TODO: maybe supply type with name? maybe too complicated
        if (games.includes(fullParam)) return `Statuses already includes "${fullParam}"`
        bot.dbm.addGame(fullParam)
        return `${fullParam} added!`
      case 'del':
        if (!games.includes(fullParam)) return `Statuses does not include "${fullParam}"`
        bot.dbm.delGame(fullParam)
        return `${fullParam} deleted!`
      // TODO: edit option, change name or type
      default:
        return 'Use "add" to add statuses and "del" to delete them!'
    }
  }
})
