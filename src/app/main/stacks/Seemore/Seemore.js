import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import SectionView from '../../../multiComponent/SectionView';
import CustomHeader from '../../../multiComponent/CostomHeader';
import {sanpham, chau} from '../../data/Data';

const Seemore = ({route, navigation}) => {
  const {type} = route.params;

  const handleLeftIconPress = () => {
    navigation.goBack();
  };

  let selectedData = [];
  if (type === 'caytrong') {
    selectedData = sanpham;
  } else if (type === 'chaucaytrong') {
    selectedData = chau;
  }

  return (
    <ScrollView
      style={{width: '100%', height: '100%'}}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomHeader
          leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
          onPressLeftIcon={handleLeftIconPress}
        />
        <SectionView
          title={type === 'caytrong' ? 'Cây trồng' : 'Chậu cây trồng'}
          data={selectedData}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default Seemore;
