import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputView from '../../multiComponent/InputView';
import ButtonBig from '../../multiComponent/ButtonBig';
import styles from './styles';

const Register = props => {
  const {navigation} = props;
  // normal
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // error
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [fullnameror, setFullname] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [passworderror, setPasswordError] = useState('');


  const changeFullNameTitle = data => {
    setFullName(data);
    setFullname('');
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
    if (fullName == '') {
      setFullname('Vui lòng nhập họ tên');
    } else {
      setFullname('');
    }
    if (email == '') {
      setEmailError('Vui lòng nhập tên đăng nhập');
    } else {
      setEmailError('');
    }
    if (password == '') {
      setPasswordError('Vui lòng nhập mật khẩu');
    } else {
      setPasswordError('');
    }
    if (phoneNumber == '') {
      setPhoneNumberError('Vui lòng nhập số điện thoại');
    } else {
      setPhoneNumberError('');
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
            style={!!fullnameror ? styles.inputError : styles.inputNormal}
            onChangeText={data => changeFullNameTitle(data)}
          />
          {!!fullnameror && <Text style={styles.errorText}>{fullnameror}</Text>}
          <InputView
            placeholder="E-mail"
            value={email}
            onTextChange={changeEmailTitle}
            style={!!emailerror ? styles.inputError : styles.inputNormal}
            onChangeText={data => changeEmailTitle(data)}
          />
          {!!emailerror && <Text style={styles.errorText}>{emailerror}</Text>}
          <InputView
            placeholder="Số điện thoại"
            value={phoneNumber}
            onTextChange={changePhoneNumberContent}
            style={!!phoneNumberError ? styles.inputError : styles.inputNormal}
            onChangeText={data => changePhoneNumberContent(data)}
          />
          {!!phoneNumberError && <Text style={styles.errorText}>{phoneNumberError}</Text>}
          <InputView
            placeholder="Mật khẩu"
            value={password}
            onTextChange={changePasswContent}
           
            hidePassword={true} 
            style={!!passworderror ? styles.inputError : styles.inputNormal}
            onChangeText={data => changePasswContent(data)}
          />
          {!!passworderror && <Text style={styles.errorText}>{passworderror}</Text>}
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
          onPress={(addData) }
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
