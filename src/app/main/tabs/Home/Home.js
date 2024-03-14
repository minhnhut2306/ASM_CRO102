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
import { chau } from '../../data/Data';
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
        <View style={styles.footer}>
          <Text style={styles.textfooter}>Xem thêm cây trồng</Text>
        </View>
        <SectionView title="Chậu cây trồng" data={chau}></SectionView>
        <View style={styles.footer}>
          <Text style={styles.textfooter}>Xem thêm chậu cây trồng</Text>
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
    top: 24,
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
    marginTop: 21,
    start: 25,
  },
  topHeader: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    paddingHorizontal: 25,
    marginTop: 31,
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
  footer:{
    marginTop: 10,
    marginBottom: 15,
    marginLeft:10,
    width: 327,
    height: 25,
    paddingHorizontal: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textfooter: {
    color: '#221f1f',
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    textAlign: 'right',
    lineHeight:20,
    fontStyle: 'normal',
    textDecorationLine: 'underline'
  }
});
