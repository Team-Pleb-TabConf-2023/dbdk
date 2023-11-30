export type Literal = string | number | boolean | null
export type Json    = Literal | { [key : string] : Json } | Json[]

export interface SignedEvent<T = string> {
  pubkey     : string
  created_at : number
  id         : string
  sig        : string
  kind       : number
  content    : T
  tags       : string[][]
}
