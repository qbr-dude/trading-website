import { useCallback, useContext, useEffect } from 'react';
import { useAppDispatch } from '@/app/store';
import { setSubscriptionId, updateQuotes } from '@/app/store/market-data';
import { type SuccessInfo, type ErrorInfo, type ExecutionReport, type MarketDataUpdate, WSContext } from '@/shared/api';
import { close, open } from '@/app/store/pop-up';

export const useFeedback = () => {
    const connector = useContext(WSContext);
    const dispatch = useAppDispatch();
    const onsuccess = useCallback((message: SuccessInfo) => {
        dispatch(setSubscriptionId(message.subscriptionId));
    }, []);
    const onerror = useCallback((message: ErrorInfo) => {
        dispatch(open(message.reason));
        setTimeout(() => dispatch(close()), 5000);
    }, []);
    const onreport = useCallback((message: ExecutionReport) => {
        return message;
    }, []);
    const onupdate = useCallback(({ instrument, quotes }: MarketDataUpdate) => {
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
