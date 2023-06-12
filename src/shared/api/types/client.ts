import { Envelope, Instrument, Message, OrderSide } from "./base";

type ClientMessateType = 'SubscribeMarketData' | 'UnsubscribeMarketData' | 'PlaceOrder';

export interface ClientEnvelope extends Envelope {
    messageType: ClientMessateType
}

interface ClientMessage extends Message { }

interface SubscribeMarketData extends ClientMessage {
    instrument: Instrument
}

interface UnsubscribeMarketData extends ClientMessage {
    subscriptionId: string
}

interface PlaceOrder extends ClientMessage {
    instrument: Instrument,
    side: OrderSide,
    amount: number,
    price: number,
}

export interface SubscribeMarketDataEnvelope extends ClientEnvelope {
    message: SubscribeMarketData,
}
export interface UnsubscribeMarketDataEnvelope extends ClientEnvelope {
    message: UnsubscribeMarketData,
}
export interface PlaceOrderEnvelope extends ClientEnvelope {
    message: PlaceOrder,
}