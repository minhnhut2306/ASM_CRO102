import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../../../multiComponent/CostomHeader';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { layIdproduct } from '../../../api/reducers/ProductIdSlice';
import { changeQuantity } from '../../../api/reducers/CartSlice'; // Import changeQuantity action

const Cart = ({ route }) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const [temporaryTotal, setTemporaryTotal] = useState(0);
  const cartItems = useSelector(state => state.cart);
  console.log('cartItems', cartItems);
  const { productIdData, productIdStatus, error } = useSelector(state => state.idproduct);
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    if (Array.isArray(cartItems)) { // Kiểm tra nếu cartItems là một mảng
      let totalQuantity = 0;
      cartItems.forEach(item => {
        totalQuantity += item.quantity;
      });
      setQuantity(totalQuantity);
    }
  }, [cartItems]);
  
  
  console.log("producData", productIdData);
  console.log("quantityData", quantity)
  

  const initialPrice = productIdData?.money || 0;

  const handleLeftIconPress = () => {
    navigation.goBack();
  };

  const updateTemporaryTotal = newQuantity => {
    setTemporaryTotal(initialPrice * newQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateTemporaryTotal(newQuantity);
      dispatch(changeQuantity({ productId: productIdData._id, newQuantity: newQuantity })); 
    }
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateTemporaryTotal(newQuantity);
    dispatch(changeQuantity({ productId: productIdData._id, newQuantity: newQuantity }));
  };

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const firstImage = productIdData?.image && productIdData.image.length > 0 ? productIdData.image[0] : null;

  const renderItemCart = ({ item }) => (
    <View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 25, paddingTop: 10, height: 107 }}>
        <TouchableOpacity onPress={handleCheckbox}>
          <Image
            style={{ marginVertical: 35, marginRight: 28 }}
            source={CheckBox === false ? require('../../../../../assets/icons/checkchuachon.png') : require('../../../../../assets/icons/checkdachon.png')}
          />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: `${firstImage}` }} />
        <View>
          <Text style={{ fontWeight: '500', fontSize: 16 }} numberOfLines={1}>{item.name}</Text>
          <Text style={{ color: '#007537', fontSize: 16, fontWeight: '500' }}>{item.price}đ</Text>
          <View style={{ flexDirection: 'row', marginTop: 13 }}>
            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 5, alignItems: 'center' }} onPress={handleDecreaseQuantity}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 18, color: 'black' }}>{item.quantity}</Text>
            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 5, alignItems: 'center' }} onPress={handleIncreaseQuantity}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
        title={productIdData?.name || ''}
        rightIcon={require('../../../../../assets/icons/trash.png')}
        onPressLeftIcon={handleLeftIconPress}
      />
      {productIdData ? (
        <FlatList
          data={[productIdData]}
          renderItem={renderItemCart}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.container2}>
          <Text style={styles.textthongbao}>Chưa có sản phẩm được chọn</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textthongbao: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 150,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  image: {
    width: 77,
    height: 77,
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    marginRight: 15,
  },
});
