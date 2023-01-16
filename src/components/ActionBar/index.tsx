import React from 'react';
import {Pressable, Text, View} from 'react-native';

import styles from './styles';

type ActionBarProps = {};

const ActionBar: React.FC<ActionBarProps> = () => {
  const tabs = [
    {
      icon: 'a',
      onPress: () => console.log('click'),
    },
    {
      icon: 'b',
      onPress: () => console.log('click'),
    },
    {
      icon: 'c',
      onPress: () => console.log('click'),
    },
    {
      icon: 'd',
      onPress: () => console.log('click'),
    },
  ];
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        {tabs.map(tab => (
          <Pressable onPress={tab.onPress} style={styles.tab}>
            <Text>{tab.icon}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ActionBar;
