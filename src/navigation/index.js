import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CATEGORY, HOME, DETAIL} from './route';
import HomeTab from './bottomTabNavigation';
import DetailScreen from 'screen/detail/DetailScreen';
import CategoryScreen from 'screen/category/CategoryScreen';

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
      <Homestack.Screen name={CATEGORY} component={CategoryScreen} />
    </Homestack.Navigator>
  );
};

export default AppNavigation;
