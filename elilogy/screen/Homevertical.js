import React from 'react';
import { StyleSheet, Image, Button, Text, View, SafeAreaView, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
import homeicons from '../../assets/data/homeitems'

const Homevertical = ({ navigation }) => {

    const homebox = ({ item }) => {
        return (
            <View style={styles.boxitem}>
                <View style={styles.boxitemname}>
                    <Feather name="command" size={50} color="#6dc044" />
                    <Text style={styles.itemheading}>Home</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.image}>
                <View style={styles.login}>
                    <View style={styles.innersearch}>
                        <View style={styles.homeitems}>
                            <FlatList
                                data={homeicons}
                                renderItem={homebox}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                                numColumns={1}
                            />
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
    homeitems: {
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        marginHorizontal: 15,

        alignItems: 'center'
        // marginTop: 20,
        // paddingHorizontal: 10
    },
    boxitemname: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    itemheading: {
        paddingTop: 10
    },
    image: {
        flex: 1,
    },
    boxitem: {
        height: 170,
        width: 170,
        shadowColor: "#000",
        shadowOpacity: 5,
        shadowRadius: 2.62,
        elevation: 1,
        borderRadius: 10,
        margin: 10
    },
    login: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 55,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },

    innersearch: {
        marginTop: 70,
        backgroundColor: '#ffffff',
        flex: 1
    },


});
export default Homevertical

