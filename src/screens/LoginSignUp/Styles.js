import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImg: {
        flex: 1,
        justifyContent: "center"
    },
    login_signup_wrapper: {
        margin: 20,
        flexDirection: 'column'
    },
    txtTitle: {
        color: COLORS.F_EBE7D9,
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'Montserrat-Regular'
    },
    txtDescription: {
        color: COLORS.F_EBE7D9,
        fontSize: 16,
        fontWeight: '300',
        marginTop: 10,
        fontFamily: 'Montserrat-Regular'
    },
    btnLogin: {
        width: '100%',
        backgroundColor: COLORS.F_EBE7D9,
        color: COLORS.F_1E1F22,
        padding: 18,
        fontWeight:'500',
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        marginTop: 30,
        borderRadius: 8

    },
    btnSignup: {
        width: '100%',
        backgroundColor: 'transparent',
        color: COLORS.F_EBE7D9,
        padding: 18,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontWeight:'500',
        marginTop: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.F_9D8E19
    },


})

export {styles}