import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDiscovery} from 'stores/discoverySlice';

const useDiscovery = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.discovery.categories);
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    dispatch(fetchDiscovery()).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchDiscovery()).finally(() => {
      setRefreshing(false);
    });
  }, [dispatch]);

  return {
    categories,
    loading,
    refreshing,
    onRefresh,
  };
};

export default useDiscovery;
