import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoveryScreen from 'screen/DiscoveryScreen';
import WishlistScreen from 'screen/WishlistScreen';
import ProfileScreen from 'screen/ProfileScreen';
import {DISCOVERY, WISHLIST, PROFILE} from './route';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={DISCOVERY} component={DiscoveryScreen} />
      <Tab.Screen name={WISHLIST} component={WishlistScreen} />
      <Tab.Screen name={PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
