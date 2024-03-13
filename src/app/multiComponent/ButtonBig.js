import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';


const ButtonBig = (props) => {
    const { navigation,
        onPress,
        title,
        style
    } = props;

    return (
        <View style={[styles.buttonContainer, style]}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <LinearGradient
                    colors={['#007537', '#4CAF50']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonBig

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        height: 50,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        fontFamily: 'Poppins',
    },
})