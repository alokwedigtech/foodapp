import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const favoriteitems = ({ item }) => {
    return (
        <View style={[styles.favouriteitems]}>
            <Image style={styles.image} source={item.image} />
            <Text style={[styles.text, { alignSelf: 'center' }]}>{item.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    favouriteitems: {
        borderRadius: 20,
        marginLeft: 15
    },
    image: {
        resizeMode: "cover",
        height: 140,
        width: 170,
        borderRadius: 15
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        bottom: 0,
        position: 'absolute',
        alignContent: 'center'
    },
})
export default favoriteitems