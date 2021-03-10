import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import colors from '../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Elilogy = ({ navigation, route }) => {
    // const { item } = route.params;

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

            <View style={styles.mainlocation}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Welcome')
                }>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="md-stopwatch-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>Welcome </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('Welcome')
                }>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="ios-location-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>Login  </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.mainlocation}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Counter')
                }>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="md-stopwatch-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>Counter </Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('News')
                }>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="ios-location-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>News  </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.mainlocation}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Totalpermonth')
                }>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="md-stopwatch-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>Total per month </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('Income')
                }>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="ios-location-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>Income  </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.mainlocation}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Homevertical')
                }>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="md-stopwatch-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>Homevertical </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('Recyclewaste')
                }>
                    <View style={styles.innerlocation}>
                        <Ionicons
                            name="ios-location-outline"
                            size={20}
                            color={"#57a7ff"}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 9 }}>Recycle waste  </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        marginHorizontal: 20
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
    mainlocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 60,
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
});
export default Elilogy
