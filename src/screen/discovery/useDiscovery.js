import * as React from 'react';
import {useSelector} from 'react-redux';
import {fetchDiscovery} from 'service';

const useDiscovery = () => {
  const wishlist = useSelector(state => state.wishlist.value);

  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetchDiscovery()
      .then(d => {
        setCategories(d);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    categories,
    loading,
    wishlist,
  };
};

export default useDiscovery;
