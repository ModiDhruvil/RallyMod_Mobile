import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },


    txtHeader: {
        color: COLORS.F_1E1F22,
        fontSize: 14
    },
    rallCustomeFrom: {
        flexDirection: 'column'
    },
    customeTxt: {
        color: COLORS.F_000000
    },
    customeTxtInput: {
        color: COLORS.F_1E1F22,
        height: 50,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        marginTop: 5,
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
    rallyProductTxt: {
        margin: 10,
        fontSize: 14,
        color: COLORS.F_1E1F22,
    },
    productDetailsItem: {
        flexDirection: 'row',
        margin: 5,
        padding: 6,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: COLORS.F_FaFaFa,

    },
    productDetailsGray: {
        flexDirection: 'row',
        margin: 5,
        padding: 6,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: COLORS.F_F3F3F3,

    },
    productImg: {
        flex: 0.25,
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginStart: 10
    },
    productImgArrow:{
        flex: 0.25,
        width: 10,
        height: 10,
        resizeMode: 'contain',
        marginStart: 10
    },
    prdouctPrice: {
        flex: 0.5,
        color: COLORS.F_000000,
        fontSize: 14,
        marginStart: 10
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
    }, btnGradientLogin: {
        width: '100%',
        borderRadius: 8,
    },

})

export { styles }