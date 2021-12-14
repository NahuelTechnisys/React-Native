import React from "react";
import { Button, Text, View } from "react-native";

export const AddNew = props => {

    const random = Math.round(Math.random() * (999) + 1);

    const newItem={
        id: random,
        title: `Title ${random}`,
        image: `Image ${random}`,
        description: `Description ${random}`,
        author: `Author ${random}`,
        date: `Date ${random}`,
        location: `Location ${random}`
    }
    console.log(newItem);

    return (
        <>
            <View>

                <View >
                    <Text>Título {random}</Text>
                    {/* <TextInput onChangeText={user => handleUserName(user)} /> */}
                </View>
                <View >
                    <Text>Imagen {random}</Text>
                    {/* <TextInput onChangeText={user => handleUserName(user)} /> */}
                </View>
                <View >
                    <Text>Descripción {random}</Text>
                    {/* <TextInput onChangeText={user => handleUserName(user)} /> */}
                </View>

            </View>
            <Button title='Agregar' onPress={() => props.AddItem(newItem)} />
        </>
    )
}