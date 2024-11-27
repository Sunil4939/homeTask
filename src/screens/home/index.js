import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Avtar from '../../component/avtar'
import { COLORS, data, images, SIZES } from '../../constants'
import styles from './styles'
import Icons from '../../component/Icons'
import MainView from '../../component/mainView/MainView'
import HomeCountCard from '../../component/card/HomeCountCard'
import RecentTaskCard from '../../component/card/RecentTaskCard'

const Home = ({ navigation }) => {

  navigation.setOptions({
    header: () => (
      <View style={styles.headerRow}>
        <View style={styles.profileRow}>
          <Avtar source={images.profile} size={SIZES.width * .12} style={styles.profile} onPress={() => navigation.navigate('Profile')} />
          <View>
            <Text style={styles.headerTitle}>Hi, Bruce</Text>
            <Text style={styles.headerText}>Your daily adventures start now</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.5} style={styles.headerBtn} onPress={() => navigation.navigate('Dashboard')}>
          <Icons name={'dashboard'} size={SIZES.width * .06} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    ),
  })

  return (
    <MainView scroll={true}>

      <FlatList
        data={data.homelist}
        scrollEnabled={false}
        numColumns={2}
        columnWrapperStyle={styles.contentContainerStyle}
        renderItem={({ item, index }) => (
          <HomeCountCard title={item.title} task={item.task} color={item.color} icon={item.icon} />
        )}
      />

      <Text style={styles.title}>Recent Task</Text>
      <FlatList
        data={data.recentTaskList}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <RecentTaskCard title={item.title} taskCount={item.task} completeness={item.completeness} subtitle={item.subtitle} 
          color={item.color} />
        )}
      />
    </MainView>
  )
}

export default Home