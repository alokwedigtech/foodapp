import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';

const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.image}>
                <View style={styles.welcome}>
                    <Text style={styles.text} >Welcome !</Text>
                    <Image
                        source={require('../../assets/images/logo.jpg')}
                        style={styles.logo}
                        resizeMode="stretch"

                    />
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('Login')
                    }>
                        <Text style={styles.elilogy} >ECILOGY</Text>

                    </TouchableOpacity>

                </View>
            </ImageBackground>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column"
    },
    welcome: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    image: {
        flex: 1,
        // resizeMode: "cover",
        // justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        marginTop: 50
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 500,
        marginTop: 50,
        // backgroundColor: 'red'
    },
    elilogy: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        // marginTop: 50
    }
});
export default Welcome
