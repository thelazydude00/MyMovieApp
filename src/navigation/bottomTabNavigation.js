import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoveryScreen from 'screen/discovery/DiscoveryScreen';
import FavScreen from 'screen/fav/FavScreen';
import SearchScreen from 'screen/search/SearchScreen';
import {DISCOVERY, FAV, PROFILE} from './route';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const list = [
  {
    name: DISCOVERY,
    title: 'Discovery',
    component: DiscoveryScreen,
    icon: 'home',
  },
  {name: FAV, title: 'Favorite', component: FavScreen, icon: 'favorite'},
  {name: PROFILE, title: 'Search', component: SearchScreen, icon: 'search'},
];

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
        },
        headerShown: false,
      }}>
      {list.map(item => {
        return (
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name={item.icon} size={size} color={color} />
              ),
              title: item.title,
            }}
            key={item.name}
          />
        );
      })}
    </Tab.Navigator>
  );
}
