import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {DETAIL} from 'navigation/route';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, removeFromWishlist} from 'app_store/wishlistSlice';

const DiscoveryScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.value);

  console.log('wishlist', wishlist);
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
    </View>
  );
};

export default DiscoveryScreen;
