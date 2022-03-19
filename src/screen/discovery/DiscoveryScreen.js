import * as React from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import CategorySection from './CategorySection';
import {Spacer} from 'component';
import {DEFAULT_SCREEN_PADDING_HORIZONTAL} from 'ui/dimen';
import useDiscovery from './useDiscovery';

const sectionHeightGap = 20;

const DiscoveryScreen = ({navigation}) => {
  const {categories, refreshing, onRefresh} = useDiscovery();

  return (
    <ScrollView
      style={style.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {categories.map(category => (
        <React.Fragment key={category.title}>
          <CategorySection
            title={category.title}
            data={category.list}
            key={category.title}
          />
          <Spacer height={sectionHeightGap} />
        </React.Fragment>
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
