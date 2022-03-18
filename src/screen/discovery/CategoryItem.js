import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Spacer} from 'component';
import CategoryScaffold from './CategoryScaffold';

const CategoryItem = ({title, image}) => {
  return (
    <CategoryScaffold>
      <View>
        <FastImage
          style={style.image}
          source={{
            uri: image,
          }}
        />
        <Spacer height={5} />
        <Text style={style.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </CategoryScaffold>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    width: 150,
  },
});

export default CategoryItem;
