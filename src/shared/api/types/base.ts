export interface Envelope {
    message: object,
}

export interface Message { }

export interface Quote {
    bid: number,
    offer: number,
    minAmount: number,
    maxAmount: number,
}

export type OrderSide = 'Buy' | 'Sell';

export type OrderStatus = 'Active' | 'Filled' | 'Rejected' | 'Cancelled';

export type Instrument = 'EUR_USD' | 'EUR_RUB' | 'USD_RUB';