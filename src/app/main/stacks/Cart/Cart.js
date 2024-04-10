import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {layIdproduct} from '../../../api/reducers/ProductIdSlice';
import {ToastAndroid} from 'react-native';

import {
  changeQuantity,
  addItemPayment,
  removeItemFromCart,
} from './../../../api/reducers/CartSlice';

const Cart = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItemsId = useSelector(state => state.cart);
  const [productIdData, setProductIdData] = useState({});
  const [checkboxStates, setCheckboxStates] = useState({});
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isCheckoutModalVisible, setIsCheckoutModalVisible] = useState(false);
  const [total, setTotal] = useState(0);
  console.log('cartItems', cartItemsId);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const details = {};

      for (const item of cartItemsId.cart) {
        const productId = item._id;
        const response = await dispatch(layIdproduct(productId));
        if (response.payload) {
          details[productId] = response.payload;
        }
      }

      setProductIdData(details);

      const initialCheckboxStates = {};
      for (const item of cartItemsId.cart) {
        initialCheckboxStates[item._id] = false;
      }
      setCheckboxStates(initialCheckboxStates);
    };

    if (cartItemsId.cart.length > 0) {
      fetchProductDetails();
    }
  }, [dispatch, cartItemsId]);

  useEffect(() => {
    let tempTotal = 0;
    if (Object.keys(productIdData).length > 0) {
      for (const item of cartItemsId.cart) {
        if (checkboxStates[item._id]) {
          const productData = productIdData[item._id] || {};
          const itemTotal = item.quantity * productData.price;
          tempTotal += itemTotal;
        }
      }
      setTotal(tempTotal);
    }
  }, [checkboxStates, cartItemsId.cart, productIdData]);
  
  const handleLeftIconPress = () => {
    navigation.goBack();
  };

  const handleCheckbox = productId => {
    const updatedCheckboxStates = {
      ...checkboxStates,
      [productId]: !checkboxStates[productId],
    };
    setCheckboxStates(updatedCheckboxStates);
  };
  const {cart, user} = useSelector(state => state.cart);
  console.log('cart', cart);
  console.log('user', user);
  
  const checkoutCart = () => {
    if (cartItemsId.cart.length > 0) {
      const products = cartItemsId.cart.map(item => ({
        _id: item._id,
        quantity: item.quantity,
      }));
  
      const body = {
        user: user, // Sử dụng user từ state
        products: products,
      };
  
      dispatch(addItemPayment(body));
      ToastAndroid.show('chuyển đế thanh tóan ', ToastAndroid.SHORT);
      navigation.navigate('Payment');
    } else {
      ToastAndroid.show('Chưa có sản phẩm!', ToastAndroid.SHORT);
    }
  };
  

  console.log('checkout', checkoutCart);

  const handleCheckout = () => {
    if (cartItemsId.cart.length <= 0) {
      ToastAndroid.show('Chưa có sản phẩm để thanh toán!', ToastAndroid.SHORT);
      return;
    }
    setIsCheckoutModalVisible(true);
  };

  const renderItemCart = ({item}) => {
    const increaseQuantity = () => {
      const newQuantity = item.quantity + 1;
      dispatch(changeQuantity({productId: item._id, newQuantity}));
    };

    const decreaseQuantity = () => {
      const newQuantity = item.quantity - 1;
      if (newQuantity === 0) {
        dispatch(removeItemFromCart(item._id));
      } else {
        dispatch(changeQuantity({productId: item._id, newQuantity}));
      }
    };

    const productData = productIdData[item._id] || {};
    const isChecked = checkboxStates[item._id] || false;
    const price = productData.price || 0;
    const itemTotal = item.quantity * price;
    const firstImage =
      productData?.image && productData.image.length > 0
        ? productData.image[0]
        : null;
    return (
      <View>
        <View style={styles.itemContainer}>
          <Modal
            visible={isCheckoutModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setIsCheckoutModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  Bạn có chắc chắn muốn thanh toán không?
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={checkoutCart}>
                    <Text style={styles.modalButton}>Xác nhận</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setIsCheckoutModalVisible(false)}>
                    <Text style={styles.modalButton}>Hủy bỏ</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={() => handleCheckbox(item._id)}>
            <Image
              style={styles.checkbox}
              source={
                isChecked
                  ? require('../../../../../assets/icons/checkdachon.png')
                  : require('../../../../../assets/icons/checkchuachon.png')
              }
            />
          </TouchableOpacity>

          <Image style={styles.image} source={{uri: firstImage}} />
          <View>
            <Text style={styles.name} numberOfLines={1}>
              {productData.name}
            </Text>
            <Text style={styles.price}>{itemTotal}đ</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={decreaseQuantity}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={increaseQuantity}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
        title={'Thanh toán'}
        rightIcon={require('../../../../../assets/icons/trash.png')}
        onPressLeftIcon={handleLeftIconPress}
      />
      <FlatList
        data={cartItemsId.cart}
        renderItem={renderItemCart}
        keyExtractor={item => item._id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Chưa có sản phẩm được chọn</Text>
          </View>
        }
      />
      {total > 0 && (
        <View style={{paddingBottom: 20, paddingHorizontal: 25}}>
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 15,
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#7D7B7B', fontSize: 14}}>Tạm tính</Text>
            <Text style={{fontSize: 16}}>{total}đ</Text>
          </View>
          <View
            style={{
              backgroundColor: '#007537',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 5,
            }}>
            <TouchableOpacity onPress={handleCheckout}>
              <Text style={{fontWeight: '500', fontSize: 18, color: 'white'}}>
                Tiến hành thanh toán
              </Text>
            </TouchableOpacity>
            <Image
              source={require('../../../../../assets/icons/right-arrow.png')}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingTop: 10,
    height: 107,
  },
  checkbox: {
    marginVertical: 35,
    marginRight: 28,
    width: 20,
    height: 20,
  },
  image: {
    width: 77,
    height: 77,
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    marginRight: 15,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    width: 150,
  },
  price: {
    color: '#007537',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 13,
  },
  quantityButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  quantity: {
    color: 'black',
    marginHorizontal: 18,
  },
  total: {
    color: '#555',
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 150,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  modalContainer: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // màu nền mờ
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    marginHorizontal: 10,
    fontSize: 15,
    color: '#007BFF', // màu của các nút
    marginVertical: 10,
  },
});

export default Cart;
