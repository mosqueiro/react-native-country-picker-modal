import {StyleSheet, PixelRatio} from 'react-native';
import {getHeightPercent} from './ratio';

export default StyleSheet.create({
  container: {},
  modalContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  header: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 30,
    // backgroundColor: 'blue',
  },
  input: {
    // height: 40,
    // height: 48,
    width: '80%',
    // marginTop: 5,
    // marginBottom: 20,
    // paddingLeft: 12,
    // borderWidth: 1,
    // borderColor: '#0F5F54',
    // borderRadius: 5,
    fontSize: 18,
    // backgroundColor: 'red',
    //
    // marginTop: 0,
    // fontSize: 18,
    color: '#222',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    fontFamily: 'Montserrat-Medium',
    // borderColor: "#005F53",
    padding: 12,
    borderRadius: 5,
  },
  // inputText: {
  //   fontSize: 18,
  // },
  inputOnly: {
    marginLeft: '10%',
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 19,
  },
  imgStyle: {
    // resizeMode: 'contain',
    width: 36,
    height: 36,
    // borderWidth: 1 / PixelRatio.get(),
    // borderColor: '#eee',
    opacity: 0.8,
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(7),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    // width: '15%'
  },
  itemCountryName: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    width: '85%',
    // width: '100%',
    // borderBottomWidth: 2 / PixelRatio.get(),
    // borderBottomColor: '#ccc',
    height: 22,
    marginLeft: 10,
    // paddingRight: 10
    // backgroundColor: 'red'
  },
  countryName: {
    // fontSize: getHeightPercent(2.2),
    fontSize: 16,
  },
  countryCode: {
    textAlign: 'right',
  },
  scrollView: {
    flex: 1,
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    height: 25,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2),
  },
  closeButton: {
    height: 48,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});
