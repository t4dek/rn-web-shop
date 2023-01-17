import {BlurView} from '@react-native-community/blur';
import React, { useMemo } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Product} from '../../store/reducers/products';

import styles from './styles';

type CartProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
  products: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
};

const Cart: React.FC<CartProps> = ({
  isModalVisible,
  toggleModal,
  products,
  addItem,
  removeItem,
}: CartProps) => {
  const normalizedProducts = useMemo(
    () =>
      products.reduce((acc, item) => {
        acc[item.id] = acc[item.id] ? [...acc[item.id], item] : [item];

        return acc;
      }, {}),
    [products],
  );

  const renderItem = (itemId: number) => {
    const product = normalizedProducts[itemId][0];
    return (
      <View style={styles.itemContainer}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{uri: product.image}}
          />
          <View style={styles.countContainer}>
            <Pressable
              onPress={() => removeItem(product.id)}
              style={styles.addRemove}>
              <Text style={styles.addRemoveText}>-</Text>
            </Pressable>
            <View style={styles.qty}>
              <Text>{normalizedProducts[product.id]?.length}</Text>
            </View>
            <Pressable
              onPress={() => addItem(product)}
              style={styles.addRemove}>
              <Text style={styles.addRemoveText}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{`$${product.price}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      backdropOpacity={1}
      customBackdrop={
        <TouchableWithoutFeedback onPress={toggleModal}>
          <BlurView blurType="light" style={styles.container} />
        </TouchableWithoutFeedback>
      }>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.modalContentContainer}>
          {products.length ? (
            Object.keys(normalizedProducts).map(renderItem)
          ) : (
            <Text>Cart is empty</Text>
          )}
        </View>
      </ScrollView>
    </Modal>
  );
};

export default Cart;
