import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import {
    configureStore,
    EmptyObject,
    EnhancedStore,
    PreloadedState,
} from '@reduxjs/toolkit';

import marketDataReducer from '@/app/store/market-data';
import modalReducer from '@/app/store/modal';
import type { RootState } from '@/app/store';

type ReducerTypes = RootState;
type TStore = EnhancedStore<ReducerTypes>;
type CustomRenderOptions = {
    preloadedState?: PreloadedState<ReducerTypes & EmptyObject>
    store?: TStore
} & Omit<RenderOptions, 'wrapper'>;

function render(ui: ReactElement, options?: CustomRenderOptions) {
    const { preloadedState } = options || {}

    const store =
        options?.store ||
        configureStore({
            reducer: {
                marketData: marketDataReducer,
                modal: modalReducer,
            },
            preloadedState,
        })

    function Wrapper({ children }: { children: React.ReactNode }) {
        return <Provider store={store}> {children} </Provider>
    }

    return rtlRender(ui, { wrapper: Wrapper, ...options })
};

export * from '@testing-library/react';
export { render };