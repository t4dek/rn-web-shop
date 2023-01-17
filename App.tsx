import React, {useCallback} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from './src/store';
import {MainNavigation} from './src/navigation';
import {useAppDispatch, useAppSelector} from './src/hooks';
import {ActionBar, GlobalLoader} from './src/components';
import Cart from './src/components/Cart';
import {toggleCart} from './src/store/reducers/ui';
import {
  addProductToCart,
  Product,
  removeProductFromCart,
} from './src/store/reducers/products';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const dispatch = useAppDispatch();

  const {isGlobalLoading, isCartOpen} = useAppSelector(state => state.ui);
  const cartItems = useAppSelector(state => state.products.cart);

  const handleCartOpen = useCallback(() => {
    dispatch(toggleCart(!isCartOpen));
  }, [isCartOpen]);

  const handleAddProductToCart = useCallback((product: Product) => {
    dispatch(addProductToCart(product));
  }, []);
  const handleRemoveItemFromCart = useCallback((prductId: number) => {
    dispatch(removeProductFromCart(prductId));
  }, []);

  const navTheme = DefaultTheme;
  navTheme.colors.background = 'white';

  return (
    <NavigationContainer theme={navTheme}>
      {isGlobalLoading ? <GlobalLoader /> : null}
      {isCartOpen ? (
        <Cart
          products={cartItems}
          isModalVisible={isCartOpen}
          toggleModal={handleCartOpen}
          addItem={handleAddProductToCart}
          removeItem={handleRemoveItemFromCart}
        />
      ) : null}
      <ActionBar cartSize={cartItems.length} onCartPress={handleCartOpen} />
      <MainNavigation />
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
