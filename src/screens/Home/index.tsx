import React, { useEffect } from 'react';
import {Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../hooks';
import { getProductList } from '../../store/asyncActions/products';

type HomeScreenProps = {};

const Home: React.FC<HomeScreenProps> = () => {
  console.log('hrer');

  const dispatch = useAppDispatch();
  const {list} = useAppSelector(state => state.products);

  console.log('list', list);


  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>{'HOME'}</Text>
    </View>
  );
};

export default Home;
