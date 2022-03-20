import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Spacer} from 'component';
import {useDispatch, useSelector} from 'react-redux';
import {clearHistory} from 'app_store/searchSlice';
import SearchFlatList from './SearchFlatList';

const SearchHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector(state => state.search.history);
  return (
    <View>
      <View style={styles.searchHistorySection}>
        <Text style={styles.searchHistory}>Search History</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(clearHistory());
          }}>
          <Text style={styles.btnText}>CLEAR</Text>
        </TouchableOpacity>
      </View>

      <Spacer height={20} />

      <SearchFlatList data={history} />
    </View>
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
});

export default SearchHistory;
