'use strict'

const { InvalidArgumentException } = require('@adonisjs/generic-exceptions')

class AuthorizationException extends InvalidArgumentException {
  static get repo () {
    return 'agung96tm/adonis-midtrans-helpers'
  }
}

module.exports = { AuthorizationException }
