import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from '../../constants/Colors';

export const NewsListItem = props => {

    return (
        <View style={listItemsStyles.listItem}>
            <Text style={listItemsStyles.title}>{props.data.item.title}</Text>
            <View style={listItemsStyles.infoContainer}>
                <Text style={listItemsStyles.image}>{props.data.item.image}</Text>
                <Text style={listItemsStyles.date}>{props.data.item.date}</Text>
                <View style={listItemsStyles.newFooter}>
                    <Text style={listItemsStyles.author}>{props.data.item.author}</Text>
                    <Text style={listItemsStyles.location}>{props.data.item.location}</Text>
                </View>
            </View>
            <View style={listItemsStyles.deleteBtnContainer} >
                <Button title='Eliminar'
                    onPress={() => props.Delete(props.data.item.id)}
                /> 
            </View>
            
        </View>
    );
}

const listItemsStyles = StyleSheet.create({
    listItem: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: Colors.cards,
        borderRadius: 7
    },
    title: {
        color: Colors.font,
        alignSelf: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoContainer: {
        width: '75%',
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        alignSelf: 'center',
        height: 150,
        backgroundColor: Colors.second_cards,
        borderRadius: 7
    },
    date: {
        color: Colors.second_font,
        marginBottom: 20,
        alignSelf: 'flex-end'
    },
    newFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    author: {
        color: Colors.font
    },
    location: {
        color: Colors.font
    },
    deleteBtnContainer:{
        width:'25%'
    },
});