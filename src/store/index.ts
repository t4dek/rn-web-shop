import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './reducers/products';
import uiReducer from './reducers/ui';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
