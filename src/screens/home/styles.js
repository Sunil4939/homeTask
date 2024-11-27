import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
   headerRow: {
   //  width: SIZES.width * .94,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   //  alignSelf: 'center',
    paddingTop: SIZES.height * .02,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * .03,
   },
   headerTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
    color: COLORS.black,
    marginBottom: -4,
   },
   headerText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * .032,
    color: COLORS.lightBlack,
    marginBottom: -3,
   },
   profileRow: {
    flexDirection: 'row',
    // alignItems: 'center',
   },
   profile: {
    marginRight: SIZES.width * .03,
   },
   headerBtn: {
    width: SIZES.width * .12,
    height: SIZES.width * .12,
    borderRadius: 8,
    backgroundColor: COLORS.lightED,
    alignItems: 'center',
    justifyContent: 'center',
   },

   contentContainerStyle: {
    width: SIZES.width * .94,
     alignSelf: 'center', 
     justifyContent: 'space-between'
   },
   title: {
    width: SIZES.width * .94,
    alignSelf: 'center', 
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
    color: COLORS.black,
    marginTop: SIZES.height * .03,
    marginBottom: SIZES.height * .015,
   },
})