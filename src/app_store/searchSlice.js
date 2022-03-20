import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  history: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addHistory: (state, action) => {
      const obj = action.payload;

      const index = state.history.findIndex(x => x.id === obj.id);

      if (index > -1) {
        state.history.splice(index, 1);
      }

      state.history.unshift(obj);
    },
    clearHistory: (state, action) => {
      state.history = [];
    },
  },
});

export const {addHistory, clearHistory} = searchSlice.actions;

export default searchSlice.reducer;
