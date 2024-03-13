import {StyleSheet} from 'react-native';

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
    marginTop: 30,
    marginBottom: 40,
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
    paddingHorizontal: 31,
    marginTop: 21,
  },
  buttonRegister: {
    paddingHorizontal: 31,
    marginTop: 20,
  },
  txtTermsConditionsText: {
    fontSize: 12,
    color: '#009245',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  txtTermsConditionsBtn: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    top: 0,
  },
  txtTermsConditions: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    flexDirection: 'row',
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  TermsConditions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    marginTop: 12,
    paddingHorizontal: 31,
  },
  txtHeader1: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    marginTop: 13,
  },
  txtHeader: {
    color: 'black',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Poppins',
    marginTop: -20,
  },
  imgHeader: {
    width: '100%',
    height: 230,
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
