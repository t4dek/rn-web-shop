import React from 'react';
import {ActivityIndicator} from 'react-native';

import styles from './styles';
import {BlurView} from '@react-native-community/blur';

const GlobalLoader = () => (
  <BlurView
    blurType="light"
    blurAmount={10}
    reducedTransparencyFallbackColor="white"
    style={styles.absolute}>
    <ActivityIndicator size="large" style={styles.indicator} />
  </BlurView>
);
export default GlobalLoader;
