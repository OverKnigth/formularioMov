import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'

//Indica las propiedades del componente reutilizable
interface TitleProps {
    title: string
}

export const TitleComponent = ({title} : TitleProps) => {
    const { height } = useWindowDimensions();
  return (
    <Text style={{
        height: height *0.15,
        ...styles.title}}>{title}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#7BD3EA',
        paddingVertical: 30,
        textAlign: 'center'
    },
})