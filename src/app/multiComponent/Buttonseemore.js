import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Buttonseemore = ({ title, onPress, isPressed }) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    onPress();
  };

    return (
      <View style={styles.container}>
        <View style={styles.containerbutton}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isPressed ? '#007AFF' : '#FFFFFF' }]}
            onPress={onPress}>
            <Text style={[styles.text, { color: isPressed ? '#FFFFFF' : 'black' }]}>{title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    padding: 10,
  },
  containerbutton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default Buttonseemore;
