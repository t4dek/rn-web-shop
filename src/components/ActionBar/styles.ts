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
    width: '90%',
    maxWidth: 450,
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
    height: 50,
  },

  text: {
    fontSize: 16,
    color: 'white',
  },
});
