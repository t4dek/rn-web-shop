import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    zIndex: 99,
  },
});
