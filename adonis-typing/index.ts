declare module "@ioc:Agung96tm/Midtrans" {
  import { MidtransClient } from "midtrans-node-client";
  const midtrans: MidtransClient.Snap;
  export default midtrans;

  export interface MidtransConfig {
    isProduction: boolean;
    serverKey: string;
    clientKey: string;
  }
}
