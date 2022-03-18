import * as React from 'react';
import {Button, ScrollView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToWishlist, removeFromWishlist} from 'app_store/wishlistSlice';
import CategorySection from './CategorySection';
import {Spacer} from 'component';
import {DEFAULT_SCREEN_PADDING_HORIZONTAL} from 'ui/dimen';
import useDiscovery from './useDiscovery';

const sectionHeightGap = 20;

const DiscoveryScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {categories} = useDiscovery();

  return (
    <ScrollView style={style.container}>
      <Button
        title="add to wishlist"
        onPress={() => dispatch(addToWishlist(Math.random(100)))}
      />
      <Button
        title="remove from wishlist"
        onPress={() => dispatch(removeFromWishlist())}
      />

      {categories.map(category => (
        <>
          <CategorySection
            title={category.title}
            data={category.list}
            key={category.title}
          />
          <Spacer height={sectionHeightGap} />
        </>
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: DEFAULT_SCREEN_PADDING_HORIZONTAL,
  },
});

export default DiscoveryScreen;
