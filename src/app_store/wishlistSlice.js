import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeFromWishlist: (state, action) => {
      let arr = [...state.value];
      arr.pop();
      state.value = arr;
    },
  },
});

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
