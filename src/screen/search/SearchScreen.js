import {Spacer} from 'component';
import * as React from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DEFAULT_SCREEN_PADDING_HORIZONTAL} from 'ui/dimen';
import SearchHistory from './SearchHistory';

const arr = [
  'harry potter',
  'Ironman',
  'Spiderman',
  'batman & superman',
  'water fish',
];

const SearchScreen = () => {
  // const inputRef = React.useRef(null);
  // const [searchInput, setSearchInput] = React.useState('');
  // const [history, setHistory] = React.useState(arr);
  // const [searchFocus, setSearchFocus] = React.useState(false);

  return (
    <View style={{paddingHorizontal: DEFAULT_SCREEN_PADDING_HORIZONTAL}}>
      {/* <Spacer height={20} />

      <View style={styles.searchSection}>
        <View style={styles.inputSection}>
          <Icon name="search" size={20} color="#000" />
          <TextInput
            placeholder="Search Movies, Series TVs and more"
            ref={inputRef}
            style={styles.input}
            value={searchInput}
            onChangeText={setSearchInput}
            onFocus={e => {
              setSearchFocus(true);
            }}
            onBlur={() => {
              setSearchFocus(false);
            }}
            onSubmitEditing={() => {
              console.log('check');
              const input = searchInput.trim().toLowerCase();
              const newArr = [...history];
              const index = newArr.findIndex(
                x => x.trim().toLowerCase() === input,
              );

              if (index > -1) {
                newArr.splice(index, 1);
              }
              newArr.unshift(input);
              setHistory(newArr);
              setSearchInput('');
            }}
          />
        </View>

        {searchFocus && (
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

      <SearchHistory /> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   searchSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   inputSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: 'darkgray',
//     flex: 1,
//   },
//   searchHistory: {
//     fontSize: 20,
//     fontWeight: '500',
//   },
//   input: {
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
//   chip: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 50,
//     borderWidth: 1,
//     marginBottom: 10,
//   },
//   btnText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'blue',
//   },
// });

export default SearchScreen;
