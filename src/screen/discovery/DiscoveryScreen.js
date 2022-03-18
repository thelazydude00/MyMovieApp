import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {DETAIL} from 'navigation/route';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, removeFromWishlist} from 'app_store/wishlistSlice';
import {fetchDiscovery} from 'service';
import CategorySection from './CategorySection';

const DiscoveryScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.value);

  console.log('wishlist', wishlist);

  const data = {
    title: 'Top 250 Movies',
    list: [
      {
        id: '1',
        title: 'test A',
        image:
          'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg',
      },
      {
        id: '2',
        title: 'test B asjhd asdkjhas asjdhas hjqw ashdjgasd asdhjk',
        image:
          'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg',
      },
      {
        id: '3',
        title: 'test C',
        image:
          'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg',
      },
      {
        id: '4',
        title: 'test D',
        image:
          'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg',
      },
    ],
  };

  return (
    <View>
      <Text>Discovery Screen</Text>
      <Button
        title="navigate to detail"
        onPress={() => navigation.push(DETAIL)}
      />
      <Button
        title="add to wishlist"
        onPress={() => dispatch(addToWishlist(Math.random(100)))}
      />
      <Button
        title="remove from wishlist"
        onPress={() => dispatch(removeFromWishlist())}
      />

      <Button
        title="fetch discovery"
        onPress={() => {
          fetchDiscovery('tt1375666');
        }}
      />
      <CategorySection title={data.title} data={data.list} />
    </View>
  );
};

export default DiscoveryScreen;
