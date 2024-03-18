import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../../main/AppContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputView from '../../multiComponent/InputView';
import ButtonBig from '../../multiComponent/ButtonBig';
import styles from './styles';

const Login = props => {
  const {navigation} = props;
  const {isLogin, setIsLogin} = useContext(AppContext);
  const [rememnerMe, setRememberMe] = useState(false);
  const changeRemember = () => {
    setRememberMe(!rememnerMe);
  };
  // normal
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // error
  const [emailerror, setEmailError] = useState('');
  const [passworderror, setPasswordError] = useState('');

  const changeEmailTitle = data => {
    setEmail(data);
    setEmailError('');
  };

  const changePasswContent = data => {
    setPassword(data);
    setPasswordError('');
  };
  const addData = () => {
    if (email == '') {
      setEmailError('Vui lòng nhập tên đăng nhập');
    } else {
      setEmailError('');
    }
    if (password == '') {
      setPasswordError('Vui lòng nhập mật khẩu');
    } else {
      setPasswordError('');
      navigation.navigate('MainStackNavigation');
    }
   
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.imgHeaderContainer}>
          <Image
            source={require('../../../../assets/images/background_login.png')}
            style={styles.imgHeader}
          />
        </View>
        <View style={styles.wellcomeContainer}>
          <Text style={styles.wellcomeText}>Chào mừng bạn</Text>
          <Text style={styles.loginText}>Đăng nhập tài khoản</Text>
        </View>
        <View style={styles.inputContainer}>
          <InputView
            onTextChange={changeEmailTitle}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="black"
            style={!!emailerror ? styles.inputError : styles.inputNormal}
            onChangeText={data => changeEmailTitle(data)}
          />
          {!!emailerror && <Text style={styles.errorText}>{emailerror}</Text>}
          <InputView
            onTextChange={changePasswContent}
            value={password}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor="black"
            hidePassword={true}
            style={!!passworderror ? styles.inputError : styles.inputNormal}
            onChangeText={data => changePasswContent(data)}
          />
          {!!passworderror && (
            <Text style={styles.errorText}>{passworderror}</Text>
          )}
        </View>
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.rememnerMe} onPress={changeRemember}>
            <Image
              source={
                rememnerMe
                  ? require('../../../../assets/icons/isRemember.png')
                  : require('../../../../assets/icons/notRemember.png')
              }
              style={styles.icRemember}
            />
            <Text
              style={[styles.rememberMeText, rememnerMe && {color: '#007537'}]}>
              Nhớ tài khoản
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <ButtonBig
          style={{paddingHorizontal: 30, marginTop: 25}}
          title="Đăng nhập"
          onPress={addData}
        />

        <View style={styles.ortherContainer}>
          <View style={styles.ortherLine} />
          <Text style={{fontSize: 12, color: 'black', marginHorizontal: 10}}>
            Hoặc
          </Text>
          <View style={styles.ortherLine} />
        </View>

        <View style={styles.loginOtherContainer}>
          <TouchableOpacity style={styles.btnGoogle}>
            <Image
              source={require('../../../../assets/icons/google.png')}
              style={styles.imgGoogle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFacebook}>
            <Image
              source={require('../../../../assets/icons/facebook.png')}
              style={styles.imgFacebook}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerBtnText}>Tạo tài khoản</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
