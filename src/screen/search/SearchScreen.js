import * as React from 'react';
import {Spacer} from 'component';
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DEFAULT_SCREEN_PADDING_HORIZONTAL} from 'ui/dimen';
import SearchHistory from './SearchHistory';
import SearchTextInput from './SearchTextInput';
import SearchFlatList from './SearchFlatList';
import debounce from 'lodash.debounce';
import {searchMovie} from 'service/imdbApi';

const SearchScreen = () => {
  const inputRef = React.useRef(null);
  const [searchInput, setSearchInput] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const debounceSearch = React.useRef(
    debounce(async input => {
      if (input === '') {
        setSearchResult([]);
        return;
      }

      try {
        setLoading(true);
        const response = await searchMovie(input);
        setSearchResult(response.results);
      } catch (ex) {
        console.log(ex);
      } finally {
        setLoading(false);
      }
    }, 800),
  );

  React.useEffect(() => {
    async function search() {
      debounceSearch.current(searchInput);
    }
    search();
  }, [searchInput]);

  return (
    <View style={styles.container}>
      <Spacer height={20} />

      <View style={styles.searchSection}>
        <SearchTextInput
          ref={inputRef}
          value={searchInput}
          onChangeText={setSearchInput}
        />

        {!!searchInput && (
          <React.Fragment>
            <Spacer width={10} />

            <TouchableOpacity
              onPress={() => {
                setSearchInput('');
                inputRef.current.blur();
              }}>
              <Text style={styles.btnText}>CANCEL</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </View>

      <Spacer height={20} />

      {loading && <ActivityIndicator />}

      {searchInput ? <SearchFlatList data={searchResult} /> : <SearchHistory />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DEFAULT_SCREEN_PADDING_HORIZONTAL,
    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchHistory: {
    fontSize: 20,
    fontWeight: '500',
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
  },
});

export default SearchScreen;
