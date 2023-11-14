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

### Official

- [Midtrans Docs](https://docs.midtrans.com)
- [Midtrans Dashboard ](https://dashboard.midtrans.com/)
- [SNAP documentation](http://snap-docs.midtrans.com)
- [Core API documentation](http://api-docs.midtrans.com)


[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[license-image]: https://img.shields.io/npm/l/@mezielabs/adonis-stripe?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"