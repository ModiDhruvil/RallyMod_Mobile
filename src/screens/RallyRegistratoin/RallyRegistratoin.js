import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import { COLORS, ICONS, IMAGES } from '../../constants'
import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import CustomeProgress from '../../utils/CustomeProgress';
import { RadioButton, Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './../RallyRegistratoin/Styles'

export default function RallyRegistration({ route, navigation }) {
    const [loading, setLoading] = React.useState(false);
    const [rallFromDetail, setRallyFromDetail] = React.useState([])
    const [rallFromProduct, setRallyFromProduct] = React.useState([])
    const [rallFromPrice, setRallyFromPrice] = React.useState([])
    const [value, setValue] = React.useState('first');
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [txtData, setTxtData] = React.useState([])



    useEffect(() => {
        getToken()
    }, [])

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                console.log(value)
                callGetRallyAPI(JSON.parse(value))
                setLoading(true)
            }
        } catch (e) {
            // error reading value
        }
    }

    const callGetRallyAPI = async (token) => {
        console.log(token)
        await axios.get('getRallyForm/' + `${route.params.rallyID}`, {
            headers: {
                'Authorization': 'Bearer ' + `${token}`
            }
        })
            .then(function (response) {
                setRallyFromDetail(response.data.data.form)
                setRallyFromProduct(response.data.data.product)
                setRallyFromPrice(response.data.data.level)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
            });
    }

    const CustomeTextInput = (title, index) => {
        return (
            <View key={index.toString()} style={{ flexDirection: 'column' }}>
                <Text style={styles.customeTxt}>{title} </Text>
                <TextInput
                    style={styles.customeTxtInput}
                    placeholder={title}
                    placeholderTextColor={COLORS.F_B1B1B1}
                    onChangeText={text => handleChange(text, index)}
                >

                </TextInput>
            </View>
        )
    }

    const handleChange = (text, index) => {
        let data = []
        data[index] = text;
        setTxtData(data)

    }




    const CustomeRadioButton = (title,index) => {
        return (
            <View key={index.toString()} style={{ flexDirection: 'column' }}>
                <Text style={styles.customeTxt}>{title} </Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginEnd: 10 }}>
                            <Text>First</Text>
                            <RadioButton value="first" />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Second</Text>
                            <RadioButton value="second" />
                        </View>
                    </View>

                </RadioButton.Group>
            </View>
        )
    }

    const ProductList = () => {
        return (
            <View  style={{ flexDirection: 'column', margin: 5 }}>
                {
                    rallFromProduct.map((item, index) => (
                        <View key={index.toString()} style={index % 2 === 0 ? styles.productDetailsItem : styles.productDetailsGray}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Image source={IMAGES.chart}
                                style={styles.productImg} />

                            <Text style={styles.prdouctPrice}>{item.product_name}</Text>
                            <Text style={styles.prdouctPrice}>$ {item.product_price}</Text>

                        </View>
                    ))
                }

            </View>
        )
    }

    const setSelectedRallyPrice = (value) => {
        setSelectedIndex(value)
    }

    const PriceList = () => {
        return (
            <View style={{ flexDirection: 'column', margin: 5 }}>
                {
                    rallFromPrice ? rallFromPrice.map((item, index) => (
                        <View key={index.toString()} style={{ flexDirection: 'column' }}>
                            <View style={index % 2 === 0 ? styles.productDetailsItem : styles.productDetailsGray}>
                                <RadioButton
                                    innerColor={COLORS.F_3B5998}
                                    outerColor={COLORS.F_C9C9C9}
                                    status={selectedIndex === index ? 'checked' : 'unchecked'}
                                    onPress={() => setSelectedRallyPrice(index)}

                                />
                                <Image source={IMAGES.chart}
                                    style={styles.productImg} />

                                <Text style={styles.prdouctPrice}>{item.level_name}</Text>
                                <Text style={styles.prdouctPrice}>$ {item.level_price}</Text>

                                <Image source={ICONS.arrow_down}
                                    style={styles.productImgArrow} />

                            </View>
                            {selectedIndex === index ? <View style={{ height: 100, backgroundColor: COLORS.F_B1B1B1, margin: 8, borderRadius: 8 }}>

                            </View> : null}

                        </View>

                    ))
                        : null
                }

            </View>
        )


    }



    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={IMAGES.rally_top_banner}
                    resizeMode="cover"
                    style={{ width: '100%', height: 50 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack())}>
                        <Image source={ICONS.backArrow}
                            style={{ width: 40, height: 40, marginTop: 10 }} />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.F_000000, width: '80%', textAlign: 'center', fontSize: 16 }}> Rally Regirstation </Text>
                </View>

                <View style={{ margin: 10, flexDirection: 'column' }}>

                    {rallFromDetail.map((item, index) => {
                        if (item.form_input_type === 'textbox') {
                            return CustomeTextInput(item.lable, index)
                        }
                        if (item.form_input_type === 'RadioButton') {
                            return CustomeRadioButton(item.lable,index)
                        }
                    })}

                </View>
                <Text style={styles.rallyProductTxt}>Rally Products </Text>

                <ProductList />

                <Text style={styles.rallyProductTxt}>Rally Price </Text>

                <PriceList />

                <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                    <View style={styles.loginBtnView}>
                        <LinearGradient
                            colors={['#CEC265', '#9D8E19']}
                            style={styles.btnGradientLogin}
                            start={{ x: 0.5, y: 0.5 }}>
                            <Text style={styles.txtSignup}>
                                Continue to Payment
                            </Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            {loading ? <View style={styles.loading}>
                <CustomeProgress />
            </View> : null}
        </View>
    )
}

