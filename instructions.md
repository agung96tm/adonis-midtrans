Open the `env.ts` file and paste the following code inside the `Env.rules` object.

```
MIDTRANS_IS_PRODUCTION: Env.schema.boolean(),
MIDTRANS_SERVER_KEY: Env.schema.string(),
MIDTRANS_CLIENT_KEY: Env.schema.string(),
```

and add follow code to your `.env`.

```
MIDTRANS_IS_PRODUCTION=false
MIDTRANS_SERVER_KEY=SB-Mid-server-xxXiKXXLpXXiKi6xxx
MIDTRANS_CLIENT_KEY=SB-Mid-client-xpTOkxxxxSsWTxxx
```
