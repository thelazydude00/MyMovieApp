import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import Share from 'react-native-share';
import {fetchTitle} from 'service';
import {SCHEMA} from 'navigation/deeplink';
import {selectLikeByIdSelector, toggleLike} from 'app_store/wishlistSlice';
import {useDispatch, useSelector} from 'react-redux';
import useFav from 'shared/useFav';

const useDetail = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const {id} = route.params;
  const {isFav, toggleFav} = useFav(id);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();

  const like = useSelector(state => selectLikeByIdSelector(state, id));

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

  const onToggleFav = React.useCallback(() => {
    toggleFav(data);
  }, [toggleFav, data]);

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
    onToggleFav,
  };
};

export default useDetail;
