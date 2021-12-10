import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const NewsListItem = ({data}) => {

    return (
        <View style={listItemsStyles.listItem}>
            <Text style={listItemsStyles.title}>{data.item.title}</Text>
            <View style={listItemsStyles.infoContainer}>
                <Text style={listItemsStyles.image}>{data.item.image}</Text>
                <Text style={listItemsStyles.date}>{data.item.date}</Text>
                <View style={listItemsStyles.newFooter}>
                    <Text>{data.item.author}</Text>
                    <Text>{data.item.location}</Text>
                </View>
            </View>
        </View>
    );
}

const listItemsStyles = StyleSheet.create({
    listItem: {
        margin: 20,
        backgroundColor: '#aaa4'
    },
    title: {
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
        backgroundColor: '#aaa3'
    },
    date: {
        color: '#999',
        marginBottom: 20,
        alignSelf: 'flex-end'
    },
    newFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
});