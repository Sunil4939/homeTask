import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import styles from './styles';
import { connect } from 'react-redux';
import Dashboard from '../screens/dashborad';

const Stack = createStackNavigator();

const StackNavigator = ({ navigation, token }) => {
  return (
    <Stack.Navigator
      initialRouteName='BottomTab'
      screenOptions={() => ({
        // initialRouteName: "Login",
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleStyle: styles.headerTitleStyle,
      })} >
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />

      <Stack.Screen name="Dashboard" component={Dashboard}  />
     
      {token == null &&
        <>
          {/* <Stack.Screen name="AuthLogin" component={login} options={{ headerShown: false }} />
          <Stack.Screen name="AuthSignUp" component={signUp} options={{ headerShown: false }} />
          <Stack.Screen name="AuthForgetPassword" component={forgetPassword} options={{ headerShown: false }} />
          <Stack.Screen name="AuthResetPassword" component={forgetPassword} options={{ headerShown: false }} /> */}
        </>
      }

    </Stack.Navigator>
  )
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigator);


