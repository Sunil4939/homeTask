import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants';
import Icons from '../Icons';

const CheckBox = ({
    size,
    color,
    style,
    backgroundColor,
    rightText,
    rightTextStyle,
    onPress,
    checked,
}) => {
    // const [checked, setchecked] = useState(true)
    color = backgroundColor == COLORS.white ? COLORS.black : COLORS.white;
    return (
        <View style={styles.row}>
            <TouchableOpacity
                style={[{
                    width: size,
                    height: size,
                    backgroundColor: checked ? backgroundColor : COLORS.white,
                    borderColor: backgroundColor ? backgroundColor : COLORS.black,
                }, styles.checkBox, style]}
                onPress={onPress}
            >
                <Icons
                    name={"check"}
                    color={checked ? color : "transparent"}
                    size={size - 3}
                />
            </TouchableOpacity>
            {rightText && <Text style={[styles.right_text, rightTextStyle]}>{rightText}</Text>}
        </View>
    )
}

CheckBox.defaultProps = {
    size: SIZES.width * .05,
    color: COLORS.black,
    backgroundColor: null,
    rightText: null,
    checked: false,
    onPress: null,
}

export default CheckBox;

const styles = StyleSheet.create({
    checkBox: {
        borderWidth: 1.8,
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        width: SIZES.width * .94,
        flexDirection: 'row',
        alignSelf: 'center',
        // alignItems: 'center',
    },
    right_text: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .04,
        color: COLORS.secondary,
        // borderWidth: 1,
        marginTop: -2,
        flexWrap: 'wrap',
        marginLeft: SIZES.width * .02,
    },
})