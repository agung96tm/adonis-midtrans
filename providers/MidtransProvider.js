'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class MidtransProvider extends ServiceProvider {
  register () {
    //
    this.app.singleton('Adonis/Addons/Midtrans', (app) => {
      const Midtrans = require('../src/Midtrans')
      const Config = app.use('Adonis/Src/Config')

      return new Midtrans(Config)
    })
    this.app.alias('Adonis/Addons/Midtrans', 'Midtrans')
  }

  boot () {
    //
  }
}

module.exports = MidtransProvider
