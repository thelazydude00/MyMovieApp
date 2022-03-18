import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import Share from 'react-native-share';
import {fetchTitle} from 'service';
import {SCHEMA} from 'navigation/deeplink';

const useDetail = () => {
  const route = useRoute();
  const {id} = route.params;
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();

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
    onShare,
  };
};

export default useDetail;
