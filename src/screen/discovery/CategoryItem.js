import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Spacer} from 'component';
import CategoryScaffold from './CategoryScaffold';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategoryItem = ({
  isFav,
  image,
  rating,
  title,
  year,
  onPress,
  onPressFav,
}) => {
  const icon = isFav ? 'favorite' : 'favorite-outline';
  const iconColor = isFav ? 'red' : 'black';
  return (
    <CategoryScaffold onPress={onPress}>
      <View>
        <Icon
          name={icon}
          size={24}
          style={style.favorite}
          color={iconColor}
          onPress={onPressFav}
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
            {!!rating && (
              <>
                <Icon name="star" size={12} color="orange" />
                <Text>{rating}</Text>
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
