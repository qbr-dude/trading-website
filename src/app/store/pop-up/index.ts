import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type State = {
    isActive: boolean,
    message?: string,
}

const initialState: State = {
    isActive: false,
}

export const popupSlice = createSlice({
    name: 'pop-up',
    initialState,
    reducers: {
        open: (state, action) => {
            state.isActive = true;
            state.message = action.payload.message;
        },
        close: (state) => {
            state.isActive = false;
        }
    }
})

export const { open, close } = popupSlice.actions;

export const selectPopupIsActive = (state: RootState) => state.popup.isActive;
export const selectPopupMessage = (state: RootState) => state.popup.message;

export default popupSlice.reducer;