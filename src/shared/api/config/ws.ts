import { ClientMessage } from "../types/client";
import { ErrorInfo, ExecutionReport, MarketDataUpdate, ServerEnvelope, SuccessInfo } from "../types/server";


export default class WSConnector {
    connection: WebSocket | undefined

    constructor() {
        this.connection = undefined;
    }

    connect(
    ) {
        this.connection = new WebSocket('ws://127.0.0.1:3000/ws/');
        this.connection.onclose = () => {
            this.connection = undefined;
        };

        this.connection.onerror = () => {

        };

        this.connection.onopen = () => {

        };
    };

    disconnect() {
        this.connection?.close();
    };

    setFeedback(
        onsuccess: (message: SuccessInfo) => void,
        onerror: (message: ErrorInfo) => void,
        onreport: (message: ExecutionReport) => void,
        onupdate: (message: MarketDataUpdate) => void,
    ) {
        if (this.connection) {
            this.connection.onmessage = (event) => {
                const message: ServerEnvelope = JSON.parse(event.data);
                switch (message.messageType) {
                    case 'Success':
                        onsuccess(message.message);
                        break;
                    case 'Error':
                        onerror(message.message as ErrorInfo);
                        break;
                    case 'ExecutionReport':
                        onreport(message.message as ExecutionReport);
                        break;
                    case 'MarketDataUpdate':
                        onupdate(message.message as MarketDataUpdate);
                        break;
                }
            }
        }
    };

    send(message: ClientMessage) {
        this.connection?.send(JSON.stringify(message));
    };

}