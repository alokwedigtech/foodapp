import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Button, Text, View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
import homeicons from '../../assets/data/homeitems'

const News = ({ navigation }) => {

    const homebox = ({ item }) => {
        return (
            <View>
                <Image
                    source={item.url}
                    style={styles.profileImage}
                />
                <Text style={{ marginTop: 5, marginLeft: 6 }}>{item.title} </Text>
                <Text style={{ marginTop: 5, marginLeft: 6 }}>3:10:2021 </Text>
            </View>
        )
    }
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
                setLoader(false)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.image}>
                <View style={styles.login}>
                    <View style={styles.newscontainer}>
                        {loader && <ActivityIndicator style={styles.loader} size={100} color="#000000" />}

                        <FlatList
                            data={masterDataSource}
                            renderItem={homebox}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                        />


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

    login: {
        height: '100%',
        // width: '100%',
        backgroundColor: '#fff',
        marginTop: 55,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    newscontainer: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        marginHorizontal: 20,
        marginTop: 75,
        width: '40%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        // backgroundColor: 'red',
        // padding: 10
    },
    profileImage: {
        height: 90,
        width: 180,
        // borderRadius: 30
    },
    loader: {
        alignItems: 'center',
        marginTop: 100,
        alignItems: 'center'
    },

});
export default News

