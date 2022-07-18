import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { IMAGES } from "../../constants";


export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            checkUserLogin()
        }, 3000);
    }, []);


    //CheckUserLogin 
    const checkUserLogin = async () => {
        const value = await AsyncStorage.getItem('isLogin');
        if (value === null) {
            navigation.navigate('LoginSignUp')
        } else {
            navigation.navigate('HomeMain')
        }
    }


    return (
        <View style={styles.constainer}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={IMAGES.splash}
                resizeMode="cover"
                style={{ flex: 1, width: '100%', height: '100%' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    }
})