import * as React from 'react';
import {fetchDiscovery} from 'service';

const useDiscovery = () => {
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
    onRefresh,
  };
};

export default useDiscovery;
