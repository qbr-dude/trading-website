import { useEffect, useState } from "react";
import WSConnector from "../config/ws";

export const useWebsocket = () => {
    let [connector, setConnector] = useState<WSConnector | null>(null);
    useEffect(() => {
        const _connector = new WSConnector();
        setConnector(_connector);
        _connector.connect();
    }, []);
    return connector;
}