import { Instrument, WSContext, instrumentToNumber } from "@/shared/api"
import { useContext, useEffect } from "react"

type SubscribeMarketDataProps = {
    instrument: Instrument,
}

export const useSubscribeMarketData = ({ instrument }: SubscribeMarketDataProps) => {
    const connector = useContext(WSContext);
    useEffect(() => {
        setTimeout(() => {
            connector?.send({
                messageType: 'SubscribeMarketData',
                message: {
                    insrtument: instrumentToNumber(instrument),
                },
            })
        }, 2000);
    }, [connector, instrument]);
}

const UnsubscribeMarketData = ({ instrument }: SubscribeMarketDataProps) => {
    const connector = useContext(WSContext);
    useEffect(() => {
        connector?.send({
            messageType: 'UnsubscribeMarketData',
            message: {
                insrtument: instrumentToNumber(instrument),
            },
        })
    }, [connector, instrument]);
}
