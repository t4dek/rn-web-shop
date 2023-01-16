import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {ROUTE_NAMES} from '../../constants/routeNames';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getProduct} from '../../store/asyncActions/products';

import styles from './styles';

const ProductDetails = ({route}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.list);

  const id = route.params?.id;
  const product = products[id] || {};

  useEffect(() => {
    dispatch(getProduct({id}));
  }, [id, dispatch]);

  return (
    <View style={styles.containter}>
      <ImageBackground
        resizeMode="contain"
        style={styles.image}
        source={{uri: product.image}}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{`$${product.price}`}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default ProductDetails;
