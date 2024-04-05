import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import {layIdproduct} from '../../../api/reducers/ProductIdSlice';
import styles from './styles';
import {addItemToCart} from '../../../api/reducers/CartSlice';

const Productdetails = ({route}) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const [temporaryTotal, setTemporaryTotal] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();
  const {productIdData, productIdStatus, error} = useSelector(
    state => state.idproduct,
  );

  const {productId} = route.params;

  useEffect(() => {
    dispatch(layIdproduct(productId));
  }, [dispatch, productId]);

  console.log('Id', productId);
  console.log(productIdStatus);
  console.log('productIdData', productIdData);
  if (productIdStatus === 'loading' || !productIdData) {
    return <Text>Loading...</Text>;
  }

  if (productIdStatus === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  const handleLeftIconPress = () => {
    navigation.goBack();
  };
  const handleRightIconPress = () => {};

  const {name, price, description, category, size, origin, status, image} =
    productIdData;

  console.log('name', name);
  console.log('money', price);
  console.log('description', description);
  console.log('category', category);
  console.log('size', size);
  console.log('origin', origin);
  console.log('status', status);
  console.log('image', image);

  const images = [image];
  console.log('images', images);

  const updateTemporaryTotal = newQuantity => {
    const initialPrice = productIdData?.price || 0;
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

  const goToNextImage = () => {
    console.log('Go to next image');
    console.log('Before update - selectedIndex:', selectedIndex);
    setSelectedIndex(prevIndex => (prevIndex + 1) % images.length);
    console.log('After update - selectedIndex:', selectedIndex);
  };

  const goToPreviousImage = () => {
    console.log('Go to previous image');
    console.log('Before update - selectedIndex:', selectedIndex);
    setSelectedIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length,
    );
    console.log('After update - selectedIndex:', selectedIndex);
  };
  const add = () => {
    if (quantity <= 0) {
      ToastAndroid.show('Hãy chọn số lượng sản phẩm', ToastAndroid.SHORT);
      return;
    }
    const item = {
      _id: productId,
      quantity: quantity,
    
    };
    console.log("Quantity",quantity)
    dispatch(addItemToCart(item));
    ToastAndroid.show('Đã thêm vào giỏ hàng', ToastAndroid.SHORT);
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomHeader
          leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
          title={name}
          rightIcon={require('../../../../../assets/icons/cart.png')}
          onPressLeftIcon={handleLeftIconPress}
          onPressRightIcon={handleRightIconPress}
        />
        <View style={styles.contentContainer}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}>
            <View style={styles.contaisliderbox}>
              <Swiper
                autoplay={true}
                autoplayTimeout={5}
                autoplayLoop={true}
                index={0}
                showsPagination={true}>
                {images.flat().map((imageUrl, index) => {
                  console.log('imageUrl:', imageUrl);
                  return (
                    <View key={index}>
                      <Image
                        source={{uri: imageUrl}}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                  );
                })}
              </Swiper>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomHeader
              leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
              rightIcon={require('../../../../../assets/icons/chevron-right.png')}
              onPressLeftIcon={goToNextImage}
              onPressRightIcon={goToPreviousImage}
            />
          </View>
        </View>
        <View style={styles.contaibutontree}>
          <View style={styles.contentbuttontree}>
            <TouchableOpacity style={styles.bottontree}>
              <Text style={styles.textbuttontree}>{description}</Text>
            </TouchableOpacity>
            {category && category.name ? (
              <TouchableOpacity style={styles.bottontree}>
                <Text style={styles.textbuttontree}>{category.name}</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.emptyText}></Text>
            )}
          </View>
        </View>

        <View style={styles.contentext}>
          <Text style={styles.mony}>{price}</Text>
        </View>
        <View style={styles.contenchitiet}>
          <View style={styles.contaichitiet}>
            <Text style={styles.textchitiet}>Chi tiết sản phẩm</Text>
          </View>
          <View
            style={{width: '100%', height: 1, backgroundColor: 'black'}}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Kích cỡ</Text>
            <Text style={styles.textkc}>{size}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.7,
              backgroundColor: 'black',
            }}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Xuất xứ</Text>
            <Text style={styles.textkc}>{origin}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.7,
              backgroundColor: 'black',
            }}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Tình trạng</Text>
            <Text style={styles.textsp}>{status}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.7,
              backgroundColor: 'black',
            }}></View>
        </View>
        <View style={styles.contaifooter}>
          <View style={styles.contaitamtinh}>
            <View>
              <Text style={styles.textspdachon}>Đã chọn 0 sản phẩm</Text>
              <View style={styles.contaisquare}>
                <TouchableOpacity onPress={handleDecreaseQuantity}>
                  <Image
                    source={require('../../../../../assets/icons/minus-square.png')}
                    style={styles.iconsquare}
                  />
                </TouchableOpacity>
                <View style={styles.contaitextsquare}>
                  <Text style={styles.textsquare}>{quantity}</Text>
                </View>
                <TouchableOpacity onPress={handleIncreaseQuantity}>
                  <Image
                    source={require('../../../../../assets/icons/plus-square.png')}
                    style={styles.iconsquare}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.texttamtinh}>Tạm tính</Text>
              <View style={styles.contaitientamtinh}>
                <Text style={styles.tientamtinh}>{temporaryTotal}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contaibuttonchonmua}>
            <TouchableOpacity style={styles.buttonchonmua} onPress={add}>
              <Text style={styles.textchonmua}>Chọn mua</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Productdetails;
