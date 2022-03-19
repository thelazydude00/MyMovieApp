import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  toggleWishlist,
  selectWishlistByIdSelector,
} from 'app_store/wishlistSlice';

const useFav = id => {
  const dispatch = useDispatch();
  const isFav = useSelector(state => selectWishlistByIdSelector(state, id));

  const toggleFav = React.useCallback(
    data => {
      dispatch(toggleWishlist(data));
    },
    [dispatch],
  );

  return {
    isFav,
    toggleFav,
  };
};

export default useFav;
