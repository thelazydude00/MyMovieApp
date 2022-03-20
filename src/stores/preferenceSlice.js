import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
  favs: [],
  likes: [],
};

export const preferenceSlice = createSlice({
  name: 'preference',
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
    toggleFavorite: (state, action) => {
      let {id, image, title, year, imDbRating} = action.payload;
      let obj = {
        id,
        image,
        title,
        year,
        imDbRating,
      };

      const index = state.favs.findIndex(x => x.id === obj.id);

      if (index > -1) {
        state.favs.splice(index, 1);
      } else {
        state.favs.push(obj);
      }
    },
  },
});

export const selectFavByIdSelector = createSelector(
  [state => state.preference.favs, (state, id) => id],
  (favs, id) => favs.find(item => item.id === id),
);

export const selectLikeByIdSelector = createSelector(
  [state => state.preference.likes, (state, id) => id],
  (likes, id) => {
    const item = likes.find(x => x.id === id);

    return item && item.like;
  },
);

export const {toggleLike, toggleFavorite} = preferenceSlice.actions;

export default preferenceSlice.reducer;
