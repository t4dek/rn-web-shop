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
import {addProductToCart, Product} from '../../store/reducers/products';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getProductList} from '../../store/asyncActions/products';

import styles from './styles';

const Products = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {list} = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const navigateToItemDetails = useCallback(
    (product: Product) => {
      return () => {
        navigation.navigate(ROUTE_NAMES.PRODUCT_DETAILS, {
          id: product.id,
          title: product.title,
        });
      };
    },
    [navigation],
  );

  const renderProduct = useCallback(
    (id: string) => {
      const product = list[id];

      if (!product) {
        return null;
      }

      const addToCart = item => () => {
        dispatch(addProductToCart(item));
      };

      return (
        <Pressable
          onPress={navigateToItemDetails(product)}
          style={styles.productContainer}
          key={product.id}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{uri: product.image}}
          />
          <Text style={styles.title}>{product.title}</Text>
          <Pressable
            onPress={addToCart(product)}
            style={({pressed}) => ({
              ...styles.cartButton,
              opacity: pressed ? 0.5 : 1,
            })}>
            <Text style={styles.cartButtonText}>Add to cart</Text>
          </Pressable>
        </Pressable>
      );
    },
    [list, navigateToItemDetails],
  );

  return (
    <SafeAreaView style={styles.containter}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        {Object.keys(list).map(renderProduct)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;
