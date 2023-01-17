import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Product = {
  id: number;
  price: number;
  title: string;
  image: string;
  description: string;
  category: string;
};

export type ProductsState = {
  list: Record<string, Product>;
  cart: Product[];
};

const initialState: ProductsState = {
  list: {},
  cart: [],
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
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const cartItems = [...state.cart];

      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === action.payload) {
          cartItems.splice(i, 1);

          break;
        }
      }

      state.cart = cartItems;
    },
  },
});

export const {
  setProductsList,
  setProductDetails,
  addProductToCart,
  removeProductFromCart,
} = productsSlice.actions;

export default productsSlice.reducer;
