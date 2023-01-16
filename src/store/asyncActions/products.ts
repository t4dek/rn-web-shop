import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../constants';
import {setProductDetails, setProductsList} from '../reducers/products';
import {toggleGlobalLoader} from '../reducers/ui';

const getProductList = createAsyncThunk(
  'products/getList',
  async (arg, {dispatch}) => {
    try {
      dispatch(toggleGlobalLoader(true));
      const response = await fetch(`${BASE_URL}/products`);

      const list = await response.json();
      dispatch(setProductsList(list));
    } catch (err) {
      console.error('err', err);
    } finally {
      dispatch(toggleGlobalLoader(false));
    }
  },
);

const getProduct = createAsyncThunk(
  'products/getOne',
  async ({id}: {id: string}, {dispatch}) => {
    try {
      dispatch(toggleGlobalLoader(true));
      const response = await fetch(`${BASE_URL}/products/${id}`);

      const product = await response.json();
      dispatch(setProductDetails(product));
    } catch (err) {
      console.error('err', err);
    } finally {
      dispatch(toggleGlobalLoader(false));
    }
  },
);

export {getProductList, getProduct};
