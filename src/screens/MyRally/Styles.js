import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    myRallyItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginStart: 15,
        marginEnd: 15,
        marginTop: 15,
    },
    imgRally: {
        width: 100,
        height: 70,
        resizeMode: 'cover',
        borderRadius: 20
    },
    rallyTitle: {
        color: COLORS.F_000000,
        fontSize: 18,
        fontFamily: 'Montserrat-Bold'
    },
    imgCalender: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    txtDate: {
        color: COLORS.F_000000,
        fontWeight: '400',
        marginStart: 5,
        fontSize: 12
    },
    imgClock: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginStart: 10
    },
    txtTime: {
        color: COLORS.F_000000,
        fontWeight: '400',
        marginStart: 5,
        fontSize: 12
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export {styles}