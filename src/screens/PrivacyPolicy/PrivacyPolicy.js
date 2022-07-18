import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native'
import { COLORS } from '../../constants'
import LinearGradient from 'react-native-linear-gradient'
import { setItem } from "../../utils/LocalStorage";
import { styles } from '../PrivacyPolicy/Styles';

export default function PrivacyPolicy({ route,navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ margin: 10, flexDirection: 'column' }}>
                    <Text style={styles.txtHeader}>
                        Privacy Policy
                    </Text>

                    <Text style={styles.txtDescription}>
                        Lörem ipsum ist merir. Maporade preda. Fadelig plötslig vuxendöd kålörade. Busade nening, lanar. Kören nåras.
                        Oska prekaning. Operamatisk berade till oren attitydinkontinens hysande. Suprabybelt jer. Intryckssanera infragt. Semimiv lykang.
                        Aktig eust då kontral antide. Antimuling viligen astrol. Spende ultran sin larydat. Autonelygen kvasina. Bäsamma bitirat kamerat midade tills sohet.
                        Temen decil, söling. Makroligt pöjörade ryheten nideling, prerade. Månengen äbas i megal. Diapåda anasofi och prede hemir intrapreling. Plassa miljonsvenska lydiliga ultraledes.
                        Dekad hyst. Zorra episk ifall jör androtris akåskade. Soledes lys halvpudel sedan soss. Semirint posiv. Jörat varen nollavfall att sekelsiffror
                    </Text>

                    <Text style={styles.txtHeader}>
                        Privacy Policy
                    </Text>

                    <Text style={styles.txtDescription}>
                        Lörem ipsum ist merir. Maporade preda. Fadelig plötslig vuxendöd kålörade. Busade nening, lanar. Kören nåras.
                        Oska prekaning. Operamatisk berade till oren attitydinkontinens hysande. Suprabybelt jer. Intryckssanera infragt. Semimiv lykang.
                        Aktig eust då kontral antide. Antimuling viligen astrol. Spende ultran sin larydat. Autonelygen kvasina. Bäsamma bitirat kamerat midade tills sohet.
                        Temen decil, söling. Makroligt pöjörade ryheten nideling, prerade. Månengen äbas i megal. Diapåda anasofi och prede hemir intrapreling. Plassa miljonsvenska lydiliga ultraledes.
                        Dekad hyst. Zorra episk ifall jör androtris akåskade. Soledes lys halvpudel sedan soss. Semirint posiv. Jörat varen nollavfall att sekelsiffror
                    </Text>

                    <Text style={styles.txtHeader}>
                        Privacy Policy
                    </Text>

                    <Text style={styles.txtDescription}>
                        Lörem ipsum ist merir. Maporade preda. Fadelig plötslig vuxendöd kålörade. Busade nening, lanar. Kören nåras.
                        Oska prekaning. Operamatisk berade till oren attitydinkontinens hysande. Suprabybelt jer. Intryckssanera infragt. Semimiv lykang.
                        Aktig eust då kontral antide. Antimuling viligen astrol. Spende ultran sin larydat. Autonelygen kvasina. Bäsamma bitirat kamerat midade tills sohet.
                        Temen decil, söling. Makroligt pöjörade ryheten nideling, prerade. Månengen äbas i megal. Diapåda anasofi och prede hemir intrapreling. Plassa miljonsvenska lydiliga ultraledes.
                        Dekad hyst. Zorra episk ifall jör androtris akåskade. Soledes lys halvpudel sedan soss. Semirint posiv. Jörat varen nollavfall att sekelsiffror
                    </Text>

                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnAgreeClick} onPress={() => {setItem('isPrivacy','true'),route.params.formLoginSignup === 'true' ? navigation.navigate('Signup') : navigation.navigate('Login')} }>
                    <LinearGradient
                        colors={['#CEC265', '#9D8E19']}
                        style={styles.btnGradient}
                        start={{ x: 0.5, y: 0.5 }}>
                        <Text style={styles.btnAgree}>
                            Agree
                        </Text>
                    </LinearGradient>

                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.btnNoThnaksClick}>
                    <Text style={styles.btnNoThnaks}>
                        No Thanks
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
