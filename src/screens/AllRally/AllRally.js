import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import { BottomSheet } from "react-native-btr";
import { COLORS, ICONS } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomeProgress from "../../utils/CustomeProgress";
import { styles } from './../AllRally/Styles'
import { useSelector, useDispatch } from 'react-redux';
import ApiAllRallyDetails from './ApiAllRallyDetails'
import { useFocusEffect } from "@react-navigation/native";




const DATA_PRODUCT = [
    {
        id: '100',
        title: 'White T-shirt',
        size: 'M',
        quantity: '4',
        color: "white",
        price: "25.00",
        image: 'https://picsum.photos/200/300?random=1',
    },
    {
        id: '101',
        title: 'White T-shirt White T-shirt White T-shirt White T-shirt',
        size: 'M',
        quantity: '4',
        color: "gray",
        price: "25.00",
        image: 'https://picsum.photos/200/300?random=2',
    },

    {
        id: '102',
        title: 'White T-shirt',
        size: 'M',
        quantity: '4',
        color: "black",
        price: "25.00",
        image: 'https://picsum.photos/200/300?random=3',
    },
    {
        id: '103',
        title: 'White T-shirt',
        size: 'M',
        quantity: '4',
        color: "black",
        price: "25.00",
        image: 'https://picsum.photos/200/300?random=3',
    },
    {
        id: '104',
        title: 'White T-shirt',
        size: 'M',
        quantity: '4',
        color: "black",
        price: "25.00",
        image: 'https://picsum.photos/200/300?random=3',
    },
    {
        id: '105',
        title: 'White T-shirt',
        size: 'M',
        quantity: '4',
        color: "black",
        price: "25.00",
        image: 'https://picsum.photos/200/300?random=3',
    },
    {
        id: '106',
        title: 'White T-shirt',
        size: 'M',
        quantity: '4',
        color: "black",
        price: "25.00",
        image: 'https://picsum.photos/200/300?random=3',
    },

];

export default function AllRally({ navigation }) {
    const [visible, setVisible] = useState(false);
    const [allRallyList, setAllRallyList] = React.useState([]);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ApiReducer.loading);
    const data = useSelector((state) => state.ApiReducer.data);
    function toggle() {
        setVisible((visible) => !visible);
    }




    useFocusEffect(
        React.useCallback(() => {
            getToken()
        }, [])
    );


    useEffect(() => {
        if (data) {
        setAllRallyList(data.data)
        }
    }, [data])

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                dispatch(ApiAllRallyDetails(JSON.parse(value)))
            }
        } catch (e) {
            console.log(e)
        }
    }



    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RallyDetails', { rallyID: item.id })}>
            <View style={styles.myRallyItem}>
                {/* Check Rally Register */}
                {item.isRegister === 1 ? <Image
                    source={ICONS.rally_register}
                    style={styles.imgRegister} /> : null}
                {/* Rally Image */}
                <View style={{ flex: 0.3 }}>
                    <Image
                        source={{ uri: 'https://picsum.photos/200/300?random=1' }}
                        style={styles.imgRally} />
                </View>

                <View style={{ flex: 0.7, flexDirection: 'column', marginStart: 10 }}>
                    {/* Rally Title */}
                    <Text style={styles.rallyTitle}>
                        {item.rally_name}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            {/* Calender */}
                            <Image
                                source={ICONS.calanedergolden}
                                style={styles.imgCalender} />

                            <Text style={styles.txtDate}>
                                {item.start_date}
                            </Text>
                            {/* CLock */}
                            <Image
                                source={ICONS.clockgolden}
                                style={styles.imgClock} />

                            <Text style={styles.txtTime}>
                                {item.start_time}
                            </Text>
                            {/* Prodcut */}
                            <TouchableOpacity onPress={() => setVisible(true)} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                                <Image
                                    source={ICONS.product}
                                    style={styles.imgClock} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );


    const RallyProductList = () => {

        return (
            <View >
                {
                    DATA_PRODUCT ? DATA_PRODUCT.map((item, index) => (
                        <View key={index.toString()} style={styles.productListItem}>

                            <View style={{ flex: 0.3 }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: 100, height: 80, borderRadius: 8, borderWidth: 3, borderColor: '#b8aa42' }} />

                            </View>
                            <View style={{ flex: 0.7, flexDirection: 'column', marginStart: 20 }}>
                                <Text style={{ color: 'black', fontSize: 14, fontWeight: "600" }}>{item.title}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    {/* Size */}
                                    <Text style={{ color: 'black', fontSize: 12 }}>Size- </Text>
                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>{item.size}</Text>
                                    {/* Quantity */}
                                    <Text style={{ color: 'black', fontSize: 12, marginStart: 10 }}>Quantity- </Text>
                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>{item.quantity}</Text>
                                    {/* color */}
                                    <Text style={{ color: 'black', fontSize: 12, marginStart: 10 }}>Color- </Text>
                                    <Text style={{ color: 'black', fontSize: 12, borderRadius: 20 }} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 14, fontWeight: "100" }}>Price</Text>
                                <Text style={{ color: 'black', fontSize: 14, fontWeight: "500" }}>$ {item.price}</Text>

                            </View>
                        </View>
                    )) : null
                }

            </View>
        )


    }

    return (
        <View style={styles.container}>
            {/* All Rally Detail */}
            <BottomSheet
                visible={visible}
                onBackButtonPress={toggle}
                onBackdropPress={toggle}
            >
                <View style={styles.productListWrapper}>
                    <ScrollView>
                        <RallyProductList />

                        <View style={{ backgroundColor: 'gray', height: 1 }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 0.85, color: COLORS.F_1E1F22, fontSize: 20, fontFamily: 'Montserrat-Bold', fontWeight: '600', marginTop: 10 }}>Total-</Text>
                            <Text style={{ flex: 0.15, color: COLORS.F_1E1F22, fontSize: 20, fontWeight: '500', fontFamily: 'Montserrat-Bold', marginTop: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>$ {
                                DATA_PRODUCT.reduce((a, v) => a + parseInt(v.price), 0)
                            }</Text>
                        </View>




                    </ScrollView>

                </View>
            </BottomSheet>
            <FlatList
                data={allRallyList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
            />


            {loading ? <View style={styles.loading}>
                <CustomeProgress />
            </View> : null}

        </View>
    )

}

