import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputView from '../../multiComponent/InputView';
import ButtonBig from '../../multiComponent/ButtonBig';
import AxiosInstance from '../../api/AxiosInstance';
import styles from './styles';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const changeFullNameTitle = data => {
    setFullName(data);
    setFullNameError('');
  };

  const changeEmailTitle = data => {
    setEmail(data);
    setEmailError('');
  };

  const changePasswContent = data => {
    setPassword(data);
    setPasswordError('');
  };

  const changePhoneNumberContent = data => {
    setPhoneNumber(data);
    setPhoneNumberError('');
  };

  const addData = () => {
    let isValid = true;
    if (fullName.trim() === '') {
      setFullNameError('Vui lòng nhập họ tên');
      isValid = false;
    }
    if (email.trim() === '') {
      setEmailError('Vui lòng nhập email');
      isValid = false;
    }
    if (password.trim() === '') {
      setPasswordError('Vui lòng nhập mật khẩu');
      isValid = false;
    }
    if (phoneNumber.trim() === '') {
      setPhoneNumberError('Vui lòng nhập số điện thoại');
      isValid = false;
    }
    return isValid;
  };

  const handleRegister = async () => {
    try {
      if (addData()) {
        console.log('Dữ liệu hợp lệ, tiến hành gửi yêu cầu đăng ký');
        const axiosInstance = AxiosInstance();
        const res = await axiosInstance.post('/register', {
          fullName: fullName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        });
  
        console.log( res.data);
  
        if (res && res.success === 'Đăng ký thành công!') {
          console.log('Đăng ký thành công');
          Alert.alert('Đăng ký thành công');
          navigation.navigate('Login');
        } else {
          console.log('Đăng ký thất bại');
          Alert.alert('Đăng ký thất bại');
        }
      } else {
        console.log('Dữ liệu không hợp lệ, không thể đăng ký');
      }
    } catch (err) {
      console.log('Lỗi khi đăng ký:', err);
      Alert.alert('Đăng ký thất bại');
    }
  };
  

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          source={require('../../../../assets/images/background_register.png')}
          style={styles.imgHeader}
        />
        <Text style={styles.txtHeader}>Đăng ký</Text>
        <Text style={styles.txtHeader1}>Tạo tài khoản</Text>
        <View style={styles.inputContainer}>
          <InputView
            placeholder="Họ tên"
            value={fullName}
            onTextChange={changeFullNameTitle}
            style={!!fullNameError ? styles.inputError : styles.inputNormal}
            onChangeText={data => changeFullNameTitle(data)}
          />
          {!!fullNameError && (
            <Text style={styles.errorText}>{fullNameError}</Text>
          )}
          <InputView
            placeholder="E-mail"
            value={email}
            onTextChange={changeEmailTitle}
            style={!!emailError ? styles.inputError : styles.inputNormal}
            onChangeText={data => changeEmailTitle(data)}
          />
          {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}
          <InputView
            placeholder="Số điện thoại"
            value={phoneNumber}
            onTextChange={changePhoneNumberContent}
            style={!!phoneNumberError ? styles.inputError : styles.inputNormal}
            onChangeText={data => changePhoneNumberContent(data)}
          />
          {!!phoneNumberError && (
            <Text style={styles.errorText}>{phoneNumberError}</Text>
          )}
          <InputView
            placeholder="Mật khẩu"
            value={password}
            onTextChange={changePasswContent}
            hidePassword={true}
            style={!!passwordError ? styles.inputError : styles.inputNormal}
            onChangeText={data => changePasswContent(data)}
          />
          {!!passwordError && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
        </View>
        <View style={styles.TermsConditions}>
          <Text style={styles.txtTermsConditions}>
            Để đăng ký tài khoản, bạn đồng ý{' '}
            <Text style={styles.txtTermsConditionsText}>
              Terms & Conditions
            </Text>
            <Text style={styles.txtTermsConditions}>{'\nand '}</Text>
            <Text style={styles.txtTermsConditionsText}>Privacy Policy</Text>
          </Text>
        </View>
        <ButtonBig
          style={styles.buttonRegister}
          title="Đăng ký"
          onPress={handleRegister}
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
          <Text style={styles.registerText}>Đã có tài khoản</Text>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerBtnText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
