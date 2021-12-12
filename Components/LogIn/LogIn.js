import React, { useState } from "react";
import { TextInput, View, Button, Text, StyleSheet } from "react-native";
import Colors from '../../constants/Colors';

export const LogIn = props => {
    
    const [userName, setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleUserName = (user) => {
        setUserName(user);
    }

    const handlePassword = (pass) => {
        setPassword(pass);
    }

    return(
        <>
            <Text style={LogInStyle.appTitle} >Las noticias de la gente</Text>
            <View style={LogInStyle.container}>
                <View style={{width: '100%'}}>
                    <View style={LogInStyle.inputArea}>
                        <Text style={LogInStyle.label}>Usuario</Text>
                        <TextInput style={LogInStyle.input} autoComplete="userName" onChangeText={ user => handleUserName(user) }/>
                    </View>
                    <View style={LogInStyle.inputArea}>
                        <Text style={LogInStyle.label}>Contraseña</Text>
                        <TextInput style={LogInStyle.input} autoComplete="password" onChangeText={ pass => handlePassword(pass) } />
                    </View>
                </View>
                <View style={LogInStyle.buttonsArea} >
                    <Button title='Registrarse' style={LogInStyle.button} />
                    <Button title='Ingresar' style={LogInStyle.button} onPress={() => props.onLogIn(userName,password)}/>
                </View>
            </View>
        </>
    );
}

const LogInStyle = StyleSheet.create({
    container: {
        width:'90%',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 0,
        paddingLeft: 0,
        backgroundColor: Colors.cards,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appTitle: {
        fontWeight: 'bold',
        color: Colors.font
    },
    inputArea: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 20
    },
    label:{
        paddingLeft: 10,
        fontWeight: 'bold',
        color: Colors.font
    },
    input: {
        marginTop: 5,
        borderRadius: 20,
        width: '100%',
        padding: 10,
        backgroundColor:Colors.details
    },
    buttonsArea: {
        width:'90%',
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 20
    },
    button: {
        margin:'auto'
    }
});
