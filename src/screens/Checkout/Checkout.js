import React from 'react'
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { COLORS, ICONS, IMAGES } from '../../constants'
import { CommonActions } from '@react-navigation/native'; 
import { styles } from '../Checkout/Styles';


export default function Checkout({ route, navigation }) {

    const DATA_PURCHASE_SUMMERY = [
        {
            id: 1,
            title: 'T-Shirt',
            price: 30
        },
        {
            id: 2,
            title: 'Cap',
            price: 20
        },
        {
            id: 3,
            title: 'Walkie Talkie',
            price: 100
        },
        {
            id: 4,
            title: 'Food',
            price: 90
        },
        {
            id: 5,
            title: 'Level-2',
            price: 150
        },
    ]

    const PurchaseSummery = () => {
        return (
            <View style={{ flexDirection: 'column', margin: 5, backgroundColor: 'white', padding: 8 }}>
                {
                    DATA_PURCHASE_SUMMERY.map((item, index) => (
                        <View key={index.toString()} style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 0.5 }}>
                                    <Text style={styles.txtTitle}>{item.title}</Text>
                                </View>
                                <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                    <Text style={styles.txtPrice}>${item.price}</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#E6E6E5',
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    padding: 5
                                }}
                            />

                        </View>
                    ))
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Top Ads Banner */}
                <ImageBackground
                    source={IMAGES.rally_top_banner}
                    resizeMode="cover"
                    style={{ width: '100%', height: 50 }} />
                {/* Back Arrow  */}
                <View style={styles.viewCheckOutheadr}>
                    <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack())}>
                        <Image source={ICONS.backArrow}
                            style={{ width: 40, height: 40, marginTop: 10 }} />
                    </TouchableOpacity>
                    <Text style={styles.txtCheckout}>
                        Checkout
                    </Text>

                </View>

                <Text style={styles.txtPS}>
                    Purchase Summary
                </Text>

                <View style={styles.viewPS}>
                    <PurchaseSummery />
                </View>

                <Text style={styles.txtPS}>
                    Price Details
                </Text>

                <View style={styles.viewPD}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.txtTitle}>Total Price</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={styles.txtPrice}>$ {
                                DATA_PURCHASE_SUMMERY.reduce((a, v) => a + parseInt(v.price), 0)
                            }</Text>    
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.txtTitle}>Tax</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={styles.txtPrice}>$10</Text>    
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#E6E6E5',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            padding: 5
                        }}
                    />
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.txtTitle}>Total</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={styles.txtPrice}>$400</Text>    
                        </View>
                    </View>
                </View>


            </ScrollView>



        </View>
    )
}

