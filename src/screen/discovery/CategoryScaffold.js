import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const CategoryScaffold = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: 150,
    height: 240,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});

export default CategoryScaffold;
