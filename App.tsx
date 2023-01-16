import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from './src/store';
import {MainNavigation} from './src/navigation';
import {useAppSelector} from './src/hooks';
import {ActionBar, GlobalLoader} from './src/components';

const App = () => {
  const {isGlobalLoading} = useAppSelector(state => state.ui);
  return (
    <NavigationContainer>
      {isGlobalLoading ? <GlobalLoader /> : null}
      <ActionBar />
      <MainNavigation />
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
