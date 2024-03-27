import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../../main/AppContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputView from '../../multiComponent/InputView';
import ButtonBig from '../../multiComponent/ButtonBig';
import AxiosInstance from '../../api/AxiosInstance';
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
    let isValid = true;
    if (email.trim() === '') {
      setEmailError('Vui lòng nhập email');
      isValid = false;
    }
    if (password.trim() === '') {
      setPasswordError('Vui lòng nhập mật khẩu');
      isValid = false;
    }
    return isValid;
  };
  console.log(addData)

  const handleLogin = () => {
    console.log('Bắt đầu quá trình đăng nhập');
    if (addData()) {
      console.log('Dữ liệu hợp lệ, tiến hành gửi yêu cầu đăng nhập');

      const axiosInstance = AxiosInstance();
      axiosInstance
        .post('/login', {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log('Nhận kết quả từ API:', res);

          if (res && res.success === 'Đăng nhập thành công') { 
            console.log('Đăng nhập thành công');
            Alert.alert('Đăng nhập thành công');
            navigation.navigate('MainStackNavigation');
          } else {
            console.log('Đăng nhập thất bại');
            Alert.alert('Đăng nhập thất bại');
          }
        })
        .catch((err) => {
          console.log('Lỗi khi gửi yêu cầu đăng ký:', err);
          Alert.alert('Đăng ký thất bại');
        });
    } else {
      console.log('Dữ liệu không hợp lệ, không thể gửi yêu cầu đăng ký');
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
          onPress={handleLogin}
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
