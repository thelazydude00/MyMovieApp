import * as React from 'react';
import {View} from 'react-native';

const Spacer = ({width = undefined, height = undefined}) => {
  return <View style={{width: width, height: height}} />;
};

export default Spacer;
