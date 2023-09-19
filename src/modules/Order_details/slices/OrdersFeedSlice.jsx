import { createSlice } from "@reduxjs/toolkit";

const OrdersFeedSlice = createSlice({
    name: 'OrdersFeed',
    initialState: {
        SelectedDishes: [],
        totalAmount: 0,
    },
    reducers: {
        addDishToOrder: (state, action) => {
            const addedDish = action.payload;
            const existingDish = state.SelectedDishes.find(dish => dish.name === addedDish.name);

            if (existingDish) {
                existingDish.quantity += 1;
            } else {
                state.SelectedDishes.push({ ...addedDish, quantity: 1 });
            }

            state.totalAmount += addedDish.price;
        },
        removeDish: (state, action) => {
            const removedDishName = action.payload;
            const removedDish = state.SelectedDishes.find(dish => dish.name === removedDishName);

            if (removedDish) {
                if (removedDish.quantity > 1) {
                    removedDish.quantity -= 1;
                } else {
                    state.SelectedDishes = state.SelectedDishes.filter(dish => dish.name !== removedDishName);
                }

                state.totalAmount -= removedDish.price;
            }
        },
        removeAllDishes: (state, action) => {
            const removedDishName = action.payload;
            const removedDish = state.SelectedDishes.find(dish => dish.name === removedDishName);

            if (removedDish) {
                state.SelectedDishes = state.SelectedDishes.filter(dish => dish.name !== removedDishName);
                state.totalAmount -= removedDish.price * removedDish.quantity;
            }
        },
    },
});

export const { removeDish } = OrdersFeedSlice.actions;
export const { addDishToOrder } = OrdersFeedSlice.actions;
export const { removeAllDishes } = OrdersFeedSlice.actions;
export default OrdersFeedSlice.reducer;