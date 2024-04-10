import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {addItemPayment, clearCart} from '../../../api/reducers/CartSlice';
import CustomHeader from '../../../multiComponent/CostomHeader';
import CheckBox from '@react-native-community/checkbox';
import {layIdproduct} from '../../../api/reducers/ProductIdSlice';
import AxiosInstance from '../../../api/helpers/AxiosInstance';

const Payment = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);
  const user = useSelector(state => state.cart.user);

  const [productIdData, setProductIdData] = useState({});
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [giaohangnhanh, setGiaohangnhanh] = useState(false);
  const [GiaohangCOD, setGiaohangCOD] = useState(false);
  const [thanhtoanthe, setThanhtoanthe] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (cartItems && cartItems.length > 0) {
        const productDetails = {};

        for (const item of cartItems) {
          const productId = item._id;

          try {
            const response = await dispatch(layIdproduct(productId));

            if (response.payload) {
              productDetails[productId] = response.payload;
            }
          } catch (error) {
            console.error(
              `Error fetching product data for productId: ${productId}`,
              error,
            );
          }
        }

        setProductIdData(productDetails);
      }
    };

    fetchProductDetails();
  }, [dispatch, cartItems]);

  const calculateTotalAmount = () => {
    let totalAmount = 0;

    for (const item of cartItems) {
      const product = productIdData[item._id];
      if (product) {
        totalAmount += product.price * item.quantity;
      }
    }

    return totalAmount;
  };

  const handleAddressChange = text => {
    setAddress(text);
  };

  const handlePhoneNumberChange = text => {
    setPhoneNumber(text);
  };

  const handlePayment = async () => {
    if (!address || !phoneNumber) {
      ToastAndroid.show('Vui lòng nhập đầy đủ thông tin', ToastAndroid.SHORT);
      return;
    }
    const shippingFee = giaohangnhanh ? 15000 : 30000;
    const totalAmount = calculateTotalAmount() + shippingFee;

    const orderData = {
      userId: user,
      products: cartItems.map(item => ({
        productId: item.productId,
        qty: item.quantity,
      })),
      status: 'Pending',
    };

    try {
      const axiosInstance = AxiosInstance();
      const response = await axiosInstance.post('/bills', orderData);
      console.log('Saved order:', response);
      dispatch(addItemPayment(orderData));
      dispatch(clearCart());
      ToastAndroid.show('Thanh toán thành công', ToastAndroid.SHORT);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error processing payment:', error);
      ToastAndroid.show('Thanh toán thất bại', ToastAndroid.SHORT);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
        title={'THANH TOÁN'}
      />
      <View style={styles.containerinformation}>
        <Text style={styles.textinformationname}>Nguyễn Minh Nhựt</Text>
        <Text style={styles.textinformationname}>
          nhutchodiennguyen2306@gmail.com
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Địa chỉ"
          value={address}
          onChangeText={handleAddressChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>
      <View style={styles.containerinformation}>
        <Text style={styles.textinformation}>Phương thức vận chuyển</Text>
        <View style={styles.contenshippingmethod}>
          <Text style={styles.textinformationname}>
            Giao hàng nhanh - 15000đ
          </Text>
          <CheckBox
            disabled={false}
            value={giaohangnhanh}
            onValueChange={newValue => setGiaohangnhanh(newValue)}
          />
        </View>
        <View style={styles.contenshippingmethod}>
          <Text style={styles.textinformationname}>
            Giao hàng thường - 30000đ
          </Text>
          <CheckBox
            disabled={false}
            value={GiaohangCOD}
            onValueChange={newValue => setGiaohangCOD(newValue)}
          />
        </View>
      </View>
      <View style={styles.containerinformation}>
        <Text style={styles.textinformation}>Hình thức thanh toán</Text>
        <View style={styles.contenshippingmethod}>
          <Text style={styles.textinformationname}>Thẻ VISA/MASTERCARD</Text>
          <CheckBox
            disabled={false}
            value={thanhtoanthe}
            onValueChange={newValue => setThanhtoanthe(newValue)}
          />
        </View>
      </View>
      <View style={styles.containerthanhtoan}>
        <View style={styles.contentthanhtoan}>
          <Text style={styles.texttamtinh}>Tạm tính</Text>
          <Text style={styles.texttamtinh}>{calculateTotalAmount()}</Text>
        </View>
        <View style={styles.contentthanhtoan}>
          <Text style={styles.texttamtinh}>Phí vận chuyển</Text>
          <Text style={styles.texttamtinh}>
            {giaohangnhanh ? '15.000đ' : '30.000đ'}
          </Text>
        </View>
        <View style={styles.contentthanhtoan}>
          <Text style={styles.texttamtinh}>Tổng cộng</Text>
          <Text style={styles.texttamtinh}>
            {calculateTotalAmount() + (giaohangnhanh ? 15000 : 30000)}đ
          </Text>
        </View>
        <View style={styles.contaibuttonchonmua}>
          <TouchableOpacity
            style={styles.buttonchonmua}
            onPress={handlePayment}>
            <Text style={styles.textchonmua}>Thanh Toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
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

export default Payment;
