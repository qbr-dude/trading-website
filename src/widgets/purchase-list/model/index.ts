import { useCallback, useContext, useEffect } from 'react';
import { useAppDispatch } from '@/app/store';
import { setSubscriptionId, updateQuotes } from '@/app/store/market-data';
import { type SuccessInfo, type ErrorInfo, type ExecutionReport, type MarketDataUpdate, WSContext } from '@/shared/api';

export const useFeedback = () => {
    const connector = useContext(WSContext);
    const dispatch = useAppDispatch();
    const onsuccess = useCallback((message: SuccessInfo) => {
        dispatch(setSubscriptionId(message.subscriptionId));
    }, []);
    const onerror = useCallback((message: ErrorInfo) => {
        console.log(message.reason); // TODO Заглушка
    }, []);
    const onreport = useCallback((message: ExecutionReport) => {
        return message;
    }, []);
    const onupdate = useCallback(({ instrument, quotes }: MarketDataUpdate) => {
        console.log(instrument, quotes);
        dispatch(updateQuotes({
            instrument,
            quotes
        }))
    }, []);
    useEffect(() => {
        connector?.setFeedback(
            onsuccess,
            onerror,
            onreport,
            onupdate
        )
    }, [onsuccess, onerror, onreport, onupdate, connector]);
}
