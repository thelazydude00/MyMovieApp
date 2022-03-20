import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite, selectFavByIdSelector} from 'stores/preferenceSlice';

const useFav = id => {
  const dispatch = useDispatch();
  const isFav = useSelector(state => selectFavByIdSelector(state, id));

  const toggleFav = React.useCallback(
    data => {
      dispatch(toggleFavorite(data));
    },
    [dispatch],
  );

  return {
    isFav,
    toggleFav,
  };
};

export default useFav;
