import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '../Icons'
import { COLORS, FONTS, SIZES } from '../../constants'

const HomeCountCard = ({title, task, color, icon, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.card, color && {backgroundColor: color}]}>
        <View style={[styles.iconBox]}>
            <Icons name={icon} size={SIZES.width * .05} color={COLORS.white} />
        </View>

        <View >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.task}>{task}</Text>
        </View>
    </TouchableOpacity>
  )
}

HomeCountCard.default = {
    onPress: null,
    title: '',
    task: '',
    icon: 'refresh',
    color: COLORS.blueF2,
}

export default HomeCountCard

const styles = StyleSheet.create({
    card: {
        width: SIZES.width * .45,
        height: SIZES.height * .1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // padding: 10,
        marginTop: SIZES.height * .02,
    },
    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .038,
        color: COLORS.black,
        marginBottom: -3,
    },
    task: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .034,
        color: COLORS.black,
        marginBottom: -3,
    },
    iconBox: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.width * .03,
        backgroundColor: COLORS.light,
        opacity: 0.3,
        borderRadius: SIZES.width * .1,
    },
})