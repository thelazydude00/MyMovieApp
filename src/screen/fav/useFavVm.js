import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from 'stores/preferenceSlice';

const useFavVm = () => {
  const dispatch = useDispatch();
  const favs = useSelector(state => state.preference.favs);

  const removeFav = id => {
    dispatch(
      toggleFavorite({
        id,
      }),
    );
  };
  return {favs, removeFav};
};

export default useFavVm;
