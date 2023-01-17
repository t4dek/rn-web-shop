import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UiReducer = {
  isGlobalLoading: boolean;
  isCartOpen: boolean;
};

const initialState: UiReducer = {
  isGlobalLoading: false,
  isCartOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleGlobalLoader: (state, action: PayloadAction<boolean>) => {
      state.isGlobalLoading = action.payload;
    },
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const {toggleGlobalLoader, toggleCart} = uiSlice.actions;

export default uiSlice.reducer;
