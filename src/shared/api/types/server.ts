import { Envelope, Instrument, Message, OrderStatus, Quote } from './base';

type ServerMessageType = 'SuccessInfo' | 'ErrorInfo' | 'ExecutionReport' | 'MarketDataUpdate';

export interface ServerEnvelope extends Envelope {
    messageType: ServerMessageType
}

interface ServerMessage extends Message { }

export interface ErrorInfo extends ServerMessage {
    reason: string,
}

export interface SuccessInfo extends ServerMessage {
    subscriptionId: string,
}

export interface ExecutionReport extends ServerMessage {
    orderId: string,
    orderStatus: OrderStatus,
}

export interface MarketDataUpdate extends ServerMessage {
    subscriptionId: string,
    instrument: Instrument,
    quotes: Quote[],
}