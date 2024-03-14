import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';

const InputView = (props) => {
    const {
        placeholder,
        placeholderTextColor,
        style,
        keyboardType,
        numberOfLines,
        onTextChange,
        value,
        hidePassword,
    } = props;
    const [text, setText] = useState(value);
    const [hide, setHide] = useState(null);

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
      
    };

    const handleBlur = () => {
        setIsFocused(false);
       
    };
    useEffect(() => {
        if (hidePassword !== undefined && hidePassword !== null) {
            setHide(hidePassword);
        }
    }, [hidePassword]);

    const handleTextChange = (inputText) => {
        setText(inputText);
        if (onTextChange) {
            onTextChange(inputText);
        }
    };

    const hideShow = () => {
        setHide(!hide);
    }

    return (
        <View style={[styles.inputView, style, isFocused && styles.focus]}>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType || "default"}
                onFocus={handleFocus}
                onBlur={handleBlur}
                numberOfLines={numberOfLines || 1}
                onChangeText={handleTextChange}
                value={text}
                placeholderTextColor={placeholderTextColor || '#8B8B8B'}
                style={styles.input}
                secureTextEntry={hide}
            />
                {hide != null && (
                    <View>
                        {hide ? (
                            <TouchableOpacity onPress={hideShow}>
                                <Image source={require('../../../assets/icons/hidePassword.png')} style={styles.showPassword} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={hideShow}>
                                <Image source={require('../../../assets/icons/showPassword.png')} style={styles.showPassword} />
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            
        </View>
    );
}

export default InputView

const styles = StyleSheet.create({
    focus: {
        borderColor: '#009245',
        borderWidth: 2,
    },
    input: {
        color: 'black',
        width: 'auto',
        fontSize: 15,
        fontWeight: '400'
    },
    showPassword: {
        width: 20,
        height: 20,
    },
    inputView: {
        borderWidth: 1,
        width: '100%',
        height: 46,
        borderRadius: 10,
        paddingHorizontal: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',

    },
})