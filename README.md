# Adonis Midtrans 💸

This package is an **Payment Gateway** built on top of [midtrans-node](https://github.com/restuwahyu13/midtrans-node) and inspired by [laravel-midtrans](https://github.com/marprin/laravel-midtrans)

[![typescript-image]][typescript-url] [![license-image]][license-url]

| Adonis Version | NPM |
|----------|----------|
| 5 | https://www.npmjs.com/package/@agung96tm/adonis-midtrans |
| <5 | https://www.npmjs.com/package/adonis-midtrans |

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

More Detail follow: [midtrans-node: Transaction API Service](https://github.com/restuwahyu13/midtrans-node#transaction-api-services)

```typescript
import Midtrans from "@ioc:Agung96tm/Midtrans";

Route.get("/", async () => {
  const response = await Midtrans.createTransaction({
    payment_type: "bank_transfer",
    bank_transfer: { bank: "bca" },
    transaction_details: {
      order_id: "test-adonis-1",
      gross_amount: 100000,
    },
    item_details: [
      {
        id: "test-adonis-1",
        name: "ayam bakar sambal balado",
        quantity: 2,
        price: 25000,
      },
      {
        id: "test-adonis-item-1",
        name: "sop iga bakar daging lunak",
        quantity: 1,
        price: 30000,
      },
      {
        id: "test-adonis-item-2",
        name: "just alpuckat",
        quantity: 2,
        price: 10000,
      },
    ],
    customer_details: {
      first_name: "restu wahyu",
      last_name: " saputra",
      email: "restuwahyu13@zetmail.com",
      phone: "087820154350",
      billing_address: {
        address: "jl.sibuta gua hantu no.120",
        city: "Depok",
        postal_code: "16436",
      },
    },
  });

  return response;
  /** 
    {
      token: '1aa4d520-d6b2-4085-859c-5387f5bfdf11',
      redirect_url: 'https://app.sandbox.midtrans.com/snap/v3/redirection/1aa4d520-d6b2-4085-859c-5387f5bfdf11'
    }
    **/
});
```

* status( transactionId: string )
```typescript
   try {
     const resp = await Midtrans.transaction.status('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590')
   } catch (e) {
     /** do something **/
   }
```

* statusb2b( transactionId: string )
```typescript
   try {
     const resp = await Midtrans.transaction.statusb2b('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590')
   } catch (e) {
     /** do something **/
   }
```

* approve( transactionId: string )
```typescript
   try {
    const resp = await Midtrans.transaction.approve('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590')
   } catch (e) {
     /** do something **/
   }
```

* deny( transactionId: string )
```typescript
   try {
     const resp = await Midtrans.transaction.deny('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590')
   } catch (e) {
     /** do something **/
   }
```

* cancel( transactionId: string )
```typescript
   try {
     const resp = await Midtrans.transaction.cancel('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590')
   } catch (e) {
     /** do something **/
   }
```

* expire( transactionId: string )
```typescript
   try {
     const resp = await Midtrans.transaction.expire('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590')
   } catch (e) {
     /** do something **/
   }
```

* refund( transactionId: string, parameter?: object)
```typescript
   try {
     const resp = await Midtrans.transaction.refund('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590', {
       amount: 1000000, 
       reason: 'Reason to refund payouts'
     })
   } catch (e) {
     /** do something **/
   }
```

* refundDirect( transactionId: string, parameter?: object)
```typescript
   try {
     const resp = await Midtrans.transaction.refundDirect('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590', {
       amount: 1000000, 
       reason: 'Reason to direct payouts'
     })
   } catch (e) {
     /** do something **/
   }
```

* notification( notification: object )
```typescript
   try {
     const resp = await Midtrans.transaction.status('be4f3e44-d6ee-4355-8c64-c1d1dc7f4590')
     const notification = await Midtrans.transaction.notification(JSON.stringify(getResponse))
   } catch (e) {
     /** do something **/
   }
```

## Contributors

- Agung Yuliyanto: [Github](https://github.com/agung96tm), [LinkedIn](https://www.linkedin.com/in/agung96tm/)

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"
[license-image]: https://img.shields.io/npm/l/@mezielabs/adonis-stripe?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"
