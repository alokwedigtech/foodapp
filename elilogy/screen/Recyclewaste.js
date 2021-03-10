import React from 'react';
import { StyleSheet, Image, FlatList, Button, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Recyclefood from '../../assets/data/recyclewaste'

const Recyclewaste = () => {
    const tablerecycle = ({ item }) => {
        return (

            <View style={styles.recycleconatiner}>
                <View style={styles.kgplastic}>
                    <Text style={styles.kgtext}>{item.weight} Kg</Text>
                    <Text style={styles.plastictext}> Plastic</Text>
                </View>
                <View style={styles.kgplastic}>
                    <Text style={[styles.kgtext, { color: '#62bd44' }]}> + {item.income}</Text>
                    <Text style={styles.plastictext}>Income</Text>
                </View>
                <View style={styles.kgplastic}>
                    <Entypo name="box" size={30} color="#c6c6c6" />
                </View>
            </View>

        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.image}>
                <View style={styles.pagecontainer}>
                    <Text style={styles.pageheading}>My Recycled waste</Text>
                    <View style={styles.login}>
                        <View style={styles.innersearch}>
                            <FlatList
                                data={Recyclefood}
                                renderItem={tablerecycle}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
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
        marginHorizontal: 20,
        // borderRadius: 30,
        // flex: 1
    },

    innersearch: {
        marginTop: 15,
        backgroundColor: '#ffffff',
        marginBottom: 70
    },
    recycleconatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        borderBottomColor: '#b8b8b8',
        borderBottomWidth: 1,
        padding: 5
    },
    kgplastic: {
        alignItems: 'center'
    },
    kgtext: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    plastictext: {
        fontSize: 14,
        color: '#a4a4a4',
        marginTop: 3
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
    }


});
export default Recyclewaste

