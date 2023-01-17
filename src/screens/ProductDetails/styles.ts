import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containter: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
  image: {
    height: 300,
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  price: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 24,
    paddingVertical: 5,
    textAlign: 'center',
  },
  description: {
    paddingHorizontal: 15,
  },
  cartButton: {
    backgroundColor: 'black',
    width: 100,
    height: 40,
    alignSelf: 'center',
    borderRadius: 10,
    flex: 0,
    justifyContent: 'center',
    marginVertical: 7,
  },
  cartButtonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  priceContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
});
