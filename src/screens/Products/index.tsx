import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {ROUTE_NAMES} from '../../constants/routeNames';
import {Product} from '../../store/reducers/products';
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
        navigation.navigate(ROUTE_NAMES.PRODUCT_DETAILS, {id: product.id});
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

      return (
        <Pressable
          onPress={navigateToItemDetails(product)}
          style={styles.productContainer}
          key={product.id}>
          <ImageBackground
            resizeMode="stretch"
            style={styles.image}
            source={{uri: product.image}}>
            <Text>{product.title}</Text>
          </ImageBackground>
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
