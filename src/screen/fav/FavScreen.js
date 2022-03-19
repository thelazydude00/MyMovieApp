import {Rating, Spacer} from 'component';
import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DEFAULT_SCREEN_PADDING_HORIZONTAL} from 'ui/dimen';
import {appStyle} from 'ui/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useFavVm from './useFavVm';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from 'navigation/route';

const FavScreen = () => {
  const navigation = useNavigation();
  const {favs, removeFav} = useFavVm();

  return (
    <View style={style.container}>
      <Spacer height={20} />
      <Text style={appStyle.title}>Favorites</Text>
      <Spacer height={20} />

      <FlatList
        data={favs}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={style.itemContainer}
              onPress={() => {
                navigation.navigate(DETAIL, {id: item.id});
              }}>
              <FastImage
                style={style.image}
                source={{
                  uri: item.image,
                }}
              />

              <View style={style.itemInfo}>
                <Text style={style.title} numberOfLines={2}>
                  {item.title}
                </Text>

                <Spacer height={10} />

                <Text style={style.year}>{item.year}</Text>

                <Spacer height={10} />

                <Spacer weight={1} />

                <View style={style.itemFooter}>
                  <Rating text={item.imDbRating} size={24} fontSize={20} />

                  <Icon
                    name="delete"
                    size={24}
                    color="gray"
                    onPress={() => {
                      removeFav(item.id);
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <Spacer height={10} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: DEFAULT_SCREEN_PADDING_HORIZONTAL,
  },
  itemContainer: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  itemInfo: {flex: 1, padding: 10},
  itemFooter: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    aspectRatio: 0.7,
    width: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default FavScreen;
