import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider, Spacer} from 'component';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from 'navigation/route';
import {useDispatch} from 'react-redux';
import {addHistory} from 'app_store/searchSlice';

const SearchFlatList = ({data}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <SearchItem
          image={item.image}
          title={item.title}
          year={item.year}
          desc={item.description}
          onPress={() => {
            dispatch(addHistory(item));
            navigation.push(DETAIL, {id: item.id});
          }}
        />
      )}
      ItemSeparatorComponent={() => (
        <View>
          <Spacer height={10} />
          <Divider />
          <Spacer height={10} />
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const SearchItem = ({image, title, year, desc, onPress}) => {
  return (
    <TouchableOpacity style={styles.historyItemContainer} onPress={onPress}>
      <FastImage
        style={styles.historyItemImage}
        source={{
          uri: image,
        }}
      />
      <Spacer width={10} />
      <View style={styles.historyItemInfo}>
        <Text style={styles.historyItemTitle} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.historyItemDesc}>{year}</Text>
        <Text style={styles.historyItemDesc}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  historyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyItemImage: {
    width: 70,
    height: 100,
  },
  historyItemInfo: {
    flex: 1,
  },
  historyItemTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  historyItemDesc: {
    fontSize: 16,
    color: 'gray',
  },
});

export default SearchFlatList;
