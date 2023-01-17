import React from 'react';
import {Pressable, Text, View} from 'react-native';

import styles from './styles';

type ActionBarProps = {
  onCartPress: () => void;
  cartSize: number;
};

const ActionBar: React.FC<ActionBarProps> = ({onCartPress, cartSize}) => {
  const tabs = [
    {
      icon: 'Home',
      onPress: () => console.log('HOME'),
    },
    {
      icon: 'Search',
      onPress: () => console.log('SEARCH'),
    },
    {
      icon: 'Likes',
      onPress: () => console.log('FAVOURITES'),
    },
    {
      icon: `Cart: ${cartSize}`,
      onPress: onCartPress,
    },
  ];
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        {tabs.map(tab => (
          <Pressable
            key={tab.icon}
            onPress={tab.onPress}
            style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
            <Text style={{fontWeight: 'bold'}}>{tab.icon}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ActionBar;
