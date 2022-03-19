import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Favorite, Spacer} from 'component';
import CategoryScaffold from './CategoryScaffold';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useFav from 'shared/useFav';

const CategoryItem = ({id, image, imDbRating, title, year, onPress}) => {
  const {isFav, toggleFav} = useFav(id);

  return (
    <CategoryScaffold onPress={onPress}>
      <View>
        <Favorite
          isFav={isFav}
          style={style.favorite}
          onPress={() => {
            toggleFav({
              id,
              image,
              imDbRating,
              title,
              year,
            });
          }}
        />
        <FastImage
          style={style.image}
          source={{
            uri: image,
          }}
        />
        <Spacer height={5} />
        <View style={style.titleSection}>
          <Text style={style.title} numberOfLines={2}>
            {title}
          </Text>
          <View style={style.descSection}>
            <Text>{year}</Text>
            <Spacer width={10} />
            {!!imDbRating && (
              <>
                <Icon name="star" size={12} color="orange" />
                <Text>{imDbRating}</Text>
              </>
            )}
          </View>
        </View>
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
  favorite: {
    position: 'absolute',
    zIndex: 1,
    right: 5,
    top: 5,
  },
  titleSection: {
    paddingHorizontal: 5,
  },
  descSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CategoryItem;
