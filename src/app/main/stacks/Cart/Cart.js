import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../multiComponent/CostomHeader';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
const Cart = ({route}) => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {name, image, type, mony, size, origin, status, product} =
    route.params || {};
  const [quantity, setQuantity] = useState(0);
  const initialPrice = mony;
  const [temporaryTotal, setTemporaryTotal] = useState(initialPrice);

  const handleLeftIconPress = () => {
    navigation.goBack();
  };
  const updateTemporaryTotal = newQuantity => {
    setTemporaryTotal(initialPrice * newQuantity);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateTemporaryTotal(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    updateTemporaryTotal(quantity + 1);
  };
  return (
    <View style={styles.container}>
      {name && image  && mony && size && origin && status && product ? (
        <CustomHeader
          leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
          title={name}
          rightIcon={require('../../../../../assets/icons/trash.png')}
          onPressLeftIcon={handleLeftIconPress}
        />
      ) : (
        <CustomHeader
          leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
          onPressLeftIcon={handleLeftIconPress}
        />
      )}
      {name && image && mony && size && origin && status && product ? (
        <View style={styles.contaisanpham}>
          <View style={styles.contentsp}>
            <CheckBox
              style={styles.checkbox}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Image style={styles.imagesp} source={image} />
            <View style={styles.contaitextsp}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <Text style={styles.textnametree}>{name}</Text>
                <Text style={{color: 'black'}}> | </Text>
                <Text style={styles.textprice}>{type}</Text>
              </View>
              <Text style={styles.price}>{temporaryTotal}</Text>
              <View style={styles.contaisquare}>
                <TouchableOpacity
                  style={styles.buttonsquare1}
                  onPress={handleDecreaseQuantity}>
                  <Image
                    source={require('../../../../../assets/icons/minus-square.png')}
                    style={styles.iconsquare1}
                  />
                </TouchableOpacity>
                <View style={styles.contaitextsquare}>
                  <Text style={styles.textsquare}>{quantity}</Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonsquare1}
                  onPress={handleIncreaseQuantity}>
                  <Image
                    source={require('../../../../../assets/icons/plus-square.png')}
                    style={styles.iconsquare}
                  />
                </TouchableOpacity>
                <Text style={styles.delete}>Xóa</Text>
              </View>
            </View>
          </View>
        </View>
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
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  container2: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textthongbao:{
    fontSize: 20,
    color: '#000000',
    marginBottom:150,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  contaisanpham: {
    width: '100%',
    height: 107,
  },
  contentsp: {
    width: '100%',
    height: 107,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    paddingVertical: 44,
    paddingHorizontal: 24,
    width: 20,
    marginLeft: 20,
    height: 20,
  },
  imagesp: {
    width: 77,
    height: 77,
    borderRadius: 8,
  },
  contaitextsp: {
    width: 199,
    height: 62,
    flexDirection: 'column',
    flexShrink: 0,
  },
  contaisquare: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 13,
  },
  iconsquare: {
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  contaitextsquare: {
    display: 'flex',
    width: 8,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textsquare: {
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
    textAlign: 'center',
  },
  textnametree: {
    lineHeight: 20,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
    textAlign: 'center',
  },
  textprice: {
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#7D7B7B',
    textAlign: 'center',
  },
  price: {
    lineHeight: 22,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#007537',
    marginTop: 5,
  },
  iconsquare: {
    width: 25,
    height: 25,
    flexShrink: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  iconsquare1: {
    width: 25,
    height: 25,
    flexShrink: 0,
    marginRight: 10,
  },
  delete: {
    lineHeight: 20,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
    textAlign: 'center',
    marginLeft: 38,
  },
  buttonsquare1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
