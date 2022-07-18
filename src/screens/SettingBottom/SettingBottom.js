import React, { useState, useEffect, isValidElement } from "react";
import { View, Text, ScrollView, ImageBackground, Image, Switch, TouchableOpacity, Alert, Share, TextInput } from 'react-native'
import { IMAGES, ICONS, COLORS } from "../../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomeProgress from "../../utils/CustomeProgress";
import { BottomSheet } from "react-native-btr";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from "react-native-linear-gradient";
import AlertMsg from '../../utils/AlertMsg';
import {styles} from './../SettingBottom/Styles'

export default function SettingBottom({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = React.useState(false);
    const [visible, setVisible] = useState(false);
    const [passwordCurrent, setPasswordCurrent] = useState(null);
    const [passwordOld, setPasswordOld] = useState(null);
    const [passwordNew, setPasswordNew] = useState(null);
    const [hidePassCurrent, setHidePassCurrent] = useState(true);
    const [hidePass, setHidePass] = useState(true);
    const [hidePassConfirm, setHidePassConfirm] = useState(true);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    function toggle() {
        setVisible((visible) => !visible);
    }

    useEffect(() => {
        getToken()
    }, [])

    const getToken = async () => {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
            setToken(JSON.parse(value))
        }
    }

    function logoutDialog() {
        Alert.alert(
            "Log Out",
            "Are you sure you want to Log out?? ",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Log Out", onPress: () => callLogoutApi() }
            ]
        );
    }

    const callLogoutApi = async () => {
        setLoading(true)
        await axios.get('logout', {
            headers: {
                'Authorization': 'Bearer ' + `${token}`
            }
        })
            .then(function (response) {
                setLoading(false)
                clearAllData()
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }]
                })

            })
            .catch(function (error) {
                setLoading(false)
                console.log(error);
            });
    }

    const clearAllData = () => {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => console.log('success'))
    }

    const isValid = () => {
        if (passwordCurrent === null) {
            AlertMsg('Please enter current password.')
        } else if (passwordCurrent.length <= 4) {
            AlertMsg('Please enter password min 4 digit.')
        } else if (passwordNew === null) {
            AlertMsg('Please enter new password.')
        }else if (passwordNew.length <= 4) {
            AlertMsg('Please enter password min 4 digit.')
        } else if (passwordOld === null) {
            AlertMsg('Please enter new password.')
        }else if (passwordOld.length <= 4) {
            AlertMsg('Please enter password min 4 digit.')
        }else{
            callChangePasswordApi()
        }

    }

    const callChangePasswordApi = async () => {
        setVisible(false)
        setLoading(true)
        await axios.post('change-password', {
            oldpassword: passwordCurrent,
            newpassword: passwordNew
        }, {
            headers: {
                'Authorization': 'Bearer ' + `${token}`
            },

        })
            .then(function (response) {
                setLoading(false)
                AsyncStorage.removeItem('isLogin'),
                    AsyncStorage.removeItem('token'),
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }]
                    })

            })
            .catch(function (error) {
                setLoading(false)
                console.log(error);
            });
    }






    function deleteAccountDialog() {
        Alert.alert(
            "Delete Account",
            "Are you sure you want to Delete Account?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Delete", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    function shareApp() {
        let text = 'Want more buzz around your photos on Insta, Facebook, Twitter, Whatsapp posts?\n\nLet\'s make your stories get more eyeballs..\nDownload TagWag App '
        if (Platform.OS === 'android')
            text = text.concat('https://hackeruna.com')
        else
            text = text.concat('http://itunes.apple.com/app/id1453977874')

        Share.share({
            subject: 'Download TagWag App Now',
            title: 'Download TagWag App Now',
            message: text,
            url: 'app://tagwag',

        }, {
            // Android only:
            dialogTitle: 'Share TagWag App',
            // iOS only:
            excludedActivityTypes: []
        })
    }

    return (
        <View style={styles.container}>
            <BottomSheet
                visible={visible}
                onBackButtonPress={toggle}
                onBackdropPress={toggle}
            >
                <View style={styles.forgotPassWrapper}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', textAlign: 'center', margin: 10 }}> Change Password</Text>

                    {/* Current Password */}
                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder="Current Password"
                            placeholderTextColor={COLORS.F_B1B1B1}
                            value={passwordCurrent}
                            secureTextEntry={hidePassCurrent ? true : false}
                            onChangeText={text => setPasswordCurrent(text)}
                        />
                        <FontAwesome5
                            style={styles.ImageStyle}
                            name={hidePassCurrent ? 'eye-slash' : 'eye'}
                            size={18}
                            color="black"
                            onPress={() => setHidePassCurrent(!hidePassCurrent)}
                        />
                    </View>


                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder="Password"
                            placeholderTextColor={COLORS.F_B1B1B1}
                            value={passwordNew}
                            secureTextEntry={hidePass ? true : false}
                            onChangeText={text => setPasswordNew(text)}
                        />
                        <FontAwesome5
                            style={styles.ImageStyle}
                            name={hidePass ? 'eye-slash' : 'eye'}
                            size={18}
                            color="black"
                            onPress={() => setHidePass(!hidePass)}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder="Confirm Password"
                            placeholderTextColor={COLORS.F_B1B1B1}
                            value={passwordOld}
                            secureTextEntry={hidePassConfirm ? true : false}
                            onChangeText={text => setPasswordOld(text)}
                        />
                        <FontAwesome5
                            style={styles.ImageStyle}
                            name={hidePassConfirm ? 'eye-slash' : 'eye'}
                            size={18}
                            color="black"
                            onPress={() => setHidePassConfirm(!hidePassConfirm)}
                        />
                    </View>

                    <View style={styles.loginBtnViewBottomSheet}>
                        <TouchableOpacity onPress={() => isValid()}>
                            <LinearGradient
                                colors={['#CEC265', '#9D8E19']}
                                style={styles.btnGradientLogin}
                                start={{ x: 0.5, y: 0.5 }}>
                                <Text style={styles.txtLogin}>
                                    Save
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
            <ScrollView>
                <ImageBackground
                    source={IMAGES.rally_top_banner}
                    resizeMode="cover"
                    style={{ width: '100%', height: 50 }} />

                <Text style={styles.header}>Settings</Text>

                <View style={styles.settingWrapper}>

                    {/* Notification */}
                    <TouchableOpacity onPress={() => navigation.navigate('NotificationSetting')}>
                        <View style={styles.settingItem}>
                            <Image
                                source={ICONS.notification}
                                style={styles.settingItemImg} />
                            <Text style={styles.settingItemText}>Notification</Text>
                            <Image
                                source={ICONS.forward}
                                style={styles.forwardImg} />
                        </View>

                        <View
                            style={{
                                borderBottomColor: COLORS.F_CDCDCD,
                                borderBottomWidth: 1,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    {/* Help Center */}
                    <View style={styles.settingItem}>
                        <Image
                            source={ICONS.help}
                            style={styles.settingItemImg} />
                        <Text style={styles.settingItemText}>Help Center</Text>
                        <Image
                            source={ICONS.forward}
                            style={styles.forwardImg} />
                    </View>
                    <View
                        style={{
                            borderBottomColor: COLORS.F_CDCDCD,
                            borderBottomWidth: 1,
                            marginTop: 10,
                        }}
                    />
                    {/* Change Password */}
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <View style={styles.settingItem}>
                            <Image
                                source={ICONS.changepassword}
                                style={styles.settingItemImg} />
                            <Text style={styles.settingItemText}>Change Password</Text>
                            <Image
                                source={ICONS.forward}
                                style={styles.forwardImg} />
                        </View>
                        <View
                            style={{
                                borderBottomColor: COLORS.F_CDCDCD,
                                borderBottomWidth: 1,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    {/* Language */}
                    <TouchableOpacity onPress={() => navigation.navigate('LanguageSetting')}>
                        <View style={styles.settingItem}>
                            <Image
                                source={ICONS.langauge}
                                style={styles.settingItemImg} />
                            <Text style={styles.settingItemText}>Language</Text>
                            <Image
                                source={ICONS.forward}
                                style={styles.forwardImg} />
                        </View>

                        <View
                            style={{
                                borderBottomColor: COLORS.F_CDCDCD,
                                borderBottomWidth: 1,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>

                    {/* Ads */}
                    <View style={styles.settingItem}>
                        <Image
                            source={ICONS.ads}
                            style={styles.settingItemImg} />
                        <Text style={styles.settingItemText}>Ads</Text>
                        <View style={styles.swtichWrapper}>
                            <Switch
                                trackColor={{ false: "#CDCDCD", true: "#CDCDCD" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#ffffff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: COLORS.F_CDCDCD,
                            borderBottomWidth: 1,
                            marginTop: 10,
                        }}
                    />
                    {/* Privacy Policy */}
                    <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicySetting')}>
                        <View style={styles.settingItem}>
                            <Image
                                source={ICONS.privacypolicy}
                                style={styles.settingItemImg} />
                            <Text style={styles.settingItemText}>Privacy Policy</Text>
                            <Image
                                source={ICONS.forward}
                                style={styles.forwardImg} />
                        </View>
                        <View
                            style={{
                                borderBottomColor: COLORS.F_CDCDCD,
                                borderBottomWidth: 1,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    {/* About */}
                    <TouchableOpacity onPress={() => navigation.navigate('AboutSetting')}>
                        <View style={styles.settingItem}>
                            <Image
                                source={ICONS.about}
                                style={styles.settingItemImg} />
                            <Text style={styles.settingItemText}>About</Text>
                            <Image
                                source={ICONS.forward}
                                style={styles.forwardImg} />
                        </View>
                        <View
                            style={{
                                borderBottomColor: COLORS.F_CDCDCD,
                                borderBottomWidth: 1,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    {/* Share App */}
                    <TouchableOpacity onPress={() => { shareApp() }}>
                        <View style={styles.settingItem}>
                            <Image
                                source={ICONS.shareapp}
                                style={styles.settingItemImg} />
                            <Text style={styles.settingItemText}>Share App</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: COLORS.F_CDCDCD,
                                borderBottomWidth: 1,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    {/* Rate App */}
                    <View style={styles.settingItem}>
                        <Image
                            source={ICONS.rateapp}
                            style={styles.settingItemImg} />
                        <Text style={styles.settingItemText}>Rate App</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: COLORS.F_CDCDCD,
                            borderBottomWidth: 1,
                            marginTop: 10,
                        }}
                    />
                    {/* Logout */}
                    <TouchableOpacity onPress={() => { logoutDialog() }}>
                        <View style={styles.settingItem}>
                            <Image
                                source={ICONS.logout}
                                style={styles.settingItemImg} />
                            <Text style={styles.settingItemText}>Logout</Text>

                        </View>
                        <View
                            style={{
                                borderBottomColor: COLORS.F_CDCDCD,
                                borderBottomWidth: 1,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    {/* Delete Account */}
                    <TouchableOpacity onPress={() => { deleteAccountDialog() }}>
                        <View style={styles.settingItem}>
                            <Image
                                source={ICONS.deleteaccount}
                                style={styles.settingItemImg} />
                            <Text style={styles.settingItemText}>Delete Account</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: COLORS.F_CDCDCD,
                                borderBottomWidth: 1,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </ScrollView>
            {loading ? <View style={styles.loading}>
                <CustomeProgress />
            </View> : null}
        </View>
    )

}

