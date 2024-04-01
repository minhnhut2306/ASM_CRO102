import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {useNavigation} from '@react-navigation/native';
const Profile = ({route}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader title={'PROFILE'} />
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../../../../assets/images/nhut.png')}
        />
        <View style={styles.colum}>
          <Text style={styles.textView}>Nguyễn Minh Nhựt</Text>
          <Text style={styles.email}>nhut123@gmail.com</Text>
        </View>
      </View>
      <View style={styles.touch}>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.textTouch}>Chung</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => navigation.navigate('EditInformation')}>
          <Text style={styles.textTouch1}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.text}>
          <Text style={styles.textTouch1}>Cẩm nang cây trồng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => navigation.navigate('Notification')}>
          <Text style={styles.textTouch1}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => navigation.navigate('Question')}>
          <Text style={styles.textTouch1}>Q&A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.textTouch}>Bảo Mật Và Điều Khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.text}>
          <Text style={styles.textTouch1}>Điều Khoản Và Điều Kiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.text}>
          <Text style={styles.textTouch1}>Chính Sách Quyền Riêng Tư</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.text}>
          <Text style={[styles.textTouch1, {color: 'red'}]}>Đăng Xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 24,
    gap: 26,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 55,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colum: {
    flexDirection: 'column',
  },
  textView: {
    color: 'black',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  email: {
    color: '#7F7F7F',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
  },

  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#221F1F',
    left: 30,
    right: 0,
    width: '80%',
    height: 50,
  },
  touch: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    paddingVertical: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textTouch: {
    top: 28,
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#7F7F7F',
  },
  text: {
    left: 30,
    right: 0,
    fontSize: 16,
    height: 50,
  },
  textTouch1: {
    color: '#221F1F',
    top: 28,
    fontSize: 16,
  },
});
