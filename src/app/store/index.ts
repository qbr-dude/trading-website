import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import modalReducer from './modal';
import marketDataReducer from './market-data';
import websocketReducer from './websocket';
import popupReducer from './pop-up';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        marketData: marketDataReducer,
        websocket: websocketReducer,
        popup: popupReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;