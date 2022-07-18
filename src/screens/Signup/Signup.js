import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, Image, Platform, TouchableOpacity, StatusBar } from 'react-native'
import { ICONS, COLORS } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import AlertMsg from '../../utils/AlertMsg';
import {styles} from './../Signup/Styles'


export default function Signup({ navigation }) {

    const [mobileNo, setMobileNo] = useState(null);


    const checkValidation = () => {
        if (mobileNo === null || mobileNo === '') {
            AlertMsg('Please enter mobile number.')
        } else if (mobileNo !== null ? mobileNo.length < 10 : null) {
            AlertMsg('Please enter valid mobile number.')
        } else {
            navigation.navigate('Authantication', { mobileNo: mobileNo })
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.subContainer}>
                    <Text style={styles.txtSignupHeader}>
                        Signup
                    </Text>

                    {/* Edit Filed UserName */}
                    <Text style={styles.txtUserName}>
                        Mobile No.
                    </Text>
                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder=""
                            keyboardType={'numeric'}
                            value={mobileNo}
                            maxLength={10}
                            onChangeText={text => setMobileNo(text)}
                        />
                        <Image
                            source={ICONS.userNameCheck}
                            style={styles.ImageStyle}
                        />
                    </View>

                    {/* Edit Filed Password */}
                    {/* <Text style={styles.txtPassword}>
                        Password
                    </Text>
                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder=""
                        />
                        <Image
                            source={ICONS.passwordShow}
                            style={styles.ImageStyle}
                        />
                    </View> */}

                    {/* Edit Filed Confirm Password */}
                    {/* <Text style={styles.txtPassword}>
                        Confirm Password
                    </Text>
                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder=""
                        />
                        <Image
                            source={ICONS.passwordShow}
                            style={styles.ImageStyle}
                        />
                    </View> */}
                    {/* Line Or */}
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <View
                            style={{
                                flex: 0.45,
                                borderBottomColor: COLORS.F_B1B1B1,
                                borderBottomWidth: 1,
                            }}
                        />
                        <Text style={styles.txtOR}>OR</Text>
                        <View
                            style={{
                                flex: 0.45,
                                borderBottomColor: COLORS.F_B1B1B1,
                                borderBottomWidth: 1,

                            }}
                        />
                    </View>
                    {/* Social Media Button */}
                    <View style={styles.socialMediaLogin}>
                        {Platform.OS === 'ios' ? <View style={styles.appleBtn}>
                            <Image
                                source={ICONS.apple}
                                style={styles.imgSocial} />
                        </View> : null}
                        {/* Apple Button */}

                        {/* Facebook Button */}
                        <View style={styles.facebookBtn}>
                            <Image
                                source={ICONS.facebook}
                                style={styles.imgSocial} />
                        </View>
                        {/* Google Button */}
                        <View style={styles.googleBtn}>
                            <Image
                                source={ICONS.google}
                                style={styles.imgSocial} />
                        </View>

                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => checkValidation()}>
                <View style={styles.loginBtnView}>
                    <LinearGradient
                        colors={['#CEC265', '#9D8E19']}
                        style={styles.btnGradientLogin}
                        start={{ x: 0.5, y: 0.5 }}>
                        <Text style={styles.txtSignup}>
                            Signup
                        </Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        </View>
    )
}

