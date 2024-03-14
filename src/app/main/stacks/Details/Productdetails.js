import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {SliderBox} from 'react-native-image-slider-box';

const Productdetails = () => {
  const images = [
    'https://khuonmaucongcnc.com.vn/upload/images/cay-tai-loc.jpg',
    'https://i0.wp.com/hapigo.vn/wp-content/uploads/2022/09/Optimized-chau-cay-canh.jpg',
    'https://afamilycdn.com/2019/5/25/6116244723020600167876335959760434553683968o-15586804658031280324369-1558754708290704057746.jpg',
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
          style={{width: '100%', height: 0.7, backgroundColor: 'black'}}></View>
        <View style={styles.contaichitiet}>
          <Text style={styles.textkc}>Xuất xứ</Text>
          <Text style={styles.textkc}>Châu Phi</Text>
        </View>
        <View
          style={{width: '100%', height: 0.7, backgroundColor: 'black'}}></View>
        <View style={styles.contaichitiet}>
          <Text style={styles.textkc}>Tình trạng</Text>
          <Text style={styles.textsp}>Còn 156 sp</Text>
        </View>
        <View
          style={{width: '100%', height: 0.7, backgroundColor: 'black'}}></View>
      </View>
    </View>
  );
};

export default Productdetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    width: '100%',
    height: 270,
    justifyContent: 'space-between',
  },
  paginationBoxStyle: {
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: '30%',
    margin: 10,
    zIndex: 1,
  },
  contaisliderbox: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    marginEnd: 4,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  contaibutontree: {
    width: '100%',
    height: 58,
  },
  contentbuttontree: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 48,
    paddingVertical: 15,
    gap: 10,
    alignSelf: 'stretch',
  },
  bottontree: {
    width: 'auto',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#009245',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  textbuttontree: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  contentext: {
    width: '100%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 17,
    alignSelf: 'stretch',
  },
  mony: {
    width: 279,
    height: 34,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#007537',
  },
  contenchitiet: {
    width: '100%',
    height: 173,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 17,
    paddingHorizontal: 40,
    paddingVertical: 48,
    alignSelf: 'stretch',
  },
  textchitiet: {
    width: 'auto',
    height: 'auto',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#3a3a3a',
    lineHeight: 22,
  },
  contaichitiet: {
    width: 279,
    height: 'auto',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    alignSelf: 'stretch',
  },
  textkc: {
    width: 'auto',
    height: 'auto',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#3a3a3a',
  },
  textsp: {
    width: 'auto',
    height: 'auto',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#007537',
  },
});
