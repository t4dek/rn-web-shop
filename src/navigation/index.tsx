import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDetails, ProductsScreen} from '../screens';
import {ROUTE_NAMES} from '../constants/routeNames';

const MainNavigator = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen
        name={ROUTE_NAMES.PRODUCTS}
        component={ProductsScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainNavigator.Screen
        name={ROUTE_NAMES.PRODUCT_DETAILS}
        component={ProductDetails}
      />
    </MainNavigator.Navigator>
  );
};
