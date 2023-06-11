import type { SuccessInfo, ErrorInfo, ExecutionReport, MarketDataUpdate } from '@/shared/api';

export const onsuccess = (message: SuccessInfo) => {
    return message; // STORE TO STORE
}
export const onerror = (message: ErrorInfo) => {
    return message;
}
export const onreport = (message: ExecutionReport) => {
    return message;
}
export const onupdate = (message: MarketDataUpdate) => {
    return message;
}