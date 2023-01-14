import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../constants';
import {setProductsList} from '../reducers/products';

const getProductList = createAsyncThunk(
  'products/getList',
  async (arg, {dispatch}) => {
    try {
      const response = await fetch(`${BASE_URL}/items`);

      const list = await response.json();
      dispatch(setProductsList(list));
    } catch (err) {
      console.error('err', err);
    }
  },
);

const getProduct = createAsyncThunk(
  'products/getOne',
  async ({id}: {id: string}, {dispatch}) => {
    try {
      const response = await fetch(`${BASE_URL}/items/${id}`);

      const list = await response.json();
      dispatch(setProductsList(list));
    } catch (err) {
      console.error('err', err);
    }
  },
);

export {getProductList, getProduct};
