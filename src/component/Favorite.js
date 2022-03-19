import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Favorite = ({isFav, size = 24, style, onPress}) => {
  const icon = isFav ? 'favorite' : 'favorite-outline';
  const iconColor = isFav ? 'red' : 'black';

  return (
    <Icon
      name={icon}
      size={size}
      color={iconColor}
      style={style}
      onPress={onPress}
    />
  );
};

export default Favorite;
