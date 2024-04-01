import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../multiComponent/CostomHeader';
import CheckBox from '@react-native-community/checkbox';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';

const Payment = ({route}) => {
  const navigation = useNavigation();
  const [GiaohangCOD, setGiaohangCOD] = useState(false);
  const [giaohangnhanh, setgiaohangnhanh] = useState(false);
  const [thanhtoanthe, setthanhtoanthe] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(null);
  // const data = [
  //   {label: 'Thanh toán bằng tiền mặt', value: 'item1'},
  //   {label: 'Thanh toán bằng Thẻ VISA/MASTERCARD', value: 'item2'},
  //   {label: 'Thanh toán bằng momo', value: 'item3'},
  // ];
  // const dropdownStyle = {
  //   color: 'black',
  // };
  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
        title={'THANH TOÁN'}
      />
      <View style={styles.containerinformation}>
        <View style={styles.contentinformation}>
          <Text style={styles.textinformation}>Thông tin khách hàng</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.contentinformation}>
          <Text style={styles.textinformationname}>Nguyễn Minh Nhựt</Text>
          <View style={styles.linename} />
        </View>
        <View style={styles.contentinformation}>
          <Text style={styles.textinformationname}>
            nhutchodiennguyen2306@gmail.com
          </Text>
          <View style={styles.linename} />
        </View>
        <View style={styles.contentinformation}>
          <TextInput style={[styles.input, {}]} placeholder="Địa chỉ" />
        </View>
        <View style={styles.contentinformation}>
          <TextInput style={[styles.input, {}]} placeholder="Số điện thoại" />
        </View>
      </View>
      <View style={styles.containerinformation}>
        <View style={styles.contentinformation}>
          <Text style={styles.textinformation}>Phương thức vận chuyển</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.contentinformation}>
          <View style={styles.contenshippingmethod}>
            <View>
              <Text style={[{...styles.textinformationname, color: '#007537'}]}>
                Giao hàng nhanh - 15000đ
              </Text>
              <Text style={styles.textinformationname}>
                Dự kiến nhận hàng 5-7/4
              </Text>
            </View>
            <CheckBox
              style={styles.checkbox}
              disabled={false}
              value={giaohangnhanh}
              tintColors={{true: '#007537', false: 'transparent'}}
              onValueChange={newValue => setgiaohangnhanh(newValue)}
            />
          </View>
          <View style={styles.linename} />
        </View>
        <View style={styles.contentinformation}>
          <View style={styles.contenshippingmethod}>
            <View>
              <Text style={[{...styles.textinformationname, color: '#221F1F'}]}>
                Giao hàng nhanh - 15000đ
              </Text>
              <Text style={styles.textinformationname}>
                Dự kiến nhận hàng 4-8/4{' '}
              </Text>
            </View>
            <CheckBox
              style={styles.checkbox}
              disabled={false}
              value={GiaohangCOD}
              tintColors={{true: '#007537', false: 'transparent'}}
              onValueChange={newValue => setGiaohangCOD(newValue)}
            />
          </View>
          <View style={styles.linename} />
        </View>
      </View>
      <View style={styles.containerinformation}>
        <View style={styles.contentinformation}>
          <Text style={styles.textinformation}>
            Hình thức thanh toán thanh toán
          </Text>
          <View style={styles.line} />
        </View>
        {/* <Text style={styles.Textdropdown}>Selected Item: {selectedItem}</Text>
        <Dropdown
          style={[styles.dropdown, dropdownStyle]}
          data={data}
          placeholder="Phương thức thanh toán"
          onChange={(index, value) => setSelectedItem(value)}
          textColor={'black'}
        /> */}
        <View style={styles.contenshippingmethod}>
          <View>
            <Text style={[styles.textinformationname, {color: '#007537'}]}>
              Thẻ VISA/MASTERCARD
            </Text>
          </View>
          <CheckBox
            style={styles.checkbox}
            disabled={false}
            value={thanhtoanthe}
            tintColors={{true: '#007537', false: 'transparent'}}
            onValueChange={newValue => setthanhtoanthe(newValue)}
          />
        </View>
      </View>
      <View style={styles.containerthanhtoan}>
        <View style={styles.contentthanhtoan}>
          <Text style={styles.texttamtinh}>Tạm tính</Text>
          <Text style={styles.texttamtinh}>500.000đ</Text>
        </View>
        <View style={styles.contentthanhtoan}>
          <Text style={styles.texttamtinh}>Phí vận chuyển</Text>
          <Text style={styles.texttamtinh}>15.000đ</Text>
        </View>
        <View style={styles.contentthanhtoan}>
          <Text style={styles.texttamtinh}>Tổng cộng</Text>
          <Text style={styles.texttamtinh}>515.000đ</Text>
        </View>
        <View style={styles.contaibuttonchonmua}>
          <TouchableOpacity
            style={styles.buttonchonmua}
            onPress={() => navigation.navigate("MainTabNavigation")}>
            <Text style={styles.textchonmua}>Thanh Toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
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
  },
  containerinformation2: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 48,
    paddingVertical: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
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
  contenshippingmethod: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    color: '#ABABAB',
    borderColor: '#ABABAB',
  },
  dropdown: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    color: 'black',
  },
  Textdropdown: {
    fontFamily: 'Lato',
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  containerthanhtoan: {
    display: 'flex',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 24,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  contentthanhtoan: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  texttamtinh: {
    fontFamily: 'Lato',
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 22,
    opacity: 0.6,
  },
  contaibuttonchonmua: {
    marginTop: 10,
    width: '100%',
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
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: 'white',
    lineHeight: 22,
    textTransform: 'uppercase',
  },
});
