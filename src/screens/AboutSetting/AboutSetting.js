import React from 'react'
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { COLORS, ICONS, IMAGES } from '../../constants'
import { CommonActions } from '@react-navigation/native';
import { styles } from '../AboutSetting/Styles';

export default function AboutSetting({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Top Ads Banner */}
                <ImageBackground
                    source={IMAGES.rally_top_banner}
                    resizeMode="cover"
                    style={{ width: '100%', height: 50 }} />
                {/* Back Arrow  */}
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack())}>
                    <Image source={ICONS.backArrow}
                        style={{ width: 40, height: 40, marginTop: 10 }} />
                </TouchableOpacity>
                {/* Description Text */}
                <View style={{ margin: 10, flexDirection: 'column' }}>
                    <Text style={styles.txtHeader}>
                        About App
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
        </View>
    )
}

