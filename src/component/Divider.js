import * as React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = () => {
  return <View style={style.divider} />;
};

const style = StyleSheet.create({
  divider: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default Divider;
