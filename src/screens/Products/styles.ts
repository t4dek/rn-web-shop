import {StyleSheet, Dimensions} from 'react-native';

const horizontalMargin = 10;

export default StyleSheet.create({
  containter: {
    flex: 0,
  },
  scrollContentContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 30,
  },
  productContainer: {
    flexBasis: Dimensions.get('window').width / 2 - horizontalMargin * 2,
    marginBottom: 50,
    marginHorizontal: 10,
    padding: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    height: Dimensions.get('window').width / 2,
  },
  cartButton: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartButtonText: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 12,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  title: {
    marginVertical: 10,
    textAlign: 'center',
  },
  price: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});
