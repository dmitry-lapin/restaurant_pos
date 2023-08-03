import { createSlice } from "@reduxjs/toolkit";

const OrderDetailsSlice = createSlice({
    name: 'OrderDetails',
    initialState: {
        isVisible: false
    },
    reducers: {
        toggleVisibility: (state) => {
            state.isVisible = !state.isVisible;
        }
    }
})

export const { toggleVisibility } = OrderDetailsSlice.actions;
export default OrderDetailsSlice.reducer;