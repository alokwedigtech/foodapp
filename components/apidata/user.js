import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, TextInput, Image, FlatList, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import colors from '../../assets/colors/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const Userapi = ({ navigation }) => {

    const datashow = ({ item }) => {
        return (
            <TouchableOpacity onPress={() =>
                navigation.navigate('Userinfo', {
                    item: item,
                })
            }>
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

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
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

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.name
                    ? item.name
                    : '';
                const textData = text;
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

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

            <Text style={styles.userlist}> User List</Text>
            <View style={styles.innersearch}>
                <FontAwesome
                    name="search"
                    size={20}
                    color={"#57a7ff"}
                    style={{ marginLeft: 10 }}
                />
                <TextInput
                    placeholder="Search by name"
                    style={styles.internalsearch}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                />
                {/* <EvilIcons
                    name="close"
                    size={20}
                    color={"#57a7ff"}
                    style={{ marginLeft: 10 }}
                    onPress={() => setSearch("")}
                /> */}
            </View>
            <View>
                {loader && <ActivityIndicator style={styles.loader} size={100} color="#000000" />}
            </View>
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={datashow}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',+
        paddingHorizontal: 20,
        paddingTop: 10,
        // borderBottomColor: "#000",
        // width: 2

    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    userlist: {
        marginTop: 5,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    userdatalist: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        marginTop: 20,
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
    },
    loader: {
        alignItems: 'center',
        marginTop: 100,
        alignItems: 'center'
    },
    internalsearch: {
        marginLeft: 20,
        color: '#aeb0b5'
    },
    innersearch: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        // justifyContent: 'space-between'
    },
});
export default Userapi
