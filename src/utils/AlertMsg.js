import react from "react";
import { Alert } from 'react-native'

export default function AlertMsg(msg) {
    Alert.alert(
        "",
        msg,
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
}