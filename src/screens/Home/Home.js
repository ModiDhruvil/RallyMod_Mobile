import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeBottom from '../HomeBottom/HomeBottom';
import RallyBottom from '../RallyBottom/RallyBottom';
import { COLORS, ICONS } from '../../constants';
import SettingBottom from '../SettingBottom/SettingBottom';
const Tab = createBottomTabNavigator();


export default function Home() {


    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#CEC265',
                tabBarInactiveTintColor: COLORS.F_B1B1B1,
                tabBarStyle: {
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    height: 65,
                }
            }}

        >
            {/* User Detail */}
            <Tab.Screen
                name="RallyTab"
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ICONS.user_bottom}
                            tintColor={color}
                            style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: color }}
                        />
                    )
                }}
                component={RallyBottom} />
            {/* Home Tab */}
            <Tab.Screen
                name="HomeTab"
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 20, // space from bottombar
                                height: 50,
                                width: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={ICONS.home_bottom}
                                style={{ height: 100, width: 100 }}
                            />
                        </View>
                    )
                }}
                component={HomeBottom} />
            {/* Setting Tab */}
            <Tab.Screen
                name="SettingTab"
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Image
                            tintColor={color}
                            source={ICONS.setting_bottom}
                            style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: color }}
                        />
                    )
                }}
                component={SettingBottom} />

        </Tab.Navigator>
    )
}



