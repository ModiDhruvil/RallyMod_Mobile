import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { IMAGES, ICONS, COLORS } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import CustomeProgress from "../../utils/CustomeProgress";
import { BottomSheet } from "react-native-btr";
import { checkMultiplePermissions } from "../../utils/permissions";
import { PERMISSIONS } from 'react-native-permissions';
import * as ImagePicker from "react-native-image-picker"
import { setItem } from "../../utils/LocalStorage";
import {styles} from './../Profile/Styles'




const permissions =
    Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.CAMERA]
        : [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];

export default function Profile({ route, navigation }) {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstName, setFirstname] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [mobileNo, setMobileNo] = useState(null);
    const [vin, setVin] = useState(null);
    const [year, setYear] = useState(null);
    const [model, setModel] = useState(null);
    const [color, setColor] = useState(null);
    const [lincensePlate, setLincensePlate] = useState(null);
    const [loading, setLoading] = React.useState(false);
    const [visible, setVisible] = useState(false);
    const [profileImg, setProfileImg] = useState(null);
    const [linceseNumberImg, setlinceseNumberImg] = useState(null);
    const [fromProfile, setFromProfile] = useState(false);

    function toggle() {
        setVisible((visible) => !visible);
    }

    useEffect(() => {
        setMobileNo(route.params.mobileNo)
    }, [])

    // Check Permission

    const checkPermission = async (value) => {
        const isPermissionGranted = await checkMultiplePermissions(permissions);
        if (isPermissionGranted) {
            if (value === 'CAMERA') {
                setVisible(false)
                cameraLaunch()
            } else if (value === 'GALLERY') {
                setVisible(false)
                galleryLaunch()
            }
        } else {
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

    const cameraLaunch = () => {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            maxWidth: 500,
            maxHeight: 500,
            quality: 0.5

        };

        ImagePicker.launchCamera(options, (res) => {

            console.log('Response = ', res);

            if (res.didCancel) {

                console.log('User cancelled image picker');

            } else if (res.error) {

                console.log('ImagePicker Error: ', res.error);

            } else if (res.customButton) {

                console.log('User tapped custom button: ', res.customButton);

                alert(res.customButton);

            } else {
                const source = { uri: res.uri };
                console.log(source)
                console.log('mehul_camera', JSON.stringify(res.assets[0].uri));
                fromProfile === true ? setProfileImg(res.assets[0].uri) : setlinceseNumberImg(res.assets[0].uri)
            }

        });

    }

    const galleryLaunch = () => {

        let options = {

            storageOptions: {

                skipBackup: true,

                path: 'images',

            },
            maxWidth: 500,
            maxHeight: 500,
            quality: 0.5

        };


        ImagePicker.launchImageLibrary(options, (res) => {

            console.log('Response = ', res);

            if (res.didCancel) {

                console.log('User cancelled image picker');

            } else if (res.error) {

                console.log('ImagePicker Error: ', res.error);

            } else if (res.customButton) {

                console.log('User tapped custom button: ', res.customButton);

                alert(res.customButton);

            } else {

                const source = { uri: res.uri };
                console.log(source)

                console.log('mehul_gallery', JSON.stringify(res.assets[0].uri));
                // isLicensePlate ? setLicensePlate(res.assets[0].uri) : setProfileUri(res.assets[0].uri)
                fromProfile === true ? setProfileImg(res.assets[0].uri) : setlinceseNumberImg(res.assets[0].uri)



            }

        });

    }
    const callSignupApi = async () => {
        setLoading(true)
        var formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('username', userName);
        formData.append('email', email);
        formData.append('mobile', mobileNo);
        formData.append('password', password);
        formData.append('user_role', 4);
        formData.append('car_make', '');
        formData.append('car_vin', vin);
        formData.append('car_year', year);
        formData.append('car_model', model);
        formData.append('car_colour', color);
        formData.append('license_plate_number', lincensePlate);
        formData.append('created_from', 'Hello');
        formData.append('status', 1);
        formData.append('profile_image', {
            uri: Platform.OS === 'android' ? profileImg : `file:///${profileImg}`,
            name: "image.jpg",
            type: "image/jpeg",
        });
        formData.append('driving_license_photo', {
            uri: Platform.OS === 'android' ? linceseNumberImg : `file:///${linceseNumberImg}`,
            name: "image.jpg",
            type: "image/jpeg",
        });

        await axios.post('signup', formData, {
            headers: {
                'Content-Type': "multipart/form-data",
            }
        })
            .then(function (response) {
                console.log(response);
                setItem('isLogin', "true")
                setItem('token', response.data.data.token)
                setLoading(false)
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeMain' }]
                })
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
            });
    }
    return (
        <View style={styles.container}>
            <BottomSheet
                visible={visible}
                onBackButtonPress={toggle}
                onBackdropPress={toggle}
            >
                <View style={styles.uploadImgWrapper}>
                <Text style={{ color: COLORS.F_000000, fontSize: 16, textAlign: 'center', marginTop: 20, fontFamily: 'Montserrat-Bold' }}>Select From</Text>
                    <TouchableOpacity onPress={() => checkPermission('CAMERA')}>
                        <Text style={{ backgroundColor: '#CEC265', color: 'white', padding: 10, borderRadius: 8, marginTop: 30, textAlign: 'center' }}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => checkPermission('GALLERY')}>
                        <Text style={{ backgroundColor: '#CEC265', color: 'white', padding: 10, borderRadius: 8, marginTop: 30, textAlign: 'center' }}>
                            Gallery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <Text style={{ backgroundColor: COLORS.F_B1B1B1, color: 'black', padding: 10, borderRadius: 8, marginTop: 30, textAlign: 'center' }}>
                            Cancel
                        </Text>
                    </TouchableOpacity>


                </View>
            </BottomSheet>
            <ScrollView>
                <View style={styles.subContainer}>
                    <Image source={IMAGES.profile_top}
                        resizeMode='cover'
                        style={{ width: '100%', height: 200, }} />

                    <View style={{ width: 120, height: 120, marginTop: -60, justifyContent: 'center', alignItems: 'center', borderRadius: 80, overflow: 'hidden' }}>
                        <Image resizeMode={"contain"} style={{ width: 100, height: 100, backgroundColor: '#fafafa', justifyContent: 'flex-end', position: 'absolute', borderRadius: 80, overflow: 'hidden', resizeMode: 'cover' }} source={profileImg ? { uri: profileImg } : IMAGES.profile_dummy}
                        />


                        <TouchableOpacity onPress={() => { setVisible(true), setFromProfile(true) }}>
                            <Image style={{ alignSelf: 'flex-end', width: 30, height: 30, bottom: 0, marginStart: 83, marginTop: 35 }} source={ICONS.update_profile} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.txtUserName}>John Denny</Text>
                </View>
                <View style={styles.childContainer}>
                    <Text style={styles.editTitle}>General Information</Text>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="User Name"
                            value={userName}
                            onChangeText={text => setUserName(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Password"
                            value={confPassword}
                            onChangeText={text => setConfPassword(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>




                    <Text style={styles.editTitle}>Personal Information</Text>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="First Name"
                            value={firstName}
                            onChangeText={text => setFirstname(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>


                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Last Name"
                            value={lastName}
                            onChangeText={text => setLastName(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Email Address"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Mobile No."
                            value={mobileNo}
                            editable={false}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <Text style={styles.editTitle}>Car Details</Text>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="VIN"
                            value={vin}
                            onChangeText={text => setVin(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Year"
                            value={year}
                            onChangeText={text => setYear(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Model"
                            value={model}
                            onChangeText={text => setModel(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Color"
                            value={color}
                            onChangeText={text => setColor(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="License Plate"
                            value={lincensePlate}
                            onChangeText={text => setLincensePlate(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <TouchableOpacity onPress={() => { setVisible(true), setFromProfile(false) }}>
                        <Image
                            source={linceseNumberImg ? { uri: linceseNumberImg } : IMAGES.browse_file}
                            style={{ width: 105, height: 90, resizeMode: 'cover', marginTop: 20, borderRadius: 10 }} />

                    </TouchableOpacity>




                </View>
                {/* footer */}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btnSaveClick} onPress={() => callSignupApi()}>
                        <LinearGradient
                            colors={['#CEC265', '#9D8E19']}
                            style={styles.btnGradient}
                            start={{ x: 0.5, y: 0.5 }}>
                            <Text style={styles.btnSave}>
                                Save
                            </Text>
                        </LinearGradient>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCancleClick} onPress={() => navigation.goBack()}>
                        <Text style={styles.btnCancel}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            {loading ? <View style={styles.loading}>
                <CustomeProgress />
            </View> : null}
        </View>
    )
}

