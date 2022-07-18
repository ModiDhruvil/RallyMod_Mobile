import React from 'react'
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList, Text } from 'react-native'
import { COLORS, IMAGES, ICONS } from '../../constants'
import { CommonActions } from '@react-navigation/native';
import { styles } from '../LanguageSetting/Styles';

const DATA_LANGUAGE = [
    {
        id: '1',
        title: 'English',

    },
    {
        id: '2',
        title: 'Italy',
    },
    {
        id: '3',
        title: 'Indian',
    },
    {
        id: '4',
        title: 'Japan',
    },
    {
        id: '5',
        title: 'Korea',
    },
    {
        id: '6',
        title: '',
    },

];


export default function LanguageSetting({ navigation }) {

    const renderItem = ({ item }) => (
        <View style={styles.languageItem}>
            <Text style={[item.title === 'English' ? styles.languageItemSelected : styles.languageItemTxt]}>{item.title}</Text>
        </View>

    );

    return (
        <View style={styles.container}>
            {/* Top Background Image */}
            <ImageBackground
                source={IMAGES.rally_top_banner}
                resizeMode="cover"
                style={{ width: '100%', height: 50 }} />
             {/* Back Arrow */}
            <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack())}>
                <Image source={ICONS.backArrow}
                    style={{ width: 40, height: 40, marginTop: 10 }} />
            </TouchableOpacity>

            <FlatList
                style={{ margin: 20 }}
                numColumns={3}
                data={DATA_LANGUAGE}
                columnWrapperStyle={styles.row}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    )
}


