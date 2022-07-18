import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        backgroundColor: "#EFF1F5"
    },
    txtSignupHeader: {
        marginTop: 50,
        color: COLORS.F_1E1F22,
        fontSize: 27,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontWeight: '700'
    },
    txtUserName: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '400',
        color: COLORS.F_1E1F22,
        marginTop: 40

    },
    viewUserName: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 8,
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
    ImageStyle: {
        width: 24,
        height: 16,
        margin: 10

    },
    editUserName: {
        flex: 1,
        paddingStart: 10,
        color: COLORS.F_1E1F22,
        fontSize: 14,
    },
    txtPassword: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '400',
        color: COLORS.F_1E1F22,
        marginTop: 20
    },
    txtOR: {
        flex: 0.1,
        color: COLORS.F_1E1F22,
        marginStart: 8
    },
    socialMediaLogin: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgSocial: {
        width: 20,
        height: 24,
        resizeMode: 'contain'
    },
    appleBtn: {
        flex: Platform.OS === 'ios' ? 0.33 : 0.5,
        backgroundColor: COLORS.F_535566,
        borderRadius: 8,
        padding: 12,
        marginEnd: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookBtn: {
        flex: Platform.OS === 'ios' ? 0.33 : 0.5,
        backgroundColor: COLORS.F_3B5998,
        borderRadius: 8,
        padding: 12,
        marginEnd: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleBtn: {
        flex: Platform.OS === 'ios' ? 0.33 : 0.5,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnGradientLogin: {
        width: '100%',
        borderRadius: 8,
    },
    loginBtnView: {
        borderRadius: 8,
        margin: 15,

    },
    txtSignup: {
        color: COLORS.F_1E1F22,
        fontSize: 14,
        padding: 18,
        fontFamily: '',
        fontWeight: '500',
        textAlign: 'center'
    }

})

export {styles}