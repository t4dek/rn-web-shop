import React, {useCallback, useEffect} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getProduct} from '../../store/asyncActions/products';
import {addProductToCart, Product} from '../../store/reducers/products';

import styles from './styles';

const ProductDetails = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.list);

  const id = route.params?.id;
  const headerTitle = route.params?.title;
  const product = products[id] || {};

  const handleAddToCart = useCallback((item: Product) => {
    return () => dispatch(addProductToCart(item));
  }, []);

  useEffect(() => {
    dispatch(getProduct({id}));
    navigation.setOptions({headerTitle});
  }, [id, dispatch]);

  return (
    <View style={styles.containter}>
      <ImageBackground
        resizeMode="contain"
        style={styles.image}
        source={{uri: product.image}}
      />
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`$${product.price}`}</Text>
        <Pressable
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.cartButton,
          })}
          onPress={handleAddToCart(product)}>
          <Text style={styles.cartButtonText}>Add to cart</Text>
        </Pressable>
      </View>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default ProductDetails;
