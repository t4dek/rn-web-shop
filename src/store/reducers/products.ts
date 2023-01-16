import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Product = {
  id: number;
  price: number;
  title: string;
  image: string;
  description: string;
};

export type ProductsState = {
  list: Record<string, Product>;
};

const initialState: ProductsState = {
  list: {},
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<Product[]>) => {
      const list = action.payload.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
      }, {});
      state.list = list;
    },
    setProductDetails: (state, action: PayloadAction<Product>) => {
      state.list = {
        ...state.list,
        [action.payload.id]: {
          ...state.list[action.payload.id],
          ...action.payload,
        },
      };
    },
  },
});

export const {setProductsList, setProductDetails} = productsSlice.actions;

export default productsSlice.reducer;
