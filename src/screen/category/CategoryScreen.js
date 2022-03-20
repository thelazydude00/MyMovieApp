import {useNavigation, useRoute} from '@react-navigation/native';
import {Spacer} from 'component';
import {DETAIL} from 'navigation/route';
import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DEFAULT_SCREEN_PADDING_HORIZONTAL} from 'ui/dimen';

const CategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {title, data} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate(DETAIL, {id: item.id})}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
          <Spacer width={10} />
          <View style={styles.info}>
            <Text style={styles.title}>
              {item.rank}. {item.title}
            </Text>
            <Spacer height={5} />
            <Text>{item.crew}</Text>
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <Spacer height={10} />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 20,
    paddingHorizontal: DEFAULT_SCREEN_PADDING_HORIZONTAL,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 100,
  },
  title: {fontSize: 20, fontWeight: '500'},
  info: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CategoryScreen;
