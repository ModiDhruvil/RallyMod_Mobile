import {StyleSheet} from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        color: COLORS.F_1E1F22,
        fontSize: 22,
        marginStart: 15,
        marginTop: 15,
        fontFamily: 'Montserrat-SemiBold'
    },
    settingWrapper: {
        marginTop: 30,
        paddingBottom: 30,
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CDCDCD'

    },
    settingItem: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    settingItemImg: {
        flex: 0.1,
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    settingItemText: {
        flex: 0.8,
        color: COLORS.F_1E1F22,
        fontSize: 14,
        marginStart: 20,
        fontFamily: 'Montserrat-Medium',

    },
    forwardImg: {
        flex: 0.1,
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    swtichWrapper: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewUserName: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 20,
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
        margin: 10
    },
    editUserName: {
        flex: 1,
        paddingStart: 10,
        color: COLORS.F_1E1F22,
        fontSize: 14,
    },
    forgotPassWrapper: {
        flexDirection: 'column',
        height: 400,
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 20
    },
    loginBtnViewBottomSheet: {
        width: '100%',
        borderRadius: 8,
        marginTop: 40,

    },
    btnGradientLogin: {
        width: '100%',
        borderRadius: 8,
    },
    txtLogin: {
        color: COLORS.F_1E1F22,
        fontSize: 14,
        padding: 18,
        fontFamily: '',
        fontWeight: '500',
        textAlign: 'center'
    },
})

export {styles}