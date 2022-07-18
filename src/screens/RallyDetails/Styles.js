import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    childContainer: {
        margin: 10,
        flex: 1,
        flexDirection: 'column'
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
    txtTitle: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 1,
        padding: 15,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        borderColor: '#E9E9E9',
        color: COLORS.F_000000
    },
    startRally: {
        width: '100%',
        color: COLORS.F_000000,
        fontFamily: 'Montserrat-Bold',
        marginTop: 15,
        fontSize: 14

    },
    startRallyWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    startRallyImg: {
        width: 22,
        height: 22,
        marginStart: 20
    },
    startRallyTxt: {
        flex: 1,
        color: COLORS.F_1E1F22,
        fontSize: 12,
        marginStart: 10,
        fontWeight: '500',
        fontFamily: 'Montserrat-Regular',
        borderBottomColor: COLORS.F_cacaca,
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    rallyTypeWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
    },
    txtRallyType: {
        backgroundColor: 'white',
        flex: 0.5

    },
    txtRallyCheckPoint: {
        flex: 0.5,
        marginStart: 30,
        backgroundColor: 'white',
        textAlign: 'center'
    },
    rallyOverview: {
        color: COLORS.F_000000,
        fontFamily: 'Montserrat-Bold',
        fontSize: 17,
        marginTop: 20
    },
    rallyOverviewDes: {
        color: COLORS.F_000000,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginTop: 10,
    },
    chartWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    chart: {
        width: 200,
        height: 200,
    },
    rallyPriceList: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    rallyPriceItemWhite: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    rallyPriceItemGray: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.F_F3F3F3,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,

    },

    rallyPriceTxtLevel: {
        color: COLORS.F_1E1F22,
        fontSize: 12,
        fontWeight: '500'
    },
    rallyPriceTxtPrice: {
        color: COLORS.F_000000,
        fontSize: 12,
        fontWeight: '500',
        marginEnd: 20,
    },
    sponsorDetailsList: {
        flexDirection: 'row',
        paddingVertical: 15,
    },
    sponsorDetailsItem: {
        width: 90,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    sponsorDetailsListImg: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
        borderRadius: 50,
    },
    sponsorDetailsListTxt: {
        color: COLORS.F_1E1F22,
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Montserrat-Regular',
        marginTop: 5

    },
    btnGradientLogin: {
        width: '100%',
        borderRadius: 8,

    },
    loginBtnView: {
        width: '100%',
        borderRadius: 8,
        padding: 10,
        marginTop: 20,

    },
    txtLogin: {
        color: COLORS.F_1E1F22,
        fontSize: 14,
        padding: 18,
        fontFamily: '',
        fontWeight: '500',
        textAlign: 'center'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export { styles }