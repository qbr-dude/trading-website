import { useEffect, useState } from "react";
import WSConnector from "../config/ws";
import { useAppDispatch } from "@/app/store";
import { close, open } from "@/app/store/websocket";

export const useWebsocket = () => {
    const [connector, setConnector] = useState<WSConnector | null>(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const _connector = new WSConnector();
        setConnector(_connector);
        _connector.connect(() => { dispatch(open()) }, () => { dispatch(close()) });
    }, []);
    return connector;
}