import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { COLORS } from "../../constants";
import SMSVerifyCode from 'react-native-sms-verifycode'
import LinearGradient from "react-native-linear-gradient";
import {styles} from './../Verification/Styles'

export default function Verification({ route,navigation }) {
    const [verificationCode, setVerificationCode] = useState(null);

    const [mobileNo, setMobileNo] = useState(null);
 
    useEffect(()=>{
      setMobileNo(route.params.mobileNo)
    },[])


    const onInputCompleted = (text) => {
        setVerificationCode(text)
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.subContainer}>
                    <Text style={styles.haderTitle}>
                        Enter verification code
                    </Text>

                    <Text style={styles.haderDescription}>
                        Enter the code below to verify your identity.
                    </Text>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginStart: 50, marginEnd: 50 }}>
                        <SMSVerifyCode
                            verifyCodeLength={4}
                            focusedCodeViewBorderColor="#000000"
                            codeViewBorderWidth={2}
                            containerBackgroundColor={'transparent'}
                            codeViewBorderRadius={10}
                            codeFontSize={15}
                            containerPaddingVertical={10}
                            containerPaddingHorizontal={50}
                            codeViewWidth={50}
                            onInputCompleted={onInputCompleted}

                        />
                    </View>
                    {/* Verification Button */}
                    <TouchableOpacity onPress={() => navigation.navigate('Profile',{mobileNo:mobileNo})}>
                        <View style={styles.verificationBtnView}>
                            <LinearGradient
                                colors={['#CEC265', '#9D8E19']}
                                style={styles.btnGradientVerify}
                                start={{ x: 0.5, y: 0.5 }}>
                                <Text style={styles.txtVerificationCode}>
                                    Verify
                                </Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>

                    {/* Text Resend */}

                    <Text style={styles.txtResend}>
                        Resend
                    </Text>

                </View>

            </ScrollView>
        </View>
    )
}

