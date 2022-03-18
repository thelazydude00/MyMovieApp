import * as React from 'react';
import {View} from 'react-native';

const Spacer = ({
  width = undefined,
  height = undefined,
  weight = undefined,
}) => {
  return <View style={{width: width, height: height, flex: weight}} />;
};

export default Spacer;
