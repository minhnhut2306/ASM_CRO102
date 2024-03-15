import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {SliderBox} from 'react-native-image-slider-box';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const Productdetails = ({route}) => {
  const navigation = useNavigation();
  const {name, image, type, mony, size, origin, status, product} = route.params;
  const [quantity, setQuantity] = useState(0);
  const initialPrice = mony;
  const [temporaryTotal, setTemporaryTotal] = useState(initialPrice);

  const handlePress = item => {
    navigation.navigate('Cart', {
      name: item.nameTree,
      image: item.image,
      type: item.type,
      mony: item.mony,
      size: item.size,
      origin: item.origin,
      status: item.status,
      product: item.product,
    });
  };

  // const images = [
  //   'https://khuonmaucongcnc.com.vn/upload/images/cay-tai-loc.jpg',
  //   // 'https://i0.wp.com/hapigo.vn/wp-content/uploads/2022/09/Optimized-chau-cay-canh.jpg',
  //   // 'https://afamilycdn.com/2019/5/25/6116244723020600167876335959760434553683968o-15586804658031280324369-1558754708290704057746.jpg',
  // ];

  const images = [image];

  const handleLeftIconPress = () => {
    navigation.goBack();
  };

  const handleRightIconPress = () => {};

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
          <View style={styles.contaisliderbox}>
            <SliderBox
              images={images}
              sliderBoxHeight={270}
              sliderBoxWidth={337}
              ImageComponentStyle={{
                width: 337,
                height: 270,
                animationDuration: 5000,
                position: 'relative',
              }}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FF5733"
              inactiveDotColor="#CCCCCC"
              paginationBoxStyle={styles.paginationBoxStyle}
              autoplayInterval={5000}
              circleLoop
              resizeMode="stretch"
              resizeMethod="auto"
              // currentImageEmitter={index => setCurrentImage(index)}
            />
            {/* <Image
              style={styles.headerimage}
              source={image}
              resizeMode="cover"
            /> */}
          </View>
          <View style={styles.buttonContainer}>
            <CustomHeader
              leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
              rightIcon={require('../../../../../assets/icons/chevron-right.png')}
            />
          </View>
        </View>
        <View style={styles.contaibutontree}>
          <View style={styles.contentbuttontree}>
            <TouchableOpacity style={styles.bottontree}>
              <Text style={styles.textbuttontree}>{product}</Text>
            </TouchableOpacity>
            {type ? (
              <TouchableOpacity style={styles.bottontree}>
                <Text style={styles.textbuttontree}>{type}</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.emptyText}></Text>
            )}
          </View>
        </View>
        <View style={styles.contentext}>
          <Text style={styles.mony}>{mony}</Text>
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
                <Text style={styles.tientamtinh}>{temporaryTotal}đ</Text>
              </View>
            </View>
          </View>
          <View style={styles.contaibuttonchonmua}>
            <TouchableOpacity
              style={styles.buttonchonmua}
              onPress={() => handlePress(route.params)}>
              <Text style={styles.textchonmua}>Chọn mua</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Productdetails;
