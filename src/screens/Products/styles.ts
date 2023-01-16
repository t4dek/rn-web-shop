import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  containter: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productContainer: {
    flexBasis: Dimensions.get('window').width / 2,
  },
  image: {
    height: Dimensions.get('window').width / 2,
  },
});
