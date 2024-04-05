import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SectionView from '../../../multiComponent/SectionView';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {layCategory} from '../../../api/reducers/CategorySlice';
import {layProduct} from '../../../api/reducers/ProductSlice';

const Home = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {categoryData, categoryStatus} = useSelector(state => state.category);
  const {productData, productStatus} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(layCategory());
    dispatch(layProduct());
  }, [dispatch]);

  console.log(categoryStatus);
  console.log(categoryData);
  console.log(productStatus);
  console.log(productData);

  if (categoryStatus === 'loading') {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
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
            <TouchableOpacity style={styles.newProduct}>
              <Text style={styles.txtHangMoi}>Xem sản phẩm mới về</Text>
              <Image
                style={styles.iconarrow}
                source={require('../../../../../assets/icons/arrow-right.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SectionView title="Cây trồng" data={productData}></SectionView>
        <View style={styles.seemore}>
          <TouchableOpacity>
            <Text style={styles.textseemore}>Xem thêm cây trồng</Text>
          </TouchableOpacity>
        </View>
        <SectionView
          title="Chậu cây trồng"
          data={productData.filter(
            item => item.categoryId === '6603ecb63019590fad3be5f0',
          )}
        />
        <View style={styles.seemore}>
          <TouchableOpacity>
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
