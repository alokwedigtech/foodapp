import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Fooddesign from './food';
import Details from './components/Details';
import Userprofile from './components/profile/userprofile'
import Userapi from './components/apidata/user'
import Userinfo from './components/apidata/userinfo'
import Elilogy from './elilogy/elilogy'
import Welcome from './elilogy/screen/welcome'
import Login from './elilogy/screen/login'
import Home from './elilogy/screen/Home'
import Income from './elilogy/screen/Income'
import Recyclewaste from './elilogy/screen/Recyclewaste'
import Homevertical from './elilogy/screen/Homevertical'
import Totalpermonth from './elilogy/screen/totalpermonth'
import News from './elilogy/screen/news'
import Counter from './counter/counter'
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

                <Stack.Screen
                    name="Userinfo"
                    component={Userinfo}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Elilogy"
                    component={Elilogy}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Income"
                    component={Income}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Recyclewaste"
                    component={Recyclewaste}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Homevertical"
                    component={Homevertical}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Totalpermonth"
                    component={Totalpermonth}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="News"
                    component={News}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Counter"
                    component={Counter}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
