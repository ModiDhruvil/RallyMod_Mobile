import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    notificationItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        margin: 15,
    },
    notificationTxt: {
        flex: 0.8,
        color: COLORS.F_000000,
        fontFamily: 'Montserrat-Light',
        fontSize: 14
    },
    notificationSwitch: {
        flex: 0.2,
    }
})
export {styles}