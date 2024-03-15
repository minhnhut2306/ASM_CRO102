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
import styles from './styles';
const Productdetails = () => {
  const images = [
    'https://khuonmaucongcnc.com.vn/upload/images/cay-tai-loc.jpg',
    // 'https://i0.wp.com/hapigo.vn/wp-content/uploads/2022/09/Optimized-chau-cay-canh.jpg',
    // 'https://afamilycdn.com/2019/5/25/6116244723020600167876335959760434553683968o-15586804658031280324369-1558754708290704057746.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const handleLeftButtonPress = () => {
    console.log('Left button pressed');

    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  const handleRightButtonPress = () => {
    console.log('Right button pressed');
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomHeader
          leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
          title={'Spider Plant'}
          rightIcon={require('../../../../../assets/icons/cart.png')}
        />
        <View style={styles.contentContainer}>
          <View style={styles.contaisliderbox}>
            <SliderBox
              key={currentImage}
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
              currentImageEmitter={index => setCurrentImage(index)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLeftButtonPress}>
              <Image
                source={require('../../../../../assets/icons/chevronleft.jpg')}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRightButtonPress}>
              <Image
                source={require('../../../../../assets/icons/chevron-right.png')}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contaibutontree}>
          <View style={styles.contentbuttontree}>
            <TouchableOpacity style={styles.bottontree}>
              <Text style={styles.textbuttontree}>Cây trồng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottontree}>
              <Text style={styles.textbuttontree}>Ưa bóng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentext}>
          <Text style={styles.mony}>250.000đ</Text>
        </View>
        <View style={styles.contenchitiet}>
          <View style={styles.contaichitiet}>
            <Text style={styles.textchitiet}>Chi tiết sản phẩm</Text>
          </View>
          <View
            style={{width: '100%', height: 1, backgroundColor: 'black'}}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Kích cỡ</Text>
            <Text style={styles.textkc}>Nhỏ</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.7,
              backgroundColor: 'black',
            }}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Xuất xứ</Text>
            <Text style={styles.textkc}>Châu Phi</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.7,
              backgroundColor: 'black',
            }}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Tình trạng</Text>
            <Text style={styles.textsp}>Còn 156 sp</Text>
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
                <TouchableOpacity>
                  <Image
                    source={require('../../../../../assets/icons/minus-square.png')}
                    style={styles.iconsquare}
                  />
                </TouchableOpacity>
                <View style={styles.contaitextsquare}>
                  <Text style={styles.textsquare}>0</Text>
                </View>
                <TouchableOpacity>
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
                <Text style={styles.tientamtinh}>0đ</Text>
              </View>
            </View>
          </View>
          <View style={styles.contaibuttonchonmua}>
            <TouchableOpacity style={styles.buttonchonmua}>
              <Text style={styles.textchonmua}>Chọn mua</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Productdetails;

