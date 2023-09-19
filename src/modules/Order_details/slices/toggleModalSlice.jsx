import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalVisible: false,
  },
  reducers: {
    toggleModal: (state) => {
        state.isModalVisible = !state.isModalVisible;
    }
}
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
