import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';
import {ROUTE_NAMES} from '../constants/routeNames';

const MainNavigator = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name={ROUTE_NAMES.HOME} component={HomeScreen} />
    </MainNavigator.Navigator>
  );
};
