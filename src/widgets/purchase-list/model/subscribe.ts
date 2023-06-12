import { WSContext } from "@/shared/api"
import { useContext, useEffect } from "react"

type SubscribeMarketDataProps = {
    instrument: number,
}

export const useSubscribeMarketData = ({ instrument }: SubscribeMarketDataProps) => {
    const connector = useContext(WSContext);
    useEffect(() => {
        setTimeout(() => {
            connector?.send({
                messageType: 'SubscribeMarketData',
                message: {
                    instrument,
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
                instrument,
            },
        })
    }, [connector, instrument]);
}
