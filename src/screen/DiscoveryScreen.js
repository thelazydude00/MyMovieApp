import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {DETAIL} from 'navigation/route';

const DiscoveryScreen = ({navigation}) => {
  return (
    <View>
      <Text>Discovery Screen</Text>
      <Button
        title="navigate to detail"
        onPress={() => navigation.push(DETAIL)}
      />
    </View>
  );
};

export default DiscoveryScreen;
