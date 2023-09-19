import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

const OrderInformation = createSlice({
    name: 'OrderInformation',
    initialState: {
        paymentMethod: "Cash",
        date: formattedDate,
        waiter: "Homer Simpson",
        table: null
    },
    reducers: {
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        },
        setTableNumber: (state, action) => {
            state.table = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        }
    }
});

export const { setPaymentMethod, setTableNumber, setDate } = OrderInformation.actions;
export default OrderInformation.reducer;