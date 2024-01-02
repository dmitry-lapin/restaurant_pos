import { createSlice } from "@reduxjs/toolkit";

const UIDSlice = createSlice({
    name: 'UniqueID',
    initialState: {
        UID: null
    },
    reducers: {
        setUID: (state, action) => {
            state.UID = action.payload;
        }
    }
})

export const { setUID } = UIDSlice.actions;
export default UIDSlice.reducer;