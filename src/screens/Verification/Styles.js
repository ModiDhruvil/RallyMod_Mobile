import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
    },
    haderTitle: {
        color: COLORS.F_1E1F22,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '700',
        fontSize: 27,
        marginTop: 50
    },
    haderDescription: {
        color: COLORS.F_1E1F22,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginTop: 15
    },
    btnGradientVerify: {
        width: '100%',
        borderRadius: 8,
    },
    verificationBtnView: {
        width: '100%',
        borderRadius: 8,
        marginTop: 80,

    },
    txtVerificationCode: {
        color: COLORS.F_1E1F22,
        fontSize: 14,
        padding: 18,
        fontFamily: '',
        fontWeight: '500',
        textAlign: 'center'
    },
    txtResend:{
        width:'100%',
        textAlign:'center',
        fontFamily:'Montserrat-Regular',
        fontWeight:'500',
        color:COLORS.F_B1B1B1,
        marginTop:10,
        textDecorationLine: 'underline',

    }
})

export {styles}