import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './reducers/products';
import uiReducer from './reducers/ui';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    ui: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
