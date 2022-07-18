import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtHeader: {
        color: COLORS.F_000000,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '700',
        width: '100%',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 18,
    },
    tabLayout: {
        marginTop: 15,
    }
})

export {styles}