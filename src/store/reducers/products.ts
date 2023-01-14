import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Product = {
  id: string;
  price: number;
  name: string;
  image: string;
};

export type Products = {
  list: Product[];
};

const initialState: Products = {
  list: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<Product[]>) => {
      state.list = action.payload;
    },
  },
});

export const {setProductsList} = productsSlice.actions;

export default productsSlice.reducer;
