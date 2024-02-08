import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constantsColor'
import { BodyComponent } from '../components/BodyComponent'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'


interface LoginForm {
  username: string;
  password: string;
}

export const LoginScreen = () => {

  //Hook - Control de los datos en el form
  const [form, setForm] = useState<LoginForm>({
    username: '',
    password: ''
  });

  const [numero, setNumero] = useState(0);

  //Hook - desencriptar el password
  const [hiddenpassword, sethiddenpassword] = useState(true);


  //Función para cambiar el valor del useState
  const handlerChangeText = (name: string, value: string) => {
    // console.log(name);
    // console.log(value);
    setForm(prevState=>({
      ...prevState,
      [name]: value
    }))
  }

  //Funcion que envie los datos del formulario
  const handlerSendInfo = () => {
    console.log(form);
  }

  return (
    <View>
        <StatusBar backgroundColor = {PRIMARY_COLOR}/>
        <TitleComponent title="Iniciar Sesión"/>
        <BodyComponent>
          <Text style={styles.textW}>¡Bienvenido de Nuevo!</Text>
          <Text style={styles.textD}>Realiza tus compras de manera rápida y segura</Text>
          <View style={styles.containerInput}>
            <InputComponent placeholder="Usuario" name={'username'} onChangeText={handlerChangeText}/>
            <InputComponent placeholder="Contraseña" name={'password'} onChangeText={handlerChangeText} isPassword={hiddenpassword} hasIcon acctionIcon={() => sethiddenpassword(!hiddenpassword)}/>
            <TextInput
              placeholder="numero"
              keyboardType={'numeric'}
              onChangeText={(numero: string) => setNumero(parseInt(numero))}
            />
            <ButtonComponent title="Iniciar" onPress={handlerSendInfo}/>
          </View>
        </BodyComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  textW: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10
  },
  textD: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10   
  },
  containerInput: {
    marginVertical: 20
  }
})

