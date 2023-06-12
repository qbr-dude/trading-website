import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type State = {
    isOpen: boolean,
}

const initialState: State = {
    isOpen: false,
}

export const websocketSlice = createSlice({ //TODO Может снести его
    name: 'websocket',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        }
    }
});

export const { open, close } = websocketSlice.actions;

export const selectIsOpen = (state: RootState) => state.websocket.isOpen;

export default websocketSlice.reducer;