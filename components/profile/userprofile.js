import React, { useState } from 'react';
import { StyleSheet, Button, Image, Text, View, SafeAreaView, Alert, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';

const Userprofile = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark} />
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>


            <View style={styles.info}>

                <Image
                    source={require('../../assets/images/profile.png')}
                    style={styles.profileimage}
                    resizeMode="stretch"
                />

            </View>


            <View style={styles.profilename}>
                <Text style={styles.name}>Alexander Wolfe</Text>
                <Text style={styles.typedr}>Cardiologist</Text>
                <Text style={styles.rating}>5.0 (234 reviewrs)</Text>
            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2,
        flexDirection: 'row',
        alignContent: 'center'
    },
    profileicons: {
        marginTop: 70,
        margin: 30
    },
    profileimage: {
        height: 170,
        width: 160,
        borderRadius: 300,
    },

    info: {
        // flexDirection: 'row',
        // marginTop: 0
        alignItems: 'center'
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#799af3",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    bottomicons: {
        width: "100%",
        flexDirection: 'row',
        // height: 50,
        position: 'absolute',
        bottom: 0,
        justifyContent: "space-around",
        flexDirection: 'row',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,

        elevation: 4,
        marginTop: 50
    },
    options: {
        width: "80%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "space-around",
        margin: 7,
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    optionText: {
        color: "#000"
    },
    profilename: {
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#222222"
    },
    typedr: {
        color: '#b5b5b5'
    },
    rating: {
        color: '#b5b5b5'
    }

});
export default Userprofile
