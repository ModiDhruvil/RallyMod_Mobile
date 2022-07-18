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
    txtMobileEmail: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '400',
        color: COLORS.F_B1B1B1,
        marginTop: 20
    },
    viewUserName: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 8,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.F_1E1F22,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,

    },
    editUserName: {
        flex: 1,
        paddingStart: 14,
        color: COLORS.F_1E1F22,
        fontSize: 18,
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
    }
})

export {styles}