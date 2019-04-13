# Adonis Midtrans 💸

This package is an **Payment Gateway** built on top of [midtrans-nodejs-client](https://github.com/Midtrans/midtrans-nodejs-client) and inspired by [laravel-midtrans](https://github.com/marprin/laravel-midtrans)


## Getting Started

Install the package using the `adonis` CLI.

```bash
> adonis install adonis-midtrans
```

Instruction: ([Click Here](https://github.com/agung96tm/adonis-midtrans/blob/master/instructions.md)).


## Configure

Configure token inside the `config/midtrans.js`
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

NB: Get your client key and server key from [Midtrans Dashboard](#)

## Usage

### Sample Snap Token / Redirect

You can see another parameter (transaction_data) [here](https://snap-docs.midtrans.com/#request-body-json-parameter).

```js
'use strict'

const Midtrans = use('Midtrans')
const moment = require('moment')

class ExampleController {
  async charge() {
    let transaction_data = {
      transaction_details: {
        order_id: Math.floor(Date.now() / 1000),
        gross_amount: 30000
      },
      customer_details: {
        first_name: 'Mr. Awesome',
        email: 'mr_awesome@example.com'
      },
      customer_expiry: {
        start_time: moment().format('Y-MM-DD HH:mm:ss Z'),
        unit: 'day',
        duration: 2
      },
      item_details: [
        {
          id: 'PROD-1',
          quantity: 1,
          name: 'Product-1',
          price: 10000
        },
        {
          id: 'PROD-2',
          quantity: 1,
          name: 'Product-2',
          price: 20000
        }
      ],
      credit_card_option: {
        secure: true,
        channel: 'migs'
      }
    }


    // result: 3bfdd6d4-d757-4b01-a547-fe3b862d1aaa
    const token = await Midtrans.getSnapToken(transaction_data)
    
    // or
    // result: https://app.sandbox.midtrans.com/snap/v2/vtweb/token
    const redirect_url = await Midtrans.vtwebCharge(transaction_data)

    // choice one, token or redirect_url
    return token
    // return redirect_url
  }
}
```

### Sample Handle HTTP Notification

```js
'use strict'

const Midtrans = use('Midtrans')

class ExampleController {
  async charge({request, response}) {
    const notification = request.all()
    // notification = JSON value 
    //  example: 
    //  {
    //    transaction_id: 'event-1214'
    //    ...
    //  }

    const statusResponse = await Midtrans.notification(notification)
    /**
      {
        "transaction_time": "2019-02-08 18:56:35",
        "gross_amount": "12200.00",
        ...
      }
     */

    let orderId = statusResponse.order_id;
    let transactionStatus = statusResponse.transaction_status;
    let fraudStatus = statusResponse.fraud_status;

    console.log(`Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`);

    // Sample transactionStatus handling logic

    if (transactionStatus == 'capture'){
        if (fraudStatus == 'challenge'){
            // TODO set transaction status on your databaase to 'challenge'
        } else if (fraudStatus == 'accept'){
            // TODO set transaction status on your databaase to 'success'
        }
    } else if (transactionStatus == 'cancel' ||
      transactionStatus == 'deny' ||
      transactionStatus == 'expire'){
      // TODO set transaction status on your databaase to 'failure'
    } else if (transactionStatus == 'pending'){
      // TODO set transaction status on your databaase to 'pending' / waiting payment
    }
  }
```

### Transaction Action

#### Get Status
```js
const myOrderId = 'justexample'
const status = await Midtrans.status(myOrderId)
```


#### Approve Transaction
```js
const myOrderId = 'justexample'
const status = await Midtrans.approve(myOrderId)
```


#### Deny Transaction
```js
const myOrderId = 'justexample'
const status = await Midtrans.deny(myOrderId)
```


#### Cancel Transaction
```js
const myOrderId = 'justexample'
const status = await Midtrans.cancel(myOrderId)
```


#### Expire Transaction
```js
const myOrderId = 'justexample'
const status = await Midtrans.expire(myOrderId)
```

#### Refund Transaction
```js
const parameters = {
  amount: 5000,
  reason: "Item out of stock"
}
const myOrderId = 'justexample'
const status = await Midtrans.refund(myOrderId, parameters)
```

## Helper

### Error
* _still process_

### Example
* _still process_

### Official
* [Midtrans Docs](https://docs.midtrans.com)
* [Midtrans Dashboard ](https://dashboard.midtrans.com/)
* [SNAP documentation](http://snap-docs.midtrans.com)
* [Core API documentation](http://api-docs.midtrans.com)