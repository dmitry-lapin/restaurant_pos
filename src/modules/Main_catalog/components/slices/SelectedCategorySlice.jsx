import { createSlice } from "@reduxjs/toolkit";

const selectedCategorySlice = createSlice({
    name: 'Categories',
    initialState: {
        selectedCategory: 'All'
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = (action.payload); 
        }
    }
});

export const { setSelectedCategory} = selectedCategorySlice.actions;
export default selectedCategorySlice.reducer;