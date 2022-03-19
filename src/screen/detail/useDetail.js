import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import Share from 'react-native-share';
import {fetchTitle} from 'service';
import {SCHEMA} from 'navigation/deeplink';
import {toggleLike, toggleWishlist} from 'app_store/wishlistSlice';
import {useDispatch, useSelector} from 'react-redux';

const useDetail = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const {id} = route.params;
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();

  const likes = useSelector(state => state.wishlist.likes);
  const wishlist = useSelector(state => state.wishlist.value);

  const onShare = React.useCallback(() => {
    Share.open({
      url: `${SCHEMA}detail/${id}`,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }, [id]);

  const onToggleLike = React.useCallback(
    target => {
      dispatch(toggleLike({id, target}));
    },
    [dispatch, id],
  );

  const onToggleWishlist = React.useCallback(() => {
    dispatch(toggleWishlist(data));
  }, [dispatch, data]);

  const like = React.useMemo(() => {
    const item = likes.find(x => x.id === id);
    return item && item.like;
  }, [likes, id]);

  const isFav = React.useMemo(() => {
    const item = wishlist.find(x => x.id === id);
    return !!item;
  }, [wishlist, id]);

  React.useEffect(() => {
    setLoading(true);
    fetchTitle(id)
      .then(d => {
        setData(d);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return {
    data,
    loading,
    like,
    isFav,
    onShare,
    onToggleLike,
    onToggleWishlist,
  };
};

export default useDetail;
