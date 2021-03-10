import React from 'react';
import { StyleSheet, Image, FlatList, Button, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const Income = () => {


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.image}>
                <View style={styles.pagecontainer}>
                    <Text style={styles.pageheading}>Income</Text>
                    <View style={styles.login}>
                        <View style={styles.innersearch}>
                            <View style={styles.incomecontainer}>
                                <Feather name="command" size={70} color="#6dc044" />
                                <Text style={styles.kgtext}> Plastic recycling </Text>
                                <Text style={styles.incomeamount}> + 12.50 $ </Text>
                                <Text style={{ color: '#a4a4a4' }}> Income </Text>

                                <View style={styles.btncashout}>
                                    <Text style={styles.btncashouttext}> CASH OUT</Text>
                                    <FontAwesome
                                        name="arrow-right"
                                        size={18}
                                        color={"#fff"}
                                        style={{ marginLeft: 5 }}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </ImageBackground>



        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    pagecontainer: {
        marginTop: 100,
        flex: 1
    },
    login: {
        // height: '75%',
        // width: '90%',
        backgroundColor: '#fff',
        marginTop: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // marginBottom: 150,
        marginHorizontal: 15,
        borderRadius: 30,
        // flex: 1
    },

    innersearch: {
        marginTop: 15,
        backgroundColor: '#ffffff',
        marginBottom: 70
    },
    pageheading: {
        fontSize: 30,
        // position: 'absolute',
        // margin: 50,
        fontWeight: 'bold',
        color: '#fff',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 10
    },
    incomecontainer: {
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center'
    },
    kgtext: {
        // fontSize: 15,
        // fontWeight: 'bold',
        marginTop: 10,
        color: '#4eb947',
    },
    incomeamount: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#4eb947',
        marginTop: 10
    },
    btncashout: {
        backgroundColor: '#7cc64d',
        padding: 15,
        borderRadius: 10,
        marginTop: 35,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btncashouttext: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }


});
export default Income

