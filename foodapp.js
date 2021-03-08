import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Fooddesign from './food';
import Details from './components/Details';
import Userprofile from './components/profile/userprofile'
import Userapi from './components/apidata/user'
const Stack = createStackNavigator();

export default function FoodApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Fooddesign"
                    component={Fooddesign}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Userprofile"
                    component={Userprofile}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Userapi"
                    component={Userapi}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
