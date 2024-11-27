import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../constants'

const Avtar = ({ source, onPress, size, borderWidth, borderColor, bg, style }) => {
    // console.log("size : ", size)
    const avtarStyle = {
        width: size,
        height: size,
        backgroundColor: bg,
        borderRadius: size / 2,
        borderWidth: borderWidth,
        borderColor: borderColor,
    }
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}
            disabled={!onPress}
        // style={{ ...avtarStyle, ...style }} 
        >
            {source ?
                <Image source={source}
                    style={{ ...avtarStyle, ...style }}
                    resizeMode='contain' />
                :
                <View style={{ ...avtarStyle, ...style }} />
            }
        </TouchableOpacity>
    )
}

Avtar.defaultProps = {
    source: null,
    bg: COLORS.gray40,
    size: SIZES.width * .1,
    borderWidth: 0,
    borderColor: COLORS.primary,
    style: null,
    onPress: null
}

export default Avtar

const styles = StyleSheet.create({
    profile: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderRadius: SIZES.width * .1,
        backgroundColor: COLORS.gray40,
    },
})