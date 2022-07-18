import React, { useState, useEffect } from 'react';
import { View,  Text, ImageBackground, Dimensions } from 'react-native'
import { IMAGES } from "../../constants";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyRally from "../MyRally/MyRally";
import AllRally from "../AllRally/AllRally";
import PastRally from "../PastRally/PastRally";
import {styles} from './Styles'
const Tab = createMaterialTopTabNavigator();



export default function HomeBottom({ navigation, route }) {

    const [header, setHader] = useState('All Rally');

    return (
        <View style={styles.container}>
            {/* Top banner Ads */}
            <View>
                <ImageBackground
                    source={IMAGES.rally_top_banner}
                    resizeMode="cover"
                    style={{ width: '100%', height: 50 }} />
            </View>
            {/* Rally Title */}
            <Text style={styles.txtHeader}>
                {header}
            </Text>

            <Tab.Navigator
                initialRouteName="All Rally"
                style={styles.tabLayout}
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: 'white' },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIndicatorStyle: { backgroundColor: '#CEC265', height: 4 },
                    swipeEnabled: false,
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: '500',
                        textTransform: 'none'
                    }

                }}>
                {/* My Rally */}
                <Tab.Screen name="My Rally" component={MyRally}
                    listeners={{
                        tabPress: e => {
                            setHader("My Rally")
                        },
                    }} />
                {/* All Rally */}
                <Tab.Screen name="All Rally" component={AllRally}

                    listeners={{
                        tabPress: e => {
                            setHader("All Rally")
                        },
                    }} />
                {/* Past Rally */}
                <Tab.Screen name="Past Rally" component={PastRally}
                    listeners={{
                        tabPress: e => {
                            setHader("Past Rally")

                        },
                    }} />

            </Tab.Navigator>
        </View>
    )

}

