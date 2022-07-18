import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, Platform, TouchableOpacity } from 'react-native'
import { ICONS, COLORS } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { BottomSheet } from "react-native-btr";
import axios from "axios";
import { setItem } from "../../utils/LocalStorage";
import CustomeProgress from '../../utils/CustomeProgress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AlertMsg from '../../utils/AlertMsg';
import { styles } from '../Login/Styles';
import { useSelector, useDispatch } from 'react-redux';
import ApiLogin from '../Login/ApiLogin'
import { setUserName,setPassword } from '../../redux/actions/LoginAction';


export default function Login({ navigation }) {
    const [visible, setVisible] = useState(false);
    // const [email, setEmail] = useState(null);
    // const [password, setPassword] = useState(null);
    const [hidePass, setHidePass] = useState(true);

    const dispatch = useDispatch();
    const data = useSelector((state) => state.ApiReducer.data);
    const loading = useSelector((state) => state.ApiReducer.loading);
    const { userName, password } = useSelector(state => state.LoginReducer);
    
    function toggle() {
        setVisible((visible) => !visible);
    }

    const isValid = () => {
        if (userName === null) {
            AlertMsg('Please enter username/mobile')
        } else if (password === null) {
            AlertMsg('Please enter password')
        } else if (password.length <= 4) {
            AlertMsg('Please enter password min 4 digit')
        } else {
            dispatch(ApiLogin(userName, password,navigation))
        }
    }

  

    return (
        <View style={styles.container}>
            {/* BottomSheet for Forgot password */}
            <BottomSheet
                visible={visible}
                onBackButtonPress={toggle}
                onBackdropPress={toggle}
            >
                <View style={styles.forgotPassWrapper}>
                    <Text style={{ color: COLORS.F_000000, fontSize: 16, textAlign: 'center', marginTop: 20, fontFamily: 'Montserrat-Bold' }}>Forgot Password</Text>

                    <TextInput
                        style={[styles.emailFogotPass]}
                        placeholder="Enter Email"
                        placeholderTextColor='gray'
                    />

                    <View style={styles.loginBtnViewBottomSheet}>
                        <LinearGradient
                            colors={['#CEC265', '#9D8E19']}
                            style={styles.btnGradientLogin}
                            start={{ x: 0.5, y: 0.5 }}>
                            <Text style={styles.txtLogin}>
                                Send
                            </Text>
                        </LinearGradient>
                    </View>
                </View>
            </BottomSheet>
            <ScrollView>
                <View style={styles.subContainer}>
                    <Text style={styles.txtLoginHeader}>
                        Login
                    </Text>
                    <Text style={styles.txtLoginDescription}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing,
                        lorem ipsum dolorsed diam nonumy amet eirmod.
                    </Text>
                    {/* Edit Filed UserName */}
                    <Text style={styles.txtUserName}>
                        Username
                    </Text>
                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder=""
                            value={userName}
                            onChangeText={text => dispatch(setUserName(text))}
                        />
                        <Image
                            source={ICONS.userNameCheck}
                            style={styles.ImageStyle}
                        />
                    </View>
                    {/* Edit Filed Password */}
                    <Text style={styles.txtPassword}>
                        Password
                    </Text>
                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editUserName]}
                            placeholder=""
                            value={password}
                            secureTextEntry={hidePass ? true : false}
                            onChangeText={text => dispatch(setPassword(text))}
                        />
                        <FontAwesome5
                            style={styles.ImageStyle}
                            name={hidePass ? 'eye-slash' : 'eye'}
                            size={15}
                            color="black"
                            onPress={() => setHidePass(!hidePass)}
                        />
                    </View>
                    {/* Forgot Password Text */}
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Text style={styles.txtForgotPass}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
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
            <TouchableOpacity on onPress={() => isValid()}>
                <View style={styles.loginBtnView}>
                    <LinearGradient
                        colors={['#CEC265', '#9D8E19']}
                        style={styles.btnGradientLogin}
                        start={{ x: 0.5, y: 0.5 }}>
                        <Text style={styles.txtLogin}>
                            Login
                        </Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
            {loading ? <View style={styles.loading}>
                <CustomeProgress />
            </View> : null}

        </View>
    )
}
