import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },

    footer: {
        flexDirection: 'row',
        margin: 20
    },
    txtHeader: {
        color: COLORS.F_1E1F22,
        fontSize: 18

    },
    txtDescription: {
        color: COLORS.F_1E1F22,
        fontSize: 14,
        fontWeight: '300'
    },
    btnAgreeClick: {
        flex: 0.5,
        backgroundColor: COLORS.F_9D8E19,
        marginEnd: 15,
        borderRadius: 8,
    },
    btnGradient: {
        backgroundColor: COLORS.F_9D8E19,
        borderRadius: 8,
    },
    btnAgree: {
        textAlign: 'center',
        padding: 12,
        color: '#1E1F22',

    },
    btnNoThnaksClick: {
        flex: 0.5,
        backgroundColor: 'white',
        marginEnd: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.F_B1B1B1
    },
    btnNoThnaks: {
        textAlign: 'center',
        color: COLORS.F_B1B1B1,
        padding: 12,

    }
})

export {styles}