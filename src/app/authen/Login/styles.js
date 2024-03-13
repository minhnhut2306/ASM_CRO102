import {StyleSheet, useWindowDimensions,} from 'react-native';

export default styles = StyleSheet.create({
  registerBtnText: {
    color: '#009245',
    fontSize: 12,
    fontWeight: '400',
  },
  registerBtn: {
    marginStart: 7,
  },
  registerText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  registerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 29,
  },
  imgFacebook: {
    width: 32,
    height: 32,
  },
  imgGoogle: {
    width: 32,
    height: 32,
  },
  btnFacebook: {
    marginStart: 15,
    width: 32,
    height: 32,
  },
  btnGoogle: {
    marginEnd: 15,
    width: 32,
    height: 32,
  },
  loginOtherContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  ortherLine: {
    backgroundColor: 'green',
    flexGrow: 1,
    height: 1,
  },
  ortherContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  forgotPasswordText: {
    color: '#007537',
    fontSize: 11,
    fontWeight: '500',
  },
  forgotPassword: {},
  rememberMeText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#949090',
    marginStart: 5,
  },
  icRemember: {
    width: 22,
    height: 22,
  },
  rememnerMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 22,
    paddingHorizontal: 30,
    marginTop: 13,
  },
  inputView: {
    borderWidth: 1,
    width: '100%',
    height: 46,
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    paddingHorizontal: 30,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    fontFamily: 'Poppins',
  },
  wellcomeText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Poppins',
  },
  wellcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  imgHeader: {
    width: useWindowDimensions.width,
    height: 360,
  },
  imgHeaderContainer: {
    width: '100%',
    height: 'auto',
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  inputError:{
    borderWidth: 1,
    width: '100%',
    height: 46,
    borderColor: 'red',
    marginTop:20,
  },
  inputNormal:{
    borderWidth: 1,
    width: '100%',
    height: 46,
    marginTop:20}
  ,
  errorText:{
   color:'red',
  }
});
