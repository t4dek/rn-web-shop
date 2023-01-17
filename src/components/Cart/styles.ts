import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  modal: {
    flex: 1,
    marginTop: 180,
  },
  modalContentContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countContainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  addRemove: {
    backgroundColor: 'black',
    flex: 1,
  },
  addRemoveText: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    maxHeight: 100,
  },
  qty: {flex: 1, alignItems: 'center'},
});
