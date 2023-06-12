import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type State = {
    isActive: boolean,
}

const initialState: State = {
    isActive: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state) => {
            state.isActive = true;
        },
        close: (state) => {
            state.isActive = false;
        },
        toggle: (state) => {
            state.isActive = !state.isActive;
        }
    }
})

export const { open, close, toggle } = modalSlice.actions;
export const selectIsActive = (state: RootState) => state.modal.isActive;
export default modalSlice.reducer;