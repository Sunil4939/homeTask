import React, { useEffect, useState } from 'react';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { connect, useDispatch } from 'react-redux';
import StackNavigator from '../navigation/StackNavigator';
import NoInternetBox from '../component/noDataBox/NoInternetBox';
import { useNetInfo } from "@react-native-community/netinfo";

const Stack = createStackNavigator();

const Root = ({ token, }) => {
    const [internetConnection, setInternetConnection] = useState(true)
    const internetState = useNetInfo();

    useEffect(() => {
        if (internetState.isConnected === false) {
            setInternetConnection(false)
        } else {
            setInternetConnection(true)
        }
    }, [internetState.isConnected])

    // token = null
    //  console.log("token : ", token)

    return (
        <>
            {internetConnection ?
                <Stack.Navigator
                    screenOptions={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerShown: false,
                    }}>
                    <Stack.Screen name="StackNavigator" component={StackNavigator} />

                </Stack.Navigator >
                :
                <NoInternetBox />
            }
        </>

    );
};

const mapStateToProps = state => ({
    token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Root);