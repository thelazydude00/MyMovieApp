import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CATEGORY, HOME, DETAIL} from './route';
import HomeTab from './bottomTabNavigation';
import DetailScreen from 'screen/detail/DetailScreen';
import CategoryScreen from 'screen/category/CategoryScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

const Homestack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigation;
