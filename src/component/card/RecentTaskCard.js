import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import Icons from '../Icons'
import CircularProgress from 'react-native-circular-progress-indicator';


const RecentTaskCard = ({ title, subtitle, taskCount, onPress, completeness, color }) => {

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.taskCountRow}>
          <Icons name={'check'} size={SIZES.width * .05} color={COLORS.black} />
          <Text style={styles.taskCount}>{taskCount}</Text>
        </View>
      </View>

      <CircularProgress
        value={completeness}
        radius={26}
        duration={2000}
        progressValueColor={COLORS.black}
        activeStrokeColor={color}
        inActiveStrokeColor={COLORS.gray10}
        inActiveStrokeOpacity={0.4}
        inActiveStrokeWidth={5}
        activeStrokeWidth={5}
      />
    </TouchableOpacity>
  )
}

RecentTaskCard.defaultProps = {
  title: null,
  subtitle: null,
  taskCount: null,
  onPress: null,
  completeness: 0.5,
  color: 'green'
}

export default RecentTaskCard

const styles = StyleSheet.create({
  card: {
    width: SIZES.width * .94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.black,
    borderBottomWidth: 5,
    padding: SIZES.width * .04,
    marginBottom: SIZES.height * .02,
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
    color: COLORS.black,
    marginBottom: -4,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * .032,
    color: COLORS.lightBlack,
    marginBottom: -3,
  },
  taskCountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.height * .012
  },
  taskCount: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * .034,
    color: COLORS.black,
    marginBottom: -3,
    marginLeft: SIZES.width * .03
  },
})