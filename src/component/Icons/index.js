import React from "react"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Zocial from 'react-native-vector-icons/Zocial'
import { Image, StyleSheet } from "react-native"
import { icons, images } from "../../constants"




const Icons = ({ name, color, size, style, src, type }) => {
    if (type == "image") {
        return <Image source={src}
            style={[{ tintColor: color, height: size, width: size }, style]}
            resizeMode="contain"
        />
    } else {
        switch (name) {

            // icons
            case 'home':
                return <Feather style={StyleSheet.create(style)} name="home" size={size} color={color} />
            case 'calendar':
                return <Feather style={StyleSheet.create(style)} name="calendar" size={size} color={color} />
            case 'plus':
                return <AntDesign style={StyleSheet.create(style)} name="pluscircle" size={size} color={color} />
            case 'file':
                return <FontAwesome style={StyleSheet.create(style)} name="file-o" size={size} color={color} />

            case 'refresh':
                return <Feather style={StyleSheet.create(style)} name="refresh-cw" size={size} color={color} />
            case 'clock':
                return <Feather style={StyleSheet.create(style)} name="clock" size={size} color={color} />
            case 'check':
                return <Octicons style={StyleSheet.create(style)} name="check-circle" size={size} color={color} />
            case 'dashboard':
                return <MaterialCommunityIcons style={StyleSheet.create(style)} name="view-dashboard-outline" size={size} color={color} />
            case 'file-remove':
                return <MaterialCommunityIcons style={StyleSheet.create(style)} name="file-remove-outline" size={size} color={color} />

            default:
                return <MaterialIcons style={StyleSheet.create(style)} name="logout" size={size} color={color} />
        }
    }
}

Icons.defaultProps = {
    style: null,
    color: null
}

export default Icons