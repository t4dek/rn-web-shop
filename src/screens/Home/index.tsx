import React from 'react';
import {Text, View} from 'react-native';

type HomeScreenProps = {};

const Home: React.FC<HomeScreenProps> = () => {
  console.log('hrer');

  return (
    <View style={{flex: 1}}>
      <Text>{'HOME'}</Text>
    </View>
  );
};

export default Home;
