import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider, Spacer} from 'component';
import FastImage from 'react-native-fast-image';

const SearchHistory = () => {
  return (
    <View>
      <View style={styles.searchHistorySection}>
        <Text style={styles.searchHistory}>Search History</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.btnText}>CLEAR</Text>
        </TouchableOpacity>
      </View>

      <Spacer height={20} />

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item}) => (
          <HistoryItem
            image="something"
            title="Harry Potter"
            year="2019"
            desc="description"
          />
        )}
        ItemSeparatorComponent={() => (
          <View>
            <Divider />
            <Spacer height={10} />
          </View>
        )}
      />
    </View>
  );
};

const HistoryItem = ({image, title, year, desc}) => {
  return (
    <TouchableOpacity style={styles.historyItemContainer}>
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
  searchHistorySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchHistory: {
    fontSize: 20,
    fontWeight: '500',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
  },
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

export default SearchHistory;
