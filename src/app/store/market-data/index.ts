import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Instrument, Quote } from "@/shared/api";

type State = {
    subscriptionId?: string;
    quotes: {
        [key in Instrument]: Quote[];
    },
}

const initialState: State = {
    quotes: {
        EUR_RUB: [],
        EUR_USD: [],
        USD_RUB: [],
    },
}

type UpdateQuotesProps = {
    payload: {
        instrument: Instrument,
        quotes: Quote[],
    },
}

export const marketDataSlice = createSlice({
    name: 'market-data',
    initialState,
    reducers: {
        setSubscriptionId: (state, action) => {
            state.subscriptionId = action.payload;
        },
        updateQuotes: (state, action: UpdateQuotesProps) => {
            if (action.payload.quotes)
                action.payload.quotes.forEach(quote =>
                    state.quotes[action.payload.instrument].push(quote))
        }
    }
})

export const { setSubscriptionId, updateQuotes } = marketDataSlice.actions;

export const selectSubscriptionId = (state: RootState) => state.marketData.subscriptionId;
export const selectQuotes = (state: RootState) => state.marketData.quotes;

export default marketDataSlice.reducer;