import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, } from '../../constants'



const Button1 = ({ bg,disabled, width, height, loading, buttonStyle, children, textColor, onPress, }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.btn, buttonStyle,  bg&&{backgroundColor: backgroundColor}, width&&{width: width}, height&&{height: height}]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading &&
        <ActivityIndicator size={SIZES.width * .07} color={COLORS.white} style={{ marginRight: SIZES.width * .03 }} />
      }
      <Text style={[styles.btn_text, textColor && {color: textColor}]}>{children}</Text>
    </TouchableOpacity>
  )  
}

Button1.defaultProps = {
  bg: null,
  buttonStyle: null,
  textColor: null,
  children: null,
  onPress: null,
  loading: false,
  width: null,
  height: null,
  disabled: false,
}

export default Button1;

const styles = StyleSheet.create({
  btn: {
    width: SIZES.width * .94,
    height: SIZES.height * .065,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    // borderWidth: 1,
    borderRadius: SIZES.height * .1,
    borderColor: COLORS.primary,
  },

  btn_text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    fontSize: SIZES.width * .041,
    marginBottom: -5,
  },
})