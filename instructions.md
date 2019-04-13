## Registering provider

The provider is registered inside `start/app.js` file under `providers` array.

```js
const providers = [
  'adonis-midtrans/providers/MidtransProvider'
]
```


## Setup Configure
don't forget to set your config inside `config/midtrans.js` 

```js
module.exports = {
  isProduction : Env.get('MIDTRANS_IS_PRODUCTION', false) === 'true',
  serverKey : Env.get('MIDTRANS_SERVER_KEY', null),
  clientKey : Env.get('MIDTRANS_CLIENT_KEY', null)
}
```

or inside `.env`

```
MIDTRANS_IS_PRODUCTION=false
MIDTRANS_SERVER_KEY=SB-Mid-server-xxXiKXXLpXXiKi6xxx
MIDTRANS_CLIENT_KEY=SB-Mid-client-xpTOkxxxxSsWTxxx
```