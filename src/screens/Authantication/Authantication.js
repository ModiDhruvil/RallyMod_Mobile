import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { COLORS, ICONS } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import AlertMsg from "../../utils/AlertMsg";
import { styles } from "../Authantication/Styles";

export default function Authantication({ route, navigation }) {

    const [mobileNo, setMobileNo] = useState(null);

    useEffect(() => {
        setMobileNo(route.params.mobileNo)
    }, [])


    const checkValidation = () => {
        if (mobileNo === null || mobileNo === '') {
            AlertMsg('Please enter mobile number.')
        } else if (mobileNo !== null ? mobileNo.length < 10 : null) {
            AlertMsg('Please enter valid mobile number.')
        } else {
            navigation.navigate('Verification', { mobileNo: mobileNo })
        }
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.subContainer}>
                    <Text style={styles.haderTitle}>
                        Two-Factor{'\n'}
                        Authentication
                    </Text>

                    <Text style={styles.haderDescription}>
                        We will send you a One-Time verification code to your mobile or email address provided below.
                    </Text>

                    {/* Mobile Number */}
                    <Text style={styles.txtMobileEmail}>
                        Mobile Number
                    </Text>
                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder=""
                            value={mobileNo}
                        />
                    </View>
                    {/* Verification Button */}
                    <TouchableOpacity onPress={() => checkValidation()}>
                        <View style={styles.verificationBtnView}>
                            <LinearGradient
                                colors={['#CEC265', '#9D8E19']}
                                style={styles.btnGradientVerify}
                                start={{ x: 0.5, y: 0.5 }}>
                                <Text style={styles.txtVerificationCode}>
                                    Request Verification Code
                                </Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )

}
