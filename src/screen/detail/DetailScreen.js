import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Favorite, Rating, Spacer} from 'component';
import useDetail from './useDetail';
import FastImage from 'react-native-fast-image';
import {DEFAULT_SCREEN_PADDING_HORIZONTAL} from 'ui/dimen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from 'navigation/route';
import ThumbUp from './ThumbUp';
import ThumbDown from './ThumbDown';

const DetailScreen = () => {
  const navigation = useNavigation();
  const {data, loading, like, isFav, onShare, onToggleLike, onToggleFav} =
    useDetail();

  if (loading || !data) {
    return (
      <View style={style.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{paddingHorizontal: DEFAULT_SCREEN_PADDING_HORIZONTAL}}>
        <FastImage
          style={style.image}
          resizeMode="contain"
          source={{
            uri: data.image,
          }}
        />

        <Spacer height={10} />

        <Text style={style.title}>{data.fullTitle}</Text>

        <Spacer height={10} />

        <View style={style.actionContainer}>
          <ThumbUp
            value={like === true}
            size={24}
            onPress={() => onToggleLike(true)}
          />

          <ThumbDown
            value={like === false}
            size={24}
            onPress={() => onToggleLike(false)}
          />

          <Favorite isFav={isFav} size={24} onPress={onToggleFav} />

          <Icon name="share" size={24} onPress={onShare} />
        </View>

        <Spacer height={20} />

        <Text>{data.plot}</Text>

        <Spacer height={10} />

        <View style={style.descContainer}>
          <Rating text={data.imDbRating} />

          <Spacer width={20} />

          <Text>
            {data.year} | {data.runtimeStr}
          </Text>
        </View>

        <Spacer height={20} />

        <Text style={style.similars}>Similars</Text>

        <Spacer height={10} />
      </View>
      <FlatList
        data={data.similars}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.push(DETAIL, {id: item.id})}>
              <View style={style.similarItemContainer}>
                <FastImage
                  style={style.similarItemImage}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal
        ItemSeparatorComponent={() => <Spacer width={10} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: DEFAULT_SCREEN_PADDING_HORIZONTAL,
        }}
      />

      <Spacer height={30} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
  },
  image: {
    height: 300,
    left: 0,
    right: 0,
  },
  plot: {
    fontSize: 16,
    fontWeight: 400,
  },
  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  similars: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  similarItemContainer: {
    height: 240,
    width: 150,
  },
  similarItemImage: {
    height: 200,
    width: 150,
  },
});

export default DetailScreen;
