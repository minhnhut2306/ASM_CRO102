import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {sanpham} from '../../data/Data';
import {chau} from '../../data/Data';
import SectionView from '../../../multiComponent/SectionView';

const Home = () => {
  return (
    <ScrollView
      style={{width: '100%', height: '100%'}}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <Image
              source={require('../../../../../assets/images/image.png')}
              style={styles.imgMainHeader}
            />
          </View>
          <View style={styles.topHeader}>
            <Text style={styles.title}>
              Planta - toả sáng{`\n`}không gian nhà bạn
            </Text>
            <TouchableOpacity style={styles.imgHeader}>
              <Image
                source={require('../../../../../assets/images/home.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.newProduct}>
              <Image
                source={require('../../../../../assets/images/arrow-right.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SectionView title="Cây trồng" data={sanpham}></SectionView>
        <View style={styles.seemore}>
          <Text style={styles.textseemore}>Xem thêm cây trồng</Text>
        </View>
        <SectionView title="Chậu cây trồng" data={chau}></SectionView>
        <View style={styles.seemore}>
          <Text style={styles.textseemore}>Xem thêm chậu cây trồng</Text>
        </View>
        {/* phần cuối */}
        <View style={styles.contaics}>
          <Text style={styles.textcs}>Combo chăm sóc (mới)</Text>
        </View>
        <View style={styles.contaifooter}>
          <View style={styles.contenfooter}>
            <Text style={styles.textfooter}>Lemon Balm Grow Kit </Text>
            <Text style={styles.textfooter2}>
              Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker
              đánh dấu...
            </Text>
          </View>
          <Image style={styles.imagefooter} source={require('../../../../../assets/images/grow.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  textheader: {
    width: 223,
    height: 77,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    fontFamily: 'Lato',
    lineHeight: 37,
    color: '#221F1F',
    textAlign: 'center',
    top: 30,
  },
  imageheader: {
    width: 375,
    height: 205,
    flexShrink: 0,
    position: 'relative',
  },
  contaitext: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
  },
  icon: {
    width: 25,
    height: 25,
  },
  imgMainHeader: {
    width: '100%',
    height: 205,
    marginTop: 69,
  },
  mainHeader: {
    width: '100%',
    flexDirection: 'column',
  },
  imgHeader: {
    position: 'absolute',
    end: 0,
    top: 0,
    bottom: -10,
    end: 25,
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#221F1F',
    position: 'absolute',
    marginTop: 15,
    start: 25,
  },
  topHeader: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  header: {
    width: '100%',
  },
  // txtHangMoi: {
  //   color: '#007537',
  //   width: '100%',
  //   fontSize: 16,
  //   fontWeight: '500',
  //   start: 25,
  // },
  newProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 95,
    width: '100%',
    marginEnd: 4,
    marginLeft: '50%',
  },
  seemore: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    width: 327,
    height: 25,
    paddingHorizontal: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textseemore: {
    color: '#221f1f',
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    textAlign: 'right',
    lineHeight: 20,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
  },
  contaics: {
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 20,
    width: 327,
    height: 49,
    paddingHorizontal: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textcs: {
    color: '#221f1f',
    fontSize: 24,
    fontWeight: '500',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Lato',
    lineHeight: 34,
    fontStyle: 'normal',
  },
  contaifooter: {
    flexDirection: 'row',
    bottom: 0,
    width: 327,
    marginLeft: 20,
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    marginBottom: 20,
  },
  contenfooter: {
    width: 217,
    height: 137,
    flexDirection: 'column',
    paddingVertical: 24,
    paddingHorizontal: 17,
  },
  textfooter: {
    width: 155,
    color: '#221f1f',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    lineHeight: 22,
    fontStyle: 'normal',
  },
  textfooter2: {
    color: '#221f1f',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    lineHeight: 20,
    fontStyle: 'normal',
  },
  imagefooter:{
    width: 110,
    height: 138,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }
});
