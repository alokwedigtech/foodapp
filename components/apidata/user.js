import React, { useState } from 'react';
import { StyleSheet, Button, Image, FlatList, Text, View, SafeAreaView, Alert, TextInput, TouchableOpacity, ClippingRectangle } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';
import { useEffect } from 'react/cjs/react.development';

const Userapi = ({ navigation }) => {

    const datashow = ({ item }) => {
        console.log('item-------', item)
        return (
            <TouchableOpacity>
                <View style={styles.userdatalist}>
                    <Image
                        source={require('../../assets/images/profile.png')}
                        style={styles.profileImage}
                    />
                    <View>
                        <Text style={styles.username}>{item.name}</Text>
                        <Text style={styles.useremail}>{item.email}</Text>
                    </View>
                    <Feather name="chevron-right" size={40} color={colors.textDark} />
                </View>
            </TouchableOpacity>
        )
    }

    const [userdata, setUserdata] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log('Response=> ', JSON.stringify(json))
                setUserdata(JSON.stringify(json))
            })
    }, []);

    return (
        <View style={styles.container}>
            {console.log(userdata)}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark} />
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
            <Text style={styles.userlist}> User List</Text>

            {/* <TouchableOpacity>
                <View style={styles.userdatalist}>
                    <Image
                        source={require('../../assets/images/profile.png')}
                        style={styles.profileImage}
                    />
                    <View>
                    
                        <Text style={styles.username}>alok</Text>
                        <Text style={styles.useremail}>goyal</Text>
                    </View>
                    <Feather name="chevron-right" size={40} color={colors.textDark} />
                </View >
            </TouchableOpacity > */}
            {/* 
            <FlatList
                data={userdata}
                keyExtractor={(item) => item.id}
                renderItem={(item) => {
                    console.log("item=> ", item.name)
                    return (
                        <TouchableOpacity>
                            <View style={styles.userdatalist}>
                                <Image
                                    source={require('../../assets/images/profile.png')}
                                    style={styles.profileImage}
                                />
                                <View>
                                    <Text style={styles.username}>{item.name}</Text>
                                    <Text style={styles.useremail}>{item.email}</Text>
                                </View>
                                <Feather name="chevron-right" size={40} color={colors.textDark} />
                            </View>
                        </TouchableOpacity>
                    );
                }}
            /> */}
            {userdata && userdata.map((res) => {
                // console.log("res-----", res)
                return (
                    <TouchableOpacity>
                        <View style={styles.userdatalist}>
                            <Image
                                source={require('../../assets/images/profile.png')}
                                style={styles.profileImage}
                            />
                            <View>
                                <Text style={styles.username}>{res.name}</Text>
                                <Text style={styles.useremail}>{res.email}</Text>
                            </View>
                            <Feather name="chevron-right" size={40} color={colors.textDark} />
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View >
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
    userlist: {
        marginTop: 25,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    userdatalist: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        marginTop: 20,
        // paddingHorizontal: 50,
        justifyContent: 'space-between',
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 4,
        padding: 5,
        alignItems: 'center'
    },
    profileImage: {
        height: 60,
        width: 60,
        borderRadius: 5
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    useremail: {
        color: '#403f3f'
    }
});
export default Userapi
