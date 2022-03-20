import * as React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchTextInput = React.forwardRef(
  ({value, onChangeText, onFocus, onBlur, onSubmitEditing}, ref) => {
    return (
      <View style={styles.inputSection}>
        <Icon name="search" size={20} color="#000" />
        <TextInput
          autoCorrect={false}
          placeholder="Search Movies, Series TVs and more"
          ref={ref}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'darkgray',
    flex: 1,
  },
});

export default SearchTextInput;
