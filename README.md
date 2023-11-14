# Adonis Midtrans 💸

This package is an **Payment Gateway** built on top of [midtrans-nodejs-client](https://github.com/Midtrans/midtrans-nodejs-client) and inspired by [laravel-midtrans](https://github.com/marprin/laravel-midtrans)

[![typescript-image]][typescript-url] [![license-image]][license-url]


## Getting Started

Install the package using the `adonis` CLI.

```bash
npm i @agung96tm/adonis-midtrans
# or
yarn add @agung96tm/adonis-midtrans
```

## Configure
Configure the package using the `configure` command:

```bash
node ace configure @agung96tm/adonis-midtrans
```

and add follow code to your `.env`

```
MIDTRANS_IS_PRODUCTION=false
MIDTRANS_SERVER_KEY=SB-Mid-server-xxXiKXXLpXXiKi6xxx
MIDTRANS_CLIENT_KEY=SB-Mid-client-xpTOkxxxxSsWTxxx
```

### Example
```typescript
import Midtrans from '@ioc:Agung96tm/Midtrans'

Route.get('/', async () => {
    const result = await Midtrans.createTransaction({
        payment_type: 'bank_transfer',
        bank_transfer: { bank: 'bca' },
        transaction_details: {
            order_id: 'test-adonis-1',
            gross_amount: 100000
        },
        item_details: [
            {
                id: 'test-adonis-1',
                name: 'ayam bakar sambal balado',
                quantity: 2,
                price: 25000
            },
            {
                id: 'test-adonis-item-1',
                name: 'sop iga bakar daging lunak',
                quantity: 1,
                price: 30000
            },
            {
                id: 'test-adonis-item-2',
                name: 'just alpuckat',
                quantity: 2,
                price: 10000
            }
        ],
        customer_details: {
            first_name: 'restu wahyu',
            last_name: ' saputra',
            email: 'restuwahyu13@zetmail.com',
            phone: '087820154350',
            billing_address:  {
                address: 'jl.sibuta gua hantu no.120',
                city: 'Depok',
                postal_code: '16436'
            }
        }
    })
    
    return result
    /** 
    {
      token: '1aa4d520-d6b2-4085-859c-5387f5bfdf11',
      redirect_url: 'https://app.sandbox.midtrans.com/snap/v3/redirection/1aa4d520-d6b2-4085-859c-5387f5bfdf11'
    }
    **/
})
```

### Official

- [Midtrans Docs](https://docs.midtrans.com)
- [Midtrans Dashboard ](https://dashboard.midtrans.com/)
- [SNAP documentation](http://snap-docs.midtrans.com)
- [Core API documentation](http://api-docs.midtrans.com)


[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[license-image]: https://img.shields.io/npm/l/@mezielabs/adonis-stripe?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"