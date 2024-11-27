import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES, icons, images } from '../constants'
import Icons from "../component/Icons";
import styles from "./styles";
import Home from "../screens/home";
import { connect } from "react-redux";
import Files from "../screens/files";
import CreatePost from "../screens/createPost";
import Schedule from "../screens/schedule";
import Profile from "../screens/profile";


const Tab = createBottomTabNavigator();

const BottomTab = ({ navigation, token }) => {
    // token = "null"
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarStyle: styles.tabBarStyle,
                tabBarHideOnKeyboard: true,
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.primary2,
                tabBarLabelStyle: styles.labelStyle,
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused, color }) => <Icons name={"home"} size={SIZES.width * .056} color={color} />
                }}
            />

            <Tab.Screen name="Schedule" component={Schedule}
                options={{
                    tabBarIcon: ({ focused, color }) => <Icons name={"calendar"} size={SIZES.width * .056} color={color} />
                }}
            />
            <Tab.Screen name="CreatePost" component={CreatePost}
                options={{
                    tabBarIcon: ({focused, color }) => <Icons name={"plus"} size={SIZES.width * .09} color={COLORS.primary} style={{marginTop: -8, marginLeft: -4,}} />
                }}
            />
            
            <Tab.Screen name="Files" component={Files}
                options={{
                    tabBarIcon: ({focused, color }) => <Icons name={"file"} size={SIZES.width * .056} color={color} />
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
            options={{
                tabBarIcon: ({focused, color }) => <Icons type={"image"} src={icons.user} size={SIZES.width * .056} color={color} />
            }}
            />

        </Tab.Navigator >
    )
}

const mapStateToProps = state => ({
    token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);
