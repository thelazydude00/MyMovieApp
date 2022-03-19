import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ThumbUp = ({value, size = 24, onPress}) => {
  const icon = value ? 'thumb-up' : 'thumb-up-off-alt';

  return <Icon name={icon} size={size} onPress={onPress} />;
};

export default ThumbUp;
