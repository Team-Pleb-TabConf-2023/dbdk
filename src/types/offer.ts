import { SignedEvent } from './base.js'

export type ServiceData = SignedEvent<OfferContent>

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

export interface OfferContent {
  endpoint      : string
  status        : OfferStatus
  cost_fixed    : number   
  cost_variable : number
  cost_units    : number
  schema       ?: Record<string, any>
  outputSchema ?: Record<string, any>
  description  ?: string
}

export interface ServiceConnector {
  service_a : ServiceData
  preset_a  : Record<string, any>
  service_b : ServiceData
  preset_b  : Record<string, any>
  mapping   : [ string, string ][]
}
