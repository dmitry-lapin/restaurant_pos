// steamSlice.js
import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    teamData: {},
    error: null,
  },
  reducers: {
    fetchTeamSuccess: (state, action) => {
      state.teamData = action.payload;
      state.error = null;
    },
    fetchTeamFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchTeamSuccess, fetchTeamFailure } = teamSlice.actions;
export default teamSlice.reducer;
