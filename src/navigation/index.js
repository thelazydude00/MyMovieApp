import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, DETAIL} from './route';
import HomeTab from './bottomTabNavigation';
import DetailScreen from 'screen/DetailScreen';

const Homestack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Homestack.Navigator initialRouteName={HOME}>
      <Homestack.Screen
        name={HOME}
        component={HomeTab}
        options={{
          header: () => null,
        }}
      />
      <Homestack.Screen name={DETAIL} component={DetailScreen} />
    </Homestack.Navigator>
  );
};

export default AppNavigation;
