'use strict'

const path = require('path')

module.exports = async (cli) => {
  try {
    const inFile = path.join(__dirname, './config', 'midtrans.js')
    const outFile = path.join(cli.helpers.configPath(), 'midtrans.js')
    await cli.copy(inFile, outFile)

    cli.command.completed('create', 'config/midtrans.js')
  } catch (error) {
    
  }
}