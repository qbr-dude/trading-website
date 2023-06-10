import { Envelope, Instrument, Message, OrderSide } from "./base";

type ClientMessateType = 'Subscribe' | 'Unsubscribe' | 'PlaceOrder';

export interface ClientEnvelope extends Envelope {
    messageType: ClientMessateType
}

export interface ClientMessage extends Message { }

export interface SubscribeMarketData extends ClientMessage {
    instrument: Instrument
}

export interface UnsubscribeMarketData extends ClientMessage {
    subscriptionId: string
}

export interface PlaceOrder extends ClientMessage {
    instrument: Instrument
    side: OrderSide
    amount: number,
    price: number,
}
