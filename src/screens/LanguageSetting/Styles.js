import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

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
    languageItem: {
        margin: 10,
        backgroundColor: COLORS.F_F3F3F3,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 10,


    },
    languageItemTxt: {
        flex: 1,
        width: 100,
        padding: 25,
        color: COLORS.F_1E1F22,
        backgroundColor: COLORS.F_F3F3F3,
        textAlign: 'center',
        fontSize: 12,
        borderRadius: 10,
    },
    languageItemSelected: {
        flex: 1,
        width: 100,
        padding: 25,
        color: COLORS.F_1E1F22,
        backgroundColor: '#b1a338',
        textAlign: 'center',
        fontSize: 12,
        borderRadius: 10,
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    }

})

export {styles}