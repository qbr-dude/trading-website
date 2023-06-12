import { ClientEnvelope } from "../types/client";
import { ErrorInfo, ExecutionReport, MarketDataUpdate, ServerEnvelope, SuccessInfo } from "../types/server";


export default class WSConnector {
    connection: WebSocket | null

    constructor() {
        this.connection = null;
    }

    connect(
        onopen: () => void,
        onclose: () => void
    ) {
        this.connection = new WebSocket('ws://127.0.0.1:4000/ws/');
        this.connection.onclose = () => {
            onclose();
            this.connection = null;
        };

        this.connection.onerror = () => { };
        this.connection.onopen = () => {
            onopen();
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
                    case 'SuccessInfo':
                        onsuccess(message.message as SuccessInfo);
                        break;
                    case 'ErrorInfo':
                        onerror(message.message as ErrorInfo);
                        break;
                    case 'ExecutionReport':
                        onreport(message.message as ExecutionReport);
                        break;
                    case 'MarketDataUpdate':
                        onupdate(message.message as MarketDataUpdate);
                        break;
                }
            };
        } else {
            throw new Error('Set connection before configure feedback');
        }
    }

    send(message: ClientEnvelope) {
        this.connection?.send(JSON.stringify(message));
    };

}