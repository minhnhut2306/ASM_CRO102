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
import styles from './styles';

const Home = props => {
  const {navigation} = props;
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
            <TouchableOpacity
              style={styles.imgHeader}
              onPress={() => navigation.navigate('Cart')}>
              <Image source={require('../../../../../assets/icons/cart.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.newProduct}
              onPress={() =>
                navigation.navigate('Seemore', {type: 'sanphamnew'})
              }>
              <Text style={styles.txtHangMoi}>Xem sản phẩm mới về</Text>
              <Image
                source={require('../../../../../assets/icons/arrow-right.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SectionView title="Cây trồng" data={sanpham}></SectionView>
        <View style={styles.seemore}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Seemore', {type: 'caytrong'})}>
            <Text style={styles.textseemore}>Xem thêm cây trồng</Text>
          </TouchableOpacity>
        </View>
        <SectionView title="Chậu cây trồng" data={chau}></SectionView>
        <View style={styles.seemore}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Seemore', {type: 'chaucaytrong'})
            }>
            <Text style={styles.textseemore}>Xem thêm chậu cây trồng</Text>
          </TouchableOpacity>
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
          <Image
            style={styles.imagefooter}
            source={require('../../../../../assets/images/grow.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
