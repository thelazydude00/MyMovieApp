import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import discoveryApi from 'service/imdbApi';

const initialState = {
  categories: [],
};

export const fetchDiscovery = createAsyncThunk(
  'discovery/fetchDiscovery',
  async () => {
    const response = await discoveryApi.fetchDiscovery();

    return response;
  },
);

const discoverySlice = createSlice({
  name: 'discovery',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDiscovery.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default discoverySlice.reducer;
