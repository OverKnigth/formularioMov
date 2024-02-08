import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { INPUT_COLOR } from '../commons/constantsColor'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface InputProps {
    placeholder: string
    name: string
    isPassword?: boolean
    hasIcon?: boolean
    //Método que captura el valor del input
    onChangeText: (name: string, value: string) => void
    acctionIcon?: () => void
}

export const InputComponent = ({placeholder, name, onChangeText, isPassword = false, hasIcon = false, acctionIcon=() => {}}: InputProps) => {
  return (
    <View>
        {
        (hasIcon) 
        ? <Icon style={styles.icon} name="visibility" size={20} color="grey" onPress={acctionIcon}/> : null 
} 
    <TextInput 
    placeholder={placeholder} 
    keyboardType={'default'}
    style={styles.inputT}
    onChangeText={(value: string) => onChangeText(name, value)}
    secureTextEntry={isPassword}
    /> 
    </View>
  )
}

const styles = StyleSheet.create({
    inputT: {
        backgroundColor: INPUT_COLOR,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10
    },
    icon: {
        position: 'absolute',
        right: 35,
        top: 23,
        zIndex: 1,
    }
})
