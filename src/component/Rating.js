import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Spacer from './Spacer';

const Rating = ({text, size = 12, fontSize = 12}) => {
  return (
    <View style={style.container}>
      <Icon name="star" size={size} color="orange" />
      <Spacer width={5} />
      <Text style={{fontSize: fontSize}}>{text}</Text>
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
