import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import SectionView from '../../../multiComponent/SectionView';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {all} from '../../data/Data';
import Buttonseemore from '../../../multiComponent/Buttonseemore';

const Seemreall = ({ navigation }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pressedButton, setPressedButton] = useState("Tất cả");

  const handleLeftIconPress = () => {
    navigation.goBack();
  };

  const filterProducts = productName => {
    let filteredData = [];
    if (productName === 'Tất cả') {
      filteredData = all;
    } else {
      filteredData = all.filter(product => product.product === productName);
    }
    setSelectedProduct(productName);
    setFilteredProducts(filteredData);
    setPressedButton(productName); // Cập nhật nút button được nhấn
  };

  const uniqueProducts = Array.from(
    new Set(all.map(product => product.product)),
  ).map(productName => ({
    name: productName,
    data: all.filter(product => product.product === productName),
  }));

  return (
    <ScrollView
      style={{ width: '100%', height: '100%' }}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomHeader
          leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
          title={"Sản phẩm"}
          rightIcon={require('../../../../../assets/icons/cart.png')}
          onPressLeftIcon={handleLeftIconPress}
        />
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewContainer}
          showsHorizontalScrollIndicator={false}>
          <Buttonseemore
            title="Tất cả"
            onPress={() => filterProducts('Tất cả')}
            isPressed={pressedButton === 'Tất cả'}
          />
          {uniqueProducts.map(product => (
            <Buttonseemore
              key={product.name}
              title={product.name}
              onPress={() => filterProducts(product.name)}
              isPressed={pressedButton === product.name}
            />
          ))}
        </ScrollView>
        {selectedProduct && (
          <SectionView title={selectedProduct} data={filteredProducts} />
        )}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  scrollViewContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});

export default Seemreall;
