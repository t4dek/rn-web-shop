import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Products = {
  list: Record<string, string>[]
}

const initialState: Products = {
  list: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsList: (
      state,
      action: PayloadAction<Record<string, string>[]>,
    ) => {
      state.list = action.payload;
    },
  },
});

export const {setProductsList} = productsSlice.actions;

export default productsSlice.reducer;
