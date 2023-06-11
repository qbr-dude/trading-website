import { useEffect } from "react";
import WSConnector from "../config/ws";
import { ErrorInfo, ExecutionReport, MarketDataUpdate, SuccessInfo } from "../types/server";

type Props = {
    onsuccess: (message: SuccessInfo) => void,
    onerror: (message: ErrorInfo) => void,
    onreport: (message: ExecutionReport) => void,
    onupdate: (message: MarketDataUpdate) => void
}

export const useWebsocket = ({ onerror, onsuccess, onreport, onupdate }: Props, callback?: () => void) => {
    useEffect(() => {
        const connector = new WSConnector();
        connector.connect();

        return () => {
            connector.disconnect();
        }
    }, [onsuccess, onerror, onreport, onupdate])
}