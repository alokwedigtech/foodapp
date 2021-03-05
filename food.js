import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'


const Foodapp = () => {
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
                    style={styles.globalsearch} />
                <Image
                    source={require('./assets/images/profile.png')}
                    style={styles.profileImage}
                />



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



                        <View style={[styles.favouriteitems]}>
                            <Image style={styles.image} source={require('./assets/images/pizzzanew.jpg')}
                            />
                            <Text style={[styles.text, { alignSelf: 'center' }]}>pizzaa</Text>
                        </View>

                        <View style={[styles.favouriteitems]}>
                            <Image style={styles.image} source={require('./assets/images/frise.jpg')}
                            />
                            <Text style={[styles.text, { alignSelf: 'center' }]}>French Fries</Text>
                        </View>

                        <View style={[styles.favouriteitems]}>
                            <Image style={styles.image} source={require('./assets/images/burger.jpg')}
                            />
                            <Text style={[styles.text, { alignSelf: 'center' }]}>burger</Text>
                        </View>

                        <View style={[styles.favouriteitems]}>
                            <Image style={styles.image} source={require('./assets/images/pizzzanew.jpg')}
                            />
                            <Text style={[styles.text, { alignSelf: 'center' }]}>French Fries</Text>
                        </View>

                        <View style={[styles.favouriteitems]}>
                            <Image style={styles.image} source={require('./assets/images/pizzzanew.jpg')}
                            />
                            <Text style={[styles.text, { alignSelf: 'center' }]}>French Fries</Text>
                        </View>

                        <View style={[styles.favouriteitems]}>
                            <Image style={styles.image} source={require('./assets/images/pizzzanew.jpg')}
                            />
                            <Text style={[styles.text, { alignSelf: 'center' }]}>French Fries</Text>
                        </View>


                    </View>
                </ScrollView>

                <Text style={styles.typeoffoodheading}>Types of Food</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.typeoffoodbox}>
                        <View style={[styles.typeoffoodcontent, {
                            backgroundColor: '#278cff'
                        }]} horizontal={true}>
                            <FontAwesome
                                name="pizza-slice"
                                size={20}
                                color={"#fff"}
                                style={styles.iconsset}
                            />
                            <Text style={styles.textwhite}> Pizza</Text>
                            <Text style={styles.textwhite}> 27 Restaurant </Text>
                        </View>
                        <View style={[styles.typeoffoodcontent, {
                            backgroundColor: '#87baff'
                        }]} horizontal={true}>
                            <FontAwesome
                                name="hamburger"
                                size={20}
                                color={"#fff"}
                                style={styles.iconsset}
                            />
                            <Text style={styles.textwhite}>Burger</Text>
                            <Text style={styles.textwhite}> 50 Restaurant</Text>
                        </View>
                        <View style={[styles.typeoffoodcontent, {
                            backgroundColor: '#ff8398'
                        }]} horizontal={true}>
                            <FontAwesome
                                name="pizza-slice"
                                size={20}
                                color={"#fff"}
                                style={styles.iconsset}
                            />
                            <Text style={styles.textwhite}> Sushi</Text>
                            <Text style={styles.textwhite}> 10 Restaurant</Text>
                        </View>
                        <View style={[styles.typeoffoodcontent, {
                            backgroundColor: '#278cff'
                        }]} horizontal={true}>
                            <FontAwesome
                                name="pizza-slice"
                                size={20}
                                color={"#fff"}
                                style={styles.iconsset}
                            />
                            <Text style={styles.textwhite}> Pizza</Text>
                            <Text style={styles.textwhite}> 27 Restaurant</Text>
                        </View>
                        <View style={[styles.typeoffoodcontent, {
                            backgroundColor: '#87baff'
                        }]} horizontal={true}>
                            <FontAwesome
                                name="hamburger"
                                size={20}
                                color={"#fff"}
                                style={styles.iconsset}
                            />
                            <Text style={styles.textwhite}>Burger</Text>
                            <Text style={styles.textwhite}> 50 Restaurant</Text>
                        </View>
                        <View style={[styles.typeoffoodcontent, {
                            backgroundColor: '#ff8398'
                        }]} horizontal={true}>
                            <FontAwesome
                                name="pizza-slice"
                                size={20}
                                color={"#fff"}
                                style={styles.iconsset}
                            />
                            <Text style={styles.textwhite}> Sushi</Text>
                            <Text style={styles.textwhite}> 10 Restaurant</Text>
                        </View>
                    </View>
                </ScrollView>
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
        // paddingHorizontal: 20,
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
        // paddingHorizontal: 20,
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
        // shadowColor: "#ffffff",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.05,
        // shadowRadius: 10,
        // elevation: 2,
        // marginLeft: 10
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
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.05,
        // shadowRadius: 10,
        // elevation: 4,
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
    typeoffoodcontent: {
        backgroundColor: 'red',
        padding: 20,
        margin: 10,
        overflow: 'hidden',
        borderRadius: 10,
        height: 120,
        width: 140

    },
    iconsset: {
        margin: 5,
        alignSelf: 'flex-end'
    },
    textwhite: {
        color: "#fff",
        margin: 2,
        fontWeight: "bold"
    },
    image: {
        // flex: 1,
        resizeMode: "cover",
        // justifyContent: "center",
        height: 140,
        width: 170,
        borderRadius: 15
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        // backgroundColor: "#000000a0"
        bottom: 0,
        position: 'absolute',
        // padding: 10,
        alignContent: 'center'
    },
    favouriteitems: {
        // margin: 15
        borderRadius: 20,
        marginLeft: 15
    }
})
export default Foodapp