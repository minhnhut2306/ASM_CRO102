import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../../multiComponent/CostomHeader';

const Search = () => {
  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../../../../../assets/icons/chevronleft.jpg')}
        title={'Tìm Kiếm'}
      />
      <View
        style={{
          width: ' 100%',
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.containersearch}>
          <View style={styles.customsearch}>
            <View style={styles.containertexticon}>
              <TextInput style={[styles.input, {}]} placeholder="Panse Đen" />
              <Image
                style={styles.iconsearch}
                source={require('../../../../../assets/icons/search.png')}></Image>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contaisanpham}>
        <View style={styles.contentsp}>
          <View style={styles.contaimage}>
            <View style={styles.overlay} />
            <Image
              style={styles.imagesp}
              source={require('../../../../../assets/images/tree1.png')}
            />
          </View>
          <View style={styles.contaitextsp}>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <Text style={styles.textnametree}>Panse Đen </Text>
              <Text style={{color: 'black'}}> | </Text>
              <Text style={styles.textnametree}> Hybrid</Text>
            </View>
            <Text style={styles.textnametree}>250.000đ</Text>
            <Text style={styles.textstatus}>Còn 156sp</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containersearch: {
    display: 'flex',
    width: 327,
    height: 33,
    paddingVertical: 0,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    color: '#ABABAB',
    borderColor: '#ABABAB',
  },
  customsearch: {
    display: 'flex',
    height: 24,
    alignItems: 'center',
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  containertexticon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  iconsearch: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  contaisanpham: {
    width: '100%',
    height: 107,
    paddingVertical: 15,
    paddingHorizontal: 48,
    alignItems: 'flex-start',
    gap: 15,
    marginTop: 20,
  },
  contentsp: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    paddingVertical: 44,
    paddingHorizontal: 24,
    width: 20,
    marginLeft: 20,
    height: 20,
  },
  imagesp: {
    width: 77,
    height: 77,
    borderRadius: 8,
    position: 'absolute',
  },
  contaitextsp: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    marginStart: 15,
  },

  textnametree: {
    lineHeight: 22,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
    textAlign: 'center',
  },
  textstatus: {
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
    textAlign: 'center',
  },
  contaimage: {
    width: 77,
    height: 77,
    position: 'relative',
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'lightgray',
    opacity: 0.5,
    borderRadius: 8,
  },
});
