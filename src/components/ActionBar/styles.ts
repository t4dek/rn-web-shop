import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  containerWrapper: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    zIndex: 999,
  },
  container: {
    position: 'absolute',
    bottom: 35,
    width: '80%',
    maxWidth: 350,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red',
  },

  text: {
    fontSize: 16,
    color: 'white',
  },
});
