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

})

export {styles}