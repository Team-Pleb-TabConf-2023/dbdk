enum OfferStatus {
  up     = 'UP',
  down   = 'DOWN',
  closed = 'CLOSED'
}

enum CostUnits {
  mins   = 'MINS',
  secs   = 'SECS',
  tokens = 'TOKENS'
}

interface OfferContent{
  endpoint: string,      
  status: OfferStatus,    
  cost_fixed: number,       
  cost_variable: number,    
  cost_units: number,       
  schema?: Object,       
  outputSchema?: Object,
  description?: string
}

export interface SignedEvent {
  pubkey     : string
  created_at : number
  id         : string
  sig        : string
  kind       : number
  content    : string
  tags       : string[][]
}
