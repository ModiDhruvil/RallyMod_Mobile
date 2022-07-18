import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF1F5'
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtUserName: {
        color: COLORS.F_000000,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Montserrat-Medium'
    }, childContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
    },
    editTitle: {
        color: COLORS.F_000000,
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '500',
        marginTop: 10

    },
    viewUserName: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 8,
        padding: 5,
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
    editFiled: {
        flex: 1,
        paddingStart: 14,
        color: COLORS.F_1E1F22,
        fontSize: 12,
    },
    footer: {
        flexDirection: 'row',
        margin: 20,

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
    btnSaveClick: {
        flex: 1,
        backgroundColor: COLORS.F_9D8E19,
        marginEnd: 15,
        borderRadius: 8,
    },
    btnGradient: {
        backgroundColor: COLORS.F_9D8E19,
        borderRadius: 8,
    },
    btnSave: {
        width: '100%',
        textAlign: 'center',
        padding: 12,
        color: COLORS.F_000000,

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
    uploadImgWrapper: {
        flexDirection: 'column',
        height: 300,
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 20
    }

})

export { styles }