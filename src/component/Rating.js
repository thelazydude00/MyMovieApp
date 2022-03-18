import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Spacer from './Spacer';

const Rating = ({text}) => {
  return (
    <View style={style.container}>
      <Icon name="star" size={12} color="orange" />
      <Spacer width={5} />
      <Text>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Rating;
