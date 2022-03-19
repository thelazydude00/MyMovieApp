import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
  value: [],
  likes: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      let {id, target} = action.payload;
      let obj = {
        id,
      };

      const index = state.likes.findIndex(x => x.id === id);

      obj = {...obj, ...state.likes[index]};
      obj.like = obj.like === target ? undefined : target;

      if (index > -1) {
        state.likes.splice(index, 1, obj);
      } else {
        state.likes.push(obj);
      }
    },
    toggleWishlist: (state, action) => {
      let {id, image, title, year, imDbRating} = action.payload;
      let obj = {
        id,
        image,
        title,
        year,
        imDbRating,
      };

      const index = state.value.findIndex(x => x.id === obj.id);

      if (index > -1) {
        state.value.splice(index, 1);
      } else {
        state.value.push(obj);
      }
    },
  },
});

export const selectWishlistByIdSelector = createSelector(
  [state => state.wishlist.value, (state, id) => id],
  (wishlist, id) => wishlist.find(item => item.id === id),
);

export const selectLikeByIdSelector = createSelector(
  [state => state.wishlist.likes, (state, id) => id],
  (likes, id) => {
    const item = likes.find(x => x.id === id);

    return item && item.like;
  },
);

export const {addToWishlist, removeFromWishlist, toggleLike, toggleWishlist} =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
