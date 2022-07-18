import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { ICONS } from "../../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomeProgress from "../../utils/CustomeProgress";
import { styles } from './../PastRally/Styles'
import { useSelector, useDispatch } from 'react-redux';
import ApiPastRallyDetails from './ApiPastRallyDetails'
import { useFocusEffect } from "@react-navigation/native";

export default function PastRally({ navigation }) {
    const [pastRallyList, setPastRallyList] = React.useState([]);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ApiReducer.loading);
    const data = useSelector((state) => state.ApiReducer.data);



    // useEffect(() => {
    //     getToken()
    // }, [])

    useFocusEffect(
        React.useCallback(() => {
            getToken()
        }, [])
    );

    useEffect(() => {
        if (data) {
        setPastRallyList(data.data)
        }
    }, [data])


    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                dispatch(ApiPastRallyDetails(JSON.parse(value)))
            }
        } catch (e) {
            // error reading value
        }
    }



    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RallyDetails', { rallyID: item.id })}>
            <View style={styles.myRallyItem}>
                <View style={{ flex: 0.3 }}>
                    <Image
                        source={{ uri: 'https://picsum.photos/200/300?random=1' }}
                        style={styles.imgRally} />
                </View>

                <View style={{ flex: 0.7, flexDirection: 'column', marginStart: 10 }}>
                    <Text style={styles.rallyTitle}>
                        {item.rally_name}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Image
                                source={ICONS.calanedergolden}
                                style={styles.imgCalender} />

                            <Text style={styles.txtDate}>
                                {item.start_date}
                            </Text>

                            <Image
                                source={ICONS.clockgolden}
                                style={styles.imgClock} />

                            <Text style={styles.txtTime}>
                                {item.start_time}
                            </Text>

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
                data={pastRallyList}
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

