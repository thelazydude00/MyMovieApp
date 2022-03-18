import * as React from 'react';
import {useSelector} from 'react-redux';
import {fetchDiscovery} from 'service';

const useDiscovery = () => {
  const wishlist = useSelector(state => state.wishlist.value);

  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetchDiscovery()
      .then(d => {
        setCategories(d);
      })
      .finally(() => setLoading(false));
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchDiscovery()
      .then(d => {
        setCategories(d);
      })
      .finally(() => setRefreshing(false));
  }, []);

  return {
    categories,
    loading,
    refreshing,
    wishlist,
    onRefresh,
  };
};

export default useDiscovery;
