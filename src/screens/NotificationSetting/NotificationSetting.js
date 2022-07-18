import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image, Switch, Text } from 'react-native'
import { COLORS, IMAGES, ICONS } from '../../constants'
import { CommonActions } from '@react-navigation/native';
import { styles } from "../NotificationSetting/Styles";


export default function NotificationSetting({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            {/* Top Banner Ads */}
            <ImageBackground
                source={IMAGES.rally_top_banner}
                resizeMode="cover"
                style={{ width: '100%', height: 50 }} />
             {/* Back Arrow */}
            <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack())}>
                <Image source={ICONS.backArrow}
                    style={{ width: 40, height: 40, marginTop: 10 }} />
            </TouchableOpacity>

            <View style={styles.notificationItem}>

                <Text style={styles.notificationTxt}>
                    Push notification
                </Text>
                <View style={styles.notificationSwitch}>
                    <Switch
                        trackColor={{ false: "#CDCDCD", true: "#CDCDCD" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#ffffff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

            </View>

            <View style={styles.notificationItem}>

                <Text style={styles.notificationTxt}>
                    Announcements
                </Text>
                <View style={styles.notificationSwitch}>
                    <Switch
                        trackColor={{ false: "#CDCDCD", true: "#CDCDCD" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#ffffff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

            </View>

            <View style={styles.notificationItem}>

                <Text style={styles.notificationTxt}>
                    RallyMod Ads
                </Text>
                <View style={styles.notificationSwitch}>
                    <Switch
                        trackColor={{ false: "#CDCDCD", true: "#CDCDCD" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#ffffff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

            </View>

            <View style={styles.notificationItem}>

                <Text style={styles.notificationTxt}>
                    RallyMod updates
                </Text>
                <View style={styles.notificationSwitch}>
                    <Switch
                        trackColor={{ false: "#CDCDCD", true: "#CDCDCD" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#ffffff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

            </View>

        </View>
    )
}

