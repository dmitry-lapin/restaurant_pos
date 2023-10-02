import { createSlice } from '@reduxjs/toolkit';

const toggleTableModal = createSlice({
  name: 'tableModal',
  initialState: {
    isToggleModalVisible: false,
  },
  reducers: {
    toggleModal: (state) => {
        state.isToggleModalVisible = !state.isToggleModalVisible;
    }
}
});

export const { toggleModal } = toggleTableModal.actions;
export default toggleTableModal.reducer;