import { ApplicationContract } from "@ioc:Adonis/Core/Application";

import { MidtransClient } from "midtrans-node-client";

export default class MidtransProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    this.app.container.singleton("Agung96tm/Midtrans", () => {
      const { isProduction, serverKey, clientKey } = this.app.container
        .use("Adonis/Core/Config")
        .get("midtrans");

      return new MidtransClient.CoreApi({
        isProduction: isProduction,
        serverKey: serverKey,
        clientKey: clientKey,
      });
    });
  }
}
