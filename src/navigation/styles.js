import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";


export default StyleSheet.create({
    //   ==================== Bottom tab style ==================
    tabBarStyle: {
        backgroundColor: COLORS.white,
        height: SIZES.height * .07,
        paddingTop: SIZES.height * .01,
        paddingBottom: 3,
        borderTopWidth: 0,
        borderTopRightRadius: SIZES.width * .03,
        borderTopLeftRadius: SIZES.width * .03,
    },

    activeLabelStyle: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .03,
        // marginTop: -6,
        color: COLORS.primary,
    },

    labelStyle: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .03,
        // marginBottom: -6,
        // color: COLORS.gray40,
    },


    // =================== stack screen style ==================

    headerStyle: {
        backgroundColor: COLORS.primary,
        elevation: 10,
        // shadowColor: 'rgba(0, 0, 0, 0.25)'
    },

    headerTitleStyle: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .054,
        color: COLORS.black,
        marginBottom: -4,
        textAlign: 'center',
    },

    
})