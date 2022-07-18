import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { IMAGES, ICONS, COLORS } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BottomSheet } from "react-native-btr";
import CustomeProgress from "../../utils/CustomeProgress";
import LinearGradient from "react-native-linear-gradient";
import { checkMultiplePermissions } from "../../utils/permissions";
import { PERMISSIONS } from 'react-native-permissions';
import * as ImagePicker from "react-native-image-picker"
import { styles } from '../RallyBottom/Styles'
import { useSelector, useDispatch } from 'react-redux';
import ApiRallyBottomGet from "./ApiRallyBottomGet";
import ApiRallyBottomPost from "./ApiRallyBottomPost";
import { useFocusEffect } from '@react-navigation/native';




const permissions =
    Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.CAMERA]
        : [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];


export default function RallyBottom() {

    const [userName, setUserName] = useState('');
    const [userFullName, setUserFullName] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [vin, setVin] = useState('');
    const [year, setYear] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [linceseNumberImg, setlinceseNumberImg] = useState('');
    const [lincensePlate, setLincensePlate] = useState('');
    const [isEditProfile, setIsEditProfile] = React.useState(false);
    const [visible, setVisible] = useState(false);
    const [token, setToken] = useState('');
    const [fromProfile, setFromProfile] = useState(false);


    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ApiReducer.loading);
    const data = useSelector((state) => state.ApiReducer.data);
      function toggle() {
        setVisible((visible) => !visible);
    }


    useEffect(() => {
        if (data) {
            setUserFullName(data ? data.data.full_name: null)
            setUserName(data ? data.data.username : null)
            setFirstname(data ? data.data.first_name : null)
            setLastName(data ? data.data.last_name : null)
            setEmail(data ? data.data.email : null)
            setMobileNo(data ? data.data.mobile : null)
            setVin(data ? data.data.car_vin : null)
            setYear(data ? data.data.car_year : null)
            setModel(data ? data.data.car_model : null)
            setColor(data ? data.data.car_colour : null)
            setLincensePlate(data ? data.data.license_plate_number : null)
            setlinceseNumberImg(data ? data.data.driving_license_image ? data.data.driving_license_image.preview_url : null : null)
            setProfileImg(data ? data.data.profile_image ? data.data.profile_image.preview_url : null : null)
        } 
    }, [data]);

    useFocusEffect(
        React.useCallback(() => {
            getToken()
        }, [])
    );

   
    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                console.log(value)
                setToken(JSON.parse(value))
                dispatch(ApiRallyBottomGet(JSON.parse(value)))
            }
        } catch (error) {
            console.log(error)
        }
    }








    // const callGetProfileApi = async (token) => {
    //     console.log(token)
    //     await axios.get('get-user-details', {
    //         headers: {
    //             'Authorization': 'Bearer ' + `${token}`
    //         }
    //     })
    //         .then(function (response) {
    //             setUserName(response.data.data.username)
    //             setFirstname(response.data.data.first_name)
    //             setLastName(response.data.data.last_name)
    //             setEmail(response.data.data.email)
    //             setMobileNo(response.data.data.mobile)
    //             setVin(response.data.data.car_vin)
    //             setYear(response.data.data.car_year)
    //             setModel(response.data.data.car_model)
    //             setColor(response.data.data.car_colour)
    //             setLincensePlate(response.data.data.license_plate_number)
    //             setlinceseNumberImg(response.data.data.driving_license_image ? response.data.data.driving_license_image.preview_url : null)
    //             setProfileImg(response.data.data.profile_image? response.data.data.profile_image.preview_url : null )
    //             setLoading(false)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             setLoading(false)
    //         });
    // }


    // const callUpdateApi = async () => {
    //     // setLoading(true)
    //     var formData = new FormData();
    //     formData.append('first_name', firstName);
    //     formData.append('last_name', lastName);
    //     formData.append('username', userName);
    //     formData.append('user_role', 2);
    //     formData.append('vin', vin);
    //     formData.append('car_year', year);
    //     formData.append('car_model', model);
    //     formData.append('car_colour', color);
    //     formData.append('license_plate_number', licensePlate);
    //     formData.append('created_from', 'Hello');
    //     formData.append('profile_image', {
    //         uri: Platform.OS === 'android' ? profileImg : `file:///${profileImg}`,
    //         name: "image.jpg",
    //         type: "image/jpeg",
    //     });
    //     formData.append('driving_license_image', {
    //         uri: Platform.OS === 'android' ? licensePlateImg : `file:///${licensePlateImg}`,
    //         name: "image.jpg",
    //         type: "image/jpeg",
    //     });



    //     await axios.post('update-profile', formData,
    //         {
    //             headers: {
    //                 'Content-Type': "multipart/form-data",
    //                 'Authorization': 'Bearer ' + `${token}`
    //             }
    //         })
    //         .then(function (response) {
    //             setUserName(response.data.data.username)
    //             setFirstname(response.data.data.first_name)
    //             setLastName(response.data.data.last_name)
    //             setEmail(response.data.data.email)
    //             setMobileNo(response.data.data.mobile)
    //             setVin(response.data.data.car_vin)
    //             setYear(response.data.data.car_year)
    //             setModel(response.data.data.car_model)
    //             setColor(response.data.data.car_colour)
    //             setLincensePlate(response.data.data.license_plate_number)
    //             setProfileImg(response.data.data.profile_image.preview_url)
    //             setlinceseNumberImg(response.data.data.driving_license_image.preview_url)
    //             // setLoading(false)
    //             setIsEditProfile(false)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //             // setLoading(false)
    //         });
    // }



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
                fromProfile === true ? setProfileImg(res.assets[0].uri) : setlinceseNumberImg(res.assets[0].uri)



            }

        });

    }




    return (
        <View style={styles.container}>
            <BottomSheet
                visible={isEditProfile ? visible : false}
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
                    <View style={{ width: '100%', height: 200, }}>
                        <ImageBackground source={IMAGES.profile_top}
                            resizeMode='cover'
                            style={{ width: '100%', height: 200, justifyContent: 'flex-start', alignItems: 'flex-end' }} >
                            <TouchableOpacity onPress={() => isEditProfile === false ? setIsEditProfile(true) : setIsEditProfile(false)}>
                                <Text style={{ color: 'black', position: 'relative', margin: 10, padding: 10 }}>Edit</Text>
                            </TouchableOpacity>
                        </ImageBackground>


                    </View>

                    <View style={{ width: 120, height: 120, marginTop: -60, justifyContent: 'center', alignItems: 'center', borderRadius: 80, overflow: 'hidden' }}>
                        <Image resizeMode={"contain"} style={{ width: 100, height: 100, backgroundColor: '#fafafa', justifyContent: 'flex-end', position: 'absolute', borderRadius: 80, overflow: 'hidden', resizeMode: 'cover' }}
                            source={isEditProfile ? profileImg ? {uri:profileImg} :IMAGES.profile_dummy : profileImg ? { uri: data.data.profile_image.preview_url } : IMAGES.profile_dummy}
                        />


                        <TouchableOpacity onPress={() => { setVisible(true), setFromProfile(true) }}>
                            <Image style={{ alignSelf: 'flex-end', width: 30, height: 30, bottom: 0, marginStart: 83, marginTop: 35 }} source={ICONS.update_profile} />
                        </TouchableOpacity>
                    </View>



                    <Text style={styles.txtUserName}>{userFullName}</Text>
                </View>
                <View style={styles.childContainer}>
                    <Text style={styles.editTitle}>General Information</Text>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="User Name"
                            value={userName}
                            editable={false}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>



                    <Text style={styles.editTitle}>Personal Information</Text>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="First Name"
                            value={firstName}
                            editable={isEditProfile}
                            onChangeText={(text) => setFirstname(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>


                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Last Name"
                            value={lastName}
                            editable={isEditProfile}
                            onChangeText={(text) => setLastName(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Email Address"
                            value={email}
                            editable={false}
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
                            editable={isEditProfile}
                            onChangeText={(text) => setVin(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Year"
                            value={year}
                            editable={isEditProfile}
                            onChangeText={(text) => setYear(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Model"
                            value={model}
                            editable={isEditProfile}
                            onChangeText={(text) => setModel(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="Color"
                            value={color}
                            editable={isEditProfile}
                            onChangeText={(text) => setColor(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>

                    <View style={styles.viewUserName}>
                        <TextInput
                            style={[styles.editFiled]}
                            placeholder="License Plate"
                            value={lincensePlate}
                            editable={isEditProfile}
                            onChangeText={(text) => setLincensePlate(text)}
                            placeholderTextColor={COLORS.F_C9C9C9}
                        />
                    </View>
                    <TouchableOpacity onPress={() => { setVisible(true), setFromProfile(false) }}>
                        <Image
                            source={isEditProfile ? linceseNumberImg ? { uri: linceseNumberImg } : IMAGES.browse_file: linceseNumberImg ? { uri: data.data.driving_license_image.preview_url } : IMAGES.browse_file}
                            style={{ width: 105, height: 90, resizeMode: 'cover', marginTop: 20, borderRadius: 10 }} />
                    </TouchableOpacity>
                    {/* footer */}
                    {isEditProfile === true ? <View style={styles.footer}>
                        <TouchableOpacity style={styles.btnSaveClick} onPress={()=>{
                            dispatch(ApiRallyBottomPost(firstName,lastName,userName,vin,year,model,color,lincensePlate,profileImg,linceseNumberImg,token)),setIsEditProfile(false)
                        }}>
                            <LinearGradient
                                colors={['#CEC265', '#9D8E19']}
                                style={styles.btnGradient}
                                start={{ x: 0.5, y: 0.5 }}>
                                <Text style={styles.btnSave}>
                                    Update
                                </Text>
                            </LinearGradient>

                        </TouchableOpacity>

                    </View>
                        : null}

                </View>

            </ScrollView>
            {loading ? <View style={styles.loading}>
                <CustomeProgress />
            </View> : null}
        </View>
    )

}

