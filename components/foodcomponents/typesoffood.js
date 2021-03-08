import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const typeoffood = ({ item }) => {
    return (
        <View style={[styles.typeoffoodcontent, {
            backgroundColor: '#278cff'
        }]} horizontal={true}>
            <FontAwesome
                name={item.iconname}
                size={20}
                color={"#fff"}
                style={styles.iconsset}
            />
            <Text style={styles.textwhite}> {item.title}</Text>
            <Text style={styles.textwhite}>{item.noofrestaurant} restaurant</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    typeoffoodcontent: {
        backgroundColor: 'red',
        padding: 20,
        margin: 10,
        overflow: 'hidden',
        borderRadius: 10,
        height: 120,
        width: 140
    },
    textwhite: {
        color: "#fff",
        margin: 2,
        fontWeight: "bold"
    },
    iconsset: {
        margin: 5,
        alignSelf: 'flex-end'
    },
})

export default typeoffood