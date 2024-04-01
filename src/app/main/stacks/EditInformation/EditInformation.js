import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {useNavigation} from '@react-navigation/native';

const EditInformation = ({route}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
        title={'Chỉnh Sửa Thông Tin'}
      />
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          source={require('../../../../../assets/images/nhut.png')}
        />
      </View>
      <View style={styles.containerinformation}>
        <View style={styles.contentinformation}>
          <Text style={styles.textItem}>
            Thông tin sẽ được lưu cho lần mua kế tiếp. {'\n'}
            Bấm vào thông tin chi tiết để chỉnh sửa.
          </Text>
        </View>
        <View style={styles.contentinformation}>
          <Text style={styles.textinformationname}>Nguyễn Minh Nhựt</Text>
          <View style={styles.linename} />
        </View>
        <View style={styles.contentinformation}>
          <Text style={styles.textinformationname}>nhut123@gmail.com</Text>
          <View style={styles.linename} />
        </View>
        <View style={styles.contentinformation}>
          <TextInput style={[styles.input, {}]} placeholder="Địa chỉ" />
        </View>
        <View style={styles.contentinformation}>
          <TextInput style={[styles.input, {}]} placeholder="Số điện thoại" />
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          width: '100%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={styles.contaibuttonchonmua}>
          <TouchableOpacity style={styles.buttonchonmua} onPress={() => navigation.navigate('MainTabNavigation') }>
            <Text style={styles.textchonmua}>Lưu Thông Tin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditInformation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  viewImage: {
    width: '100%',
    height: 100,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  containerinformation: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 48,
    paddingVertical: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 45,
  },
  contentinformation: {
    display: 'flex',
    gap: 11,
    alignSelf: 'stretch',
  },
  textinformation: {
    fontFamily: 'Lato',
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
  textinformationname: {
    fontFamily: 'Lato',
    color: '#7d7b7d',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  linename: {
    width: '100%',
    height: 1,
    backgroundColor: '#ABABAB',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    color: '#ABABAB',
    borderColor: '#ABABAB',
  },
  textItem: {
    fontFamily: 'Lato',
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    marginBottom: 25,
  },
  contaibuttonchonmua: {
    width: '85%',
    display: 'flex',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABABAB',
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  buttonchonmua: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#ABABAB',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textchonmua: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: 'white',
    lineHeight: 22,
    textTransform: 'uppercase',
  },
});
