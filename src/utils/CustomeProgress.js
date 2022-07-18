import React from "react";
import { View,Text,ActivityIndicator} from 'react-native'
import { COLORS } from "../constants";

export default function CustomeProgress() {
    return (
        <View style={{  backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderRadius: 10, backgroundColor: '#000000', padding: 25 }}>
                <Text style={{ fontSize: 16, fontWeight: '400',color:'white',marginBottom:10 }}>Loading...</Text>
                <ActivityIndicator size="large"color={'white'} />
            </View>
        </View>
    )
} 