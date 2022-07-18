import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { IMAGES } from '../../constants';
import { checkMultiplePermissions } from '../../utils/permissions';
import { PERMISSIONS } from 'react-native-permissions';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from '../LoginSignUp/Styles';

const permissions =
    Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.CAMERA]
        : [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];

export default function LoginSignUp({ navigation }) {
    const [isPrivacy, setIsPrivacy] = useState(false);

    useEffect(() => {
        checkPermission()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            checkPrivacy()
        }, [])
    );


    // Check Permission
    const checkPermission = async () => {
        const isPermissionGranted = await checkMultiplePermissions(permissions);
        if (!isPermissionGranted) {
            // Show an alert in case permission was not granted
            Alert.alert(
                'Permission Request',
                'Please allow permission to access the Camera.',
                [
                    {
                        text: 'Go to Settings',
                        onPress: () => {
                            Linking.openSettings();
                        },
                    },
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                ],
                { cancelable: false },
            );
        }
    }

    // Check Privacy Show or Not
    const checkPrivacy = async () => {
        const value = await AsyncStorage.getItem('isPrivacy');
        if (value !== null) {
            setIsPrivacy(JSON.parse(value))
        }
    }
    return (
        <View style={styles.container}>
            {/* Background Image */}
            <ImageBackground
                source={IMAGES.app_bg}
                resizeMode="cover"
                style={styles.backgroundImg} >

                <View style={styles.login_signup_wrapper} >
                    <Text style={styles.txtTitle}>
                        Rallymod
                    </Text>

                    <Text style={styles.txtDescription}>
                        Lörem ipsum vijar mal. Pys enat i dist cykelbarometer en krode. Decikartad ponas.
                    </Text>
                    {/* Button Login */}
                    <TouchableOpacity onPress={() => isPrivacy === 'true' ? navigation.push('Login') : navigation.push('PrivacyPolicy', { formLoginSignup: 'false' })}>
                        <Text style={styles.btnLogin}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    {/* Button Sign Up */}
                    <TouchableOpacity onPress={() => isPrivacy === 'true' ? navigation.push('Signup') : navigation.push('PrivacyPolicy', { formLoginSignup: 'true' })}>
                        <Text style={styles.btnSignup}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    )
}

