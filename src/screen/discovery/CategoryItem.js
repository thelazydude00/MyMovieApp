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
      <View style={style.yearBox}>
        <Text style={style.year}>{year}</Text>
      </View>

      <FastImage
        style={style.image}
        source={{
          uri: image,
        }}
      />
      <Spacer height={5} />
      <View style={style.infoSection}>
        <Text style={style.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={style.descSection}>
          {!!imDbRating && (
            <>
              <Icon name="star" size={12} color="orange" />
              <Text>{imDbRating}</Text>
            </>
          )}
          <Spacer weight={1} />
          <Favorite
            isFav={isFav}
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
    alignSelf: 'flex-end',
  },
  year: {
    color: 'white',
    fontWeight: 'bold',
  },
  yearBox: {
    backgroundColor: 'darkorange',
    position: 'absolute',
    zIndex: 1,
    right: -2,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderBottomStartRadius: 10,
  },
  infoSection: {
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    flex: 1,
  },
  descSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default CategoryItem;
