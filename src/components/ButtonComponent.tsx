import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { INPUT_COLOR, PRIMARY_COLOR } from '../commons/constantsColor'

interface ButtonProps {
    title: string
    onPress: () => void
}

export const ButtonComponent = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonC}
    onPress={onPress}
    >
        <Text style={styles.textB}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonC: {
        backgroundColor: INPUT_COLOR,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: '90%',
    },
    textB: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})