import React from 'react'
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { BODY_COLOR } from '../commons/constantsColor'

export const BodyComponent = (props: any) => {

    const { height } = useWindowDimensions();

  return (
    <View style={{
        height: height *0.70,
        ...styles.container}}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BODY_COLOR,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20
    }        
})