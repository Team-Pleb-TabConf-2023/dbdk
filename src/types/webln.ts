export interface WebLNAPI {
  getInfo       : () => Promise<GetInfoResponse>
  sendPayment   : (paymentRequest: string)   => Promise<SendPaymentResponse>
  makeInvoice   : (args: RequestInvoiceArgs) => Promise<RequestInvoiceResponse>
  signMessage   : (message: string)          => Promise<SignMessageResponse>
  verifyMessage : (
    signature : string, 
    message   : string
  ) => Promise<void>
}

export interface GetInfoResponse {
  node: {
    alias  : string
    pubkey : string
    color ?: string
  }
}

export interface SendPaymentResponse {
  preimage: string
}

export interface RequestInvoiceArgs {
  amount        ?: string | number
  defaultAmount ?: string | number
  minimumAmount ?: string | number
  maximumAmount ?: string | number
  defaultMemo   ?: string
}

export interface RequestInvoiceResponse {
  paymentRequest : string
}

export interface SignMessageResponse {
  message   : string
  signature : string
}
