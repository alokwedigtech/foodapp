import React from 'react';
import { StyleSheet, Image, Button, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.image}>
                <View style={styles.login}>
                    <View style={styles.innersearch}>
                        <View style={styles.spaceinput}>
                            <Text style={styles.labelcolor}> Your Name</Text>
                            <TextInput
                                placeholder="Enter your name"
                                style={styles.internalsearch} />
                        </View>
                        <View style={styles.spaceinput}>
                            <Text style={styles.labelcolor}> Your Email</Text>
                            <TextInput
                                placeholder="Enter your email"
                                style={styles.internalsearch} />
                        </View>
                        <View style={styles.spaceinput}>
                            <Text style={styles.labelcolor}> Create password</Text>
                            <TextInput
                                placeholder="Enter your password"
                                style={styles.internalsearch} />
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() =>
                            navigation.navigate('Home')
                        } title="SIGN IN" color="#51bd47"></Button>
                    </View>
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
    login: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 50
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 80,
        // borderTopEndRadius: 50;
        // borderRadius: 500
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
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
    },
    innersearch: {
        marginTop: 70,
        backgroundColor: '#ffffff',
        marginHorizontal: 40,
        // flexDirection: 'row',
        // alignItems: 'center',
        // width: '80%'
        // borderRadius: 10
    },
    mainlocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    internalsearch: {
        // backgroundColor: 'red',
        // borderBottomColor: 'red',
        // maxWidth: 2,
        // borderRadius: ,
        // marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#62bd44',
        // backgroundColor: '#00BCD4'
    },
    labelcolor: {
        color: '#aeaeae'
    },
    spaceinput: {
        marginTop: 25
    },
    button: {
        backgroundColor: "#51bd47",
        marginTop: 40,
        // position: "absolute",
        // bottom: 0
        marginHorizontal: 40,
        borderRadius: 40
    }
});
export default Login

