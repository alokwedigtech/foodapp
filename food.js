import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import popularData from './assets/data/popularData';
import favoriteData from './assets/data/favorite';
import typesoffood from './assets/data/typesoffood'
import favoriteitems from './components/foodcomponents/favoriteitems'
import typeoffood from './components/foodcomponents/typesoffood'
import popularitem from './components/foodcomponents/popularitem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';

const Fooddesign = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome
                    name="arrow-left"
                    size={20}
                    color={"#57a7ff"}
                />
                <TextInput
                    placeholder="Serach"
                    style={styles.globalsearch}
                />
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Userprofile')
                }>
                    <Image
                        source={require('./assets/images/profile.png')}
                        style={styles.profileImage}
                    />
                </TouchableOpacity >
            </View>

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <Text style={styles.welcomenote}>Hello, Jane. What would you like to eat ? </Text>
                <View style={styles.innersearch}>
                    <FontAwesome
                        name="search"
                        size={20}
                        color={"#57a7ff"}
                        style={{ marginLeft: 10 }}
                    />
                    <TextInput
                        placeholder="Find your restaurant"
                        style={styles.internalsearch} />
                </View>

                <View style={styles.mainlocation}>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="md-stopwatch-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>New </Text>
                    </View>

                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="ios-location-outline"
                            size={20}
                            color={"#57a7ff"}
                            onPress={() =>
                                navigation.navigate('Userapi')
                            }
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>Mansarover  </Text>
                    </View>
                </View>

                <Text style={styles.typeoffoodheading}>Favourite </Text>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.typeoffoodbox}>
                        <FlatList
                            data={favoriteData}
                            renderItem={favoriteitems}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </ScrollView>

                <Text style={styles.typeoffoodheading}>Types of Food</Text>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.typeoffoodbox}>
                        <FlatList
                            data={typesoffood}
                            renderItem={typeoffood}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </ScrollView>

                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {/* <FlatList
                        data={popularData}
                        renderItem={popularitem}
                        keyExtractor={(item) => item.id}
                    /> */}
                    {popularData.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() =>
                                navigation.navigate('Details', {
                                    item: item,
                                })
                            }>
                            <View
                                style={[
                                    styles.popularCardWrapper,
                                    {
                                        marginTop: item.id == 1 ? 10 : 20,
                                    },
                                ]}>
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <MaterialCommunityIcons
                                                name="crown"
                                                size={12}
                                                color={colors.primary}
                                            />
                                            <Text style={styles.popularTopText}>top of the week</Text>
                                        </View>
                                        <View style={styles.popularTitlesWrapper}>
                                            <Text style={styles.popularTitlesTitle}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.popularTitlesWeight}>
                                                Weight {item.weight}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Feather name="plus" size={10} color={colors.textDark} />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons
                                                name="star"
                                                size={10}
                                                color={colors.textDark}
                                            />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fbff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        alignItems: 'center'
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    globalsearch: {
        width: '70%',
        backgroundColor: '#f8fbff',
        textAlign: 'center'
    },
    welcomenote: {
        marginTop: 25,
        fontSize: 30,
        width: '70%',
        fontWeight: "bold",
        color: '#3f424c',

    },
    internalsearch: {
        marginLeft: 20,
        color: '#aeb0b5'
    },
    innersearch: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },
    mainlocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    innerlocation: {
        backgroundColor: '#f5f7fc',
        padding: 20,
        width: 150,
        flexDirection: 'row',
        paddingTop: 20,
        shadowColor: "#ffffff",
        justifyContent: 'center',
        borderRadius: 10
    },
    typeoffoodbox: {
        flexDirection: 'row',
        marginTop: 10
    },
    typeoffoodheading: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    popularWrapper: {
        marginTop: 20
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },



    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        marginTop: 10
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark,
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.textDark,
        // marginLeft: 5,
    },

    popularCardImage: {
        width: 170,
        height: 125,
        resizeMode: 'contain',
        // marginRight: 50,
        // backgroundColor: 'red'
    },
})
export default Fooddesign