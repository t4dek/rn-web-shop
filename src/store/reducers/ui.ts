import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UiReducer = {
  isGlobalLoading: boolean;
};

const initialState: UiReducer = {
  isGlobalLoading: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleGlobalLoader: (state, action: PayloadAction<boolean>) => {
      state.isGlobalLoading = action.payload;
    },
  },
});

export const {toggleGlobalLoader} = uiSlice.actions;

export default uiSlice.reducer;
