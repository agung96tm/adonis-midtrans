const Env = use('Env')

module.exports = {
  isProduction : Env.get('MIDTRANS_IS_PRODUCTION', false) === 'true',
  serverKey : Env.get('MIDTRANS_SERVER_KEY', null),
  clientKey : Env.get('MIDTRANS_CLIENT_KEY', null)
}
