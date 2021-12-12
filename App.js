import { StyleSheet, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NewsList } from './Components/NewsList/NewsList';
import { LogIn } from './Components/LogIn/LogIn';
import { useState } from 'react/cjs/react.development';
import Colors from './constants/Colors';

export default function App() {

console.log(Colors.background)

const [allowed,setAlowed] = useState(false); //variable usada para permitir el paso si el usuario es valido
const [user,setUser] = useState({user:'nahuel',pass:'123'}); //hardcodeado para poder probarlo

let content = null;

const handleLogIn = (userReceived, passReceived) => {

  console.log(userReceived, passReceived);

  if(user.user == userReceived && user.pass == passReceived){
    setAlowed(true)
  }
  else{
    console.log('Usuario incorrecto');
    setAlowed(false)
  }

}


!allowed
  ? content = <LogIn onLogIn={handleLogIn}/>
  : content = <NewsList /> 

  return (
    <View style={styles.container}>
      {content}
      {/* <StatusBar style="auto" /> */}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
