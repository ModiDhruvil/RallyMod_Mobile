import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'

    },
    txtCheckout: {
        width: '80%',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20
    },
    viewCheckOutheadr: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    txtPS: {
        color: COLORS.F_1E1F22,
        fontSize: 20,
        fontWeight: '600',
        margin: 15
    },
    viewPS: {
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    txtTitle: {
        color: COLORS.F_1E1F22,
        fontWeight: '500',
        fontSize: 14,
        padding: 8,
    },
    txtPrice: {
        color: COLORS.F_1E1F22,
        fontWeight: '700',
        fontSize: 14,
        padding: 8
    },
    viewPD: {
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'column',
    },


})

export {styles}