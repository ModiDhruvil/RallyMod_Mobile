import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { COLORS, ICONS } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomeProgress from "../../utils/CustomeProgress";
import { styles } from './../MyRally/Styles'
import { useSelector, useDispatch } from 'react-redux';
import ApiMyRallyDetails from './ApiMyRallyDetails'
import { useFocusEffect } from "@react-navigation/native";

const DATA = [
    {
        id: '100',
        title: 'Land O’Lakes Region Banquet 2021',
        date: 'April 12, 2022',
        time: '4:00 pm',
        image: 'https://picsum.photos/200/300?random=1',
    },
    {
        id: '101',
        title: 'Ojibwe Forests Rally',
        date: 'April 13, 2022',
        time: '3:00 pm',
        image: 'https://picsum.photos/200/300?random=2',
    },
    {
        id: '102',
        title: 'Sno*Drift',
        date: 'April 14, 2022',
        time: '1:00 pm',
        image: 'https://picsum.photos/200/300?random=3',
    },
    {
        id: '103',
        title: 'Ojibwe Forests Rally',
        date: 'April 15, 2022',
        time: '6:00 pm',
        image: 'https://picsum.photos/200/300?random=4',
    },
    {
        id: '104',
        title: 'Sno*Drift',
        date: 'April 16, 2022',
        time: '8:00 pm',
        image: 'https://picsum.photos/200/300?random=5',
    },

];


export default function MyRally({ navigation }) {
    const [myRallyList, setMyRallyList] = React.useState([]);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ApiReducer.loading);
    const data = useSelector((state) => state.ApiReducer.data);


    useFocusEffect(
        React.useCallback(() => {
            getToken()
        },[])
    );

    


    useEffect(() => {
        if (data) {
            setMyRallyList(data.data)
        }
    }, [data])


    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                dispatch(ApiMyRallyDetails(JSON.parse(value)))
            }
        } catch (e) {
            // error reading value
        }
    }


    // const getMyRallyDetailApi = async (token) => {
    //     setLoading(true)
    //     await axios.post('getRally',
    //         {
    //             type: 0,
    //         },
    //         {
    //             headers: { 'Authorization': 'Bearer ' + `${token}` }
    //         }
    //     )
    //         .then(function (response) {
    //             setLoading(false)
    //             if (response.data.data.length > 0)
    //                 setMyRallyList(response.data.data)
    //             else
    //                 console.log('No Data Found')
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             setLoading(false)
    //         });
    // }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RallyDetails', { rallyID: item.id })}>
            <View style={styles.myRallyItem}>
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
                            {/* Clock */}
                            <Image
                                source={ICONS.clockgolden}
                                style={styles.imgClock} />

                            <Text style={styles.txtTime}>
                                {item.start_time}
                            </Text>
                            {/* Product */}
                            <Image
                                source={ICONS.product}
                                style={styles.imgClock} />
                        </View>
                    </View>
                </View>


            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>


            <FlatList
                data={myRallyList}
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

