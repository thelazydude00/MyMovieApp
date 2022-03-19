import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoveryScreen from 'screen/discovery/DiscoveryScreen';
import FavScreen from 'screen/fav/FavScreen';
import ProfileScreen from 'screen/ProfileScreen';
import {DISCOVERY, FAV, PROFILE} from './route';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const list = [
  {name: DISCOVERY, component: DiscoveryScreen, icon: 'home'},
  {name: FAV, component: FavScreen, icon: 'favorite'},
  {name: PROFILE, component: ProfileScreen, icon: 'person'},
];

export default function MyTabs() {
  return (
    <Tab.Navigator>
      {list.map(item => {
        return (
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name={item.icon} size={size} color={color} />
              ),
            }}
            key={item.name}
          />
        );
      })}
    </Tab.Navigator>
  );
}
