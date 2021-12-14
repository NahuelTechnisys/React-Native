import React, { useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { NewsListItem } from "../NewsListItem/NewsListItem";
import { StatusBar } from 'expo-status-bar';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { AddNew } from "../AddNew/AddNew";


export const NewsList = () => {

    const [btnPress,setBtnPress] = useState(false);
    const [list,setList] = useState(
            [{id: 1, title: 'Title 1', image:'Image 1', description: 'Description 1', author: 'Author 1', date: 'Date 1', location: 'Location 1'}//,
            /*{ id: 2, title: 'Title 2', image:'Image 2', description: 'Description 2', author: 'Author 2', date: 'Date 2', location: 'Location 2'},
            { id: 3, title: 'Title 3', image: 'Image 3', description: 'Description 3', author: 'Author 3', date: 'Date 3', location: 'Location 3' },
            { id: 4, title: 'Title 4', image: 'Image 4', description: 'Description 4', author: 'Author 4', date: 'Date 4', location: 'Location 4' },
            { id: 5, title: 'Title 5', image: 'Image 5', description: 'Description 5', author: 'Author 5', date: 'Date 5', location: 'Location 5' },
            { id: 6, title: 'Title 6', image: 'Image 6', description: 'Description 6', author: 'Author 6', date: 'Date 6', location: 'Location 6' }*/]
        );

    const handlePress = () => {
        setBtnPress(!btnPress)
    }

    const addItem = item => {
        setList([...list, item]);
        setBtnPress(!btnPress)
    }

    const handleDelete = id => {
        setList(list.filter((el) => el.id !== id));
    }

    console.log(list);

    return ! btnPress

        ? (<>
            <FlatList style={listStyles.container}

                //Infomación de la lista
                data={list}

                //Renderizado
                renderItem={data => (<NewsListItem data={data} Delete={handleDelete}/>)}

                //Key
                keyExtractor={(item) => item.id}
            />

            <Icon
                type='material-community'
                name='plus'
                color='#bbb'
                reverse
                containerStyle={listStyles.add}
                onPress={handlePress}
            />

            {/* <StatusBar style="auto" /> */}
        </>)

        :(
            <AddNew AddItem={addItem}/>
        )
}

const listStyles = StyleSheet.create({
    container: {
        width:'100%'        
    },
    add: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color:'#fff'
    }
});