import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const SectionView = ({title, data}) => {
  const navigation = useNavigation();
  const handlePress = item => {
    navigation.navigate('Productdetails', {
      name: item.nameTree,
      image: item.image,
      type : item.loai,
      mony: item.mony,
      size : item.size,
      origin: item.origin,
      status : item.status,
      product : item.product,
    });
  };
  const renderColumn = columnData => {
    return columnData.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.itemContainer}  onPress={() => handlePress(item)}>
          <View style={styles.contaimage}>
            <View style={styles.overlay} />
            <Image style={styles.image} source={item.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.texttencay}>{item.nameTree}</Text>
            {item.loai ? (<Text style={styles.textloai}>{item.loai}</Text> ) : 
            ( <Text style={styles.emptyText}></Text>)}
            <Text style={styles.texttien}>{item.mony}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  const halfLength = Math.ceil(data.length / 2);
  const column1Data = data.slice(0, halfLength);
  const column2Data = data.slice(halfLength);

  return (
    <View style={styles.container}>
      <View style={styles.contaitextsp}>
        <Text style={styles.textsp}>{title}</Text>
      </View>
      <View style={styles.columnContainer}>
        <View style={styles.column}>{renderColumn(column1Data)}</View>
        <View style={styles.column2}>{renderColumn(column2Data)}</View>
      </View>
    </View>
  );
};

export default SectionView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: 14,
    marginBottom: 15,
  },
  itemContainer: {
    padding: 10,
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  column: {
    width: '46.5%',
  },
  column2: {
    width: '46.5%',
    marginRight: 25,
  },
  contaimage: {
    width: 145,
    height: 124,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'lightgray',
    opacity: 0.5,
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  contaitextsp: {
    width: 325,
    height: 49,
    fontSize: 20,
    marginLeft: 10,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },
  textsp: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Lato',
    color: '#221f1f',
    fontStyle: 'normal',
  },
  texttencay: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    fontFamily: 'Lato',
    color: '#221f1f',
  },
  textloai: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 22,
    fontFamily: 'Lato',
    color: '#7d7b7b',
  },
  texttien: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    fontFamily: 'Lato',
    color: '#007537',
  },
  emptyText: {
    width: 0, 
    height: 5, 
  },
});
