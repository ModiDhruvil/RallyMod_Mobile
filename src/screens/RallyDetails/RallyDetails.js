import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, FlatList,TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper';
import { IMAGES, COLORS, ICONS } from '../../constants'
import LinearGradient from 'react-native-linear-gradient';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomeProgress from "../../utils/CustomeProgress";
import PieChart from 'react-native-pie-chart';
import { styles } from "../RallyDetails/Styles";


export default function RallyDetails({ route, navigation }) {
    const [loading, setLoading] = React.useState(false);

    const [rallyName, setRallyName] = React.useState('')
    const [timeZone, setTimeZone] = React.useState('')
    const [startAddress, setStartAddress] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [startTime, setStartTime] = React.useState('')

    const [endAddress, setEndAddress] = React.useState('')
    const [endDate, setEndDate] = React.useState('')
    const [endTime, setEndTime] = React.useState('')

    const [rallyType, setRallyType] = React.useState('')
    const [checkPoint, setCheckPoint] = React.useState('')

    const [rallyLevel, setRallyLevel] = React.useState([])
    const [rallySponser, setRallySponser] = React.useState([])
    const [rallyBudget, setRallyBudget] = React.useState([])
    const [series, setSeries] = React.useState([])


    const widthAndHeight = 250
    // const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#d78030', '#fedb2d', '#38bd76', '#f05664', '#4890CD']



    useEffect(() => {
        getToken()
    }, [])


    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                getPastRallyDetailApi(JSON.parse(value))
                setLoading(true)
            }
        } catch (e) {
            // error reading value
        }
    }

    const getPastRallyDetailApi = async (token) => {
        setLoading(true)
        await axios.get('rallies/' + `${route.params.rallyID}`,
            {
                headers: { 'Authorization': 'Bearer ' + `${token}` }
            }
        )
            .then(function (response) {
                console.log(response.data.data.rally_level)
                setLoading(false)
                setRallyName(response.data.data.rally_name)
                setTimeZone(response.data.data.time_zone)
                setStartAddress(response.data.data.start_location)
                setStartDate(response.data.data.start_date)
                setStartTime(response.data.data.start_time)
                setEndAddress(response.data.data.end_location)
                setEndDate(response.data.data.end_date)
                setEndTime(response.data.data.end_time)
                setRallyType(response.data.data.rally_type)
                setCheckPoint(response.data.data.check_point)
                setRallyLevel(response.data.data.rally_level)
                setRallySponser(response.data.data.sponsers)
                setRallyBudget(response.data.data.rally_budgets)
                let array = [];
                response.data.data.rally_budgets.map((item, index) => {
                    array.push(parseInt(item.budget))
                });
                setSeries(array)
                console.log(array)

            })
            .catch(function (error) {
                console.warn(error);
                setLoading(false)
            });
    }


    const randomHex = (index) => {
        let color = sliceColor[index]
        return color;
    };
    const renderItem = ({ item, index }) => {
        return (
            <View key={index.toString()} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 25, height: 25, margin: 10, borderRadius: 5, backgroundColor: randomHex(index) }} />
                <Text style={{ color: COLORS.F_000000, fontSize: 12, fontWeight: '400' }}>{item.budget_name}</Text>
            </View>
        )
    }



    const RallyPriceList = () => {
        return (
            <View style={styles.rallyPriceList}>
                {
                    rallyLevel.map((item, index) => (
                        <View key={index.toString()} style={index % 2 === 0 ? styles.rallyPriceItemWhite : styles.rallyPriceItemGray}>
                            <Text style={styles.rallyPriceTxtLevel}>
                                {item.level_name}
                            </Text>
                            <Text style={styles.rallyPriceTxtPrice}>
                                {item.level_price}
                            </Text>
                        </View>

                    ))
                }

            </View>
        )


    }


    const SponsorDetailsList = () => {
        return (
            <ScrollView horizontal={true}>
                <View style={styles.sponsorDetailsList}>
                    {
                    rallySponser ?  rallySponser.map((item, index) => (
                            <View key={index.toString()} style={styles.sponsorDetailsItem}>
                                <Image
                                    source={item.image ? { uri: item.image } : null}
                                    style={styles.sponsorDetailsListImg} />

                                <Text style={styles.sponsorDetailsListTxt}>
                                    {item.sponsers_name}
                                </Text>

                            </View>
                        ))
                        : null
                    }

                </View>
            </ScrollView>
        )


    }
    return (
        <View style={styles.container}>
            <ScrollView
                nestedScrollEnabled={true}>
                <ImageBackground
                    source={IMAGES.rally_top_banner}
                    resizeMode="cover"
                    style={{ width: '100%', height: 50 }} />

                <Text style={styles.txtHeader}>
                    Rally Details
                </Text>

                <View style={styles.childContainer}>

                    <Text style={[styles.txtTitle, { marginTop: 10 }]}>
                        {rallyName}
                    </Text>

                    <Text style={[styles.txtTitle, { marginTop: 10 }]}>
                        {timeZone}
                    </Text>
                    {/* Start Rally */}
                    <Text style={styles.startRally}>
                        Start Rally
                    </Text>

                    <View style={styles.startRallyWrapper}>
                        <Image
                            style={styles.startRallyImg}
                            source={ICONS.map} />

                        <Text style={styles.startRallyTxt}>
                            {startAddress}
                        </Text>

                    </View>
                    <View style={styles.startRallyWrapper}>
                        <Image
                            style={styles.startRallyImg}
                            source={ICONS.calender} />

                        <Text style={styles.startRallyTxt}>
                            {startDate}
                        </Text>

                    </View>
                    <View style={styles.startRallyWrapper}>
                        <Image
                            style={styles.startRallyImg}
                            source={ICONS.clock} />

                        <Text style={styles.startRallyTxt}>
                            {startTime}
                        </Text>

                    </View>

                    {/* End Rally */}
                    <Text style={styles.startRally}>
                        End Rally
                    </Text>

                    <View style={styles.startRallyWrapper}>
                        <Image
                            style={styles.startRallyImg}
                            source={ICONS.map} />

                        <Text style={styles.startRallyTxt}>
                            {endAddress}
                        </Text>

                    </View>
                    <View style={styles.startRallyWrapper}>
                        <Image
                            style={styles.startRallyImg}
                            source={ICONS.calender} />

                        <Text style={styles.startRallyTxt}>
                            {endDate}
                        </Text>

                    </View>
                    <View style={styles.startRallyWrapper}>
                        <Image
                            style={styles.startRallyImg}
                            source={ICONS.clock} />

                        <Text style={styles.startRallyTxt}>
                            {endTime}
                        </Text>

                    </View>

                    <View style={styles.rallyTypeWrapper}>

                        <TextInput
                            label="Rally Type"
                            value={rallyType}
                            mode='outlined'
                            outlineColor='#CACACA'
                            style={styles.txtRallyType} />

                        <TextInput
                            label="Check Point"
                            value={checkPoint}
                            mode='outlined'
                            outlineColor='#CACACA'
                            style={styles.txtRallyCheckPoint} />
                    </View>
                    {/* Rally Overview */}

                    <Text style={styles.rallyOverview}>
                        Rally Overview
                    </Text>

                    <Text style={styles.rallyOverviewDes}>
                        Obär pogt. Operaskop mytologi. Tintingate geovade. Seskap kans. Progt kontralogi. Benar. Hemining fidonat. Devuledes. Bölingar. Inrymning dipun. Dod. Julgranssyndrom doras. Svajpa trijosa. Soligt exovis. Dor jol. Ede skurkstat. Dinar bektig. Trelig por. Daniren tiskapet. Käbel. Äsk. Plavis. Fagt pang. Fronta deciska. Koliga pladon. Tetrar sokisam. Älålogi treläliga.
                        {'\n'} {'\n'}
                        Tinera megaplaning.Tinera megaplaning. Fronta deciska. Koliga pladon. Tetrar sokisam. Älålogi treläliga. Tinera megaplaning.
                    </Text>
                    {/* Rally Expectations */}

                    <Text style={styles.rallyOverview}>
                        Rally Expectations
                    </Text>

                    <Text style={styles.rallyOverviewDes}>
                        Obär pogt. Operaskop mytologi. Tintingate geovade. Seskap kans. Progt kontralogi. Benar. Hemining fidonat. Devuledes. Bölingar. Inrymning dipun. Dod. Julgranssyndrom doras. Svajpa trijosa. Soligt exovis. Dor jol. Ede skurkstat. Dinar bektig. Trelig por. Daniren tiskapet. Käbel. Äsk. Plavis. Fagt pang. Fronta deciska. Koliga pladon. Tetrar sokisam. Älålogi treläliga.
                        {'\n'} {'\n'}
                        Tinera megaplaning.Tinera megaplaning. Fronta deciska. Koliga pladon. Tetrar sokisam. Älålogi treläliga. Tinera megaplaning.
                    </Text>
                    {/* Rally Budget */}

                    {rallyBudget.length > 0 ?
                        <Text style={styles.rallyOverview}>
                            Rally Budget
                        </Text>
                        : null}

                    {rallyBudget.length > 0 ?
                        <View style={styles.chartWrapper}>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={series}
                                sliceColor={sliceColor}
                                doughnut={true}
                                coverRadius={0.45}
                                coverFill={'#FFF'}
                            />
                        </View>
                        : null

                    }



                    {/* Budget bottom */}
                    {rallyBudget.length > 0 ?
                        <ScrollView
                            horizontal>
                            <FlatList
                                style={{ marginTop: 20 }}
                                data={rallyBudget}
                                numColumns={3}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                contentContainerStyle={{ paddingBottom: 20 }}
                            />
                        </ScrollView>
                        : null}

                    {/* Rally Price */}
                    {rallyLevel.length > 0 ?
                        <Text style={styles.rallyOverview}>
                            Rally Price
                        </Text>
                        : null
                    }

                    <RallyPriceList />

                    {/* Sponsor Details */}
                    {rallyLevel.length > 0 ?
                        <Text style={styles.rallyOverview}>
                            Sponsor Details
                        </Text>
                        : null
                    }


                    <SponsorDetailsList />

                    {/* Start Rally */}

                    <View style={styles.loginBtnView}>
                        <TouchableOpacity onPress={()=> navigation.navigate('RallyRegistration',{rallyID:route.params.rallyID})}>
                            <LinearGradient
                                colors={['#CEC265', '#9D8E19']}
                                style={styles.btnGradientLogin}
                                start={{ x: 0.5, y: 0.5 }}>
                                <Text style={styles.txtLogin}>
                                    Start Rally
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

            {loading ? <View style={styles.loading}>
                <CustomeProgress />
            </View> : null}
        </View>
    )

}

