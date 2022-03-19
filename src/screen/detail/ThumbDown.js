import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ThumbDown = ({value, size = 24, onPress}) => {
  const icon = value ? 'thumb-down' : 'thumb-down-off-alt';

  return <Icon name={icon} size={size} onPress={onPress} />;
};

export default ThumbDown;
