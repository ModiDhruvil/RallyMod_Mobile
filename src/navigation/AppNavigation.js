import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import LoginSignUp from '../screens/LoginSignUp/LoginSignUp';
import Login from '../screens/Login/Login'
import Signup from '../screens/Signup/Signup'
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy';
import Authantication from '../screens/Authantication/Authantication';
import Verification from '../screens/Verification/Verification';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';
import RallyDetails from '../screens/RallyDetails/RallyDetails';
import PrivacyPolicySetting from '../screens/PrivacyPolicySetting/PrivacyPolicySetting';
import LanguageSetting from '../screens/LanguageSetting/LanguageSetting';
import NotificationSetting from '../screens/NotificationSetting/NotificationSetting';
import AboutSetting from '../screens/AboutSetting/AboutSetting';
import RallyRegistration from '../screens/RallyRegistratoin/RallyRegistratoin';
import Checkout from '../screens/Checkout/Checkout';
import { navigationRef } from './RootNavigation';
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Splash'>

        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, statusBarHidden: true }} />
        <Stack.Screen name="LoginSignUp" component={LoginSignUp} options={{ headerShown: false, statusBarHidden: true }} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="Authantication" component={Authantication} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="HomeMain" component={Home} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="RallyDetails" component={RallyDetails} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="PrivacyPolicySetting" component={PrivacyPolicySetting} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="LanguageSetting" component={LanguageSetting} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="NotificationSetting" component={NotificationSetting} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="AboutSetting" component={AboutSetting} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="RallyRegistration" component={RallyRegistration} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false, statusBarHidden: false, statusBarStyle: 'light' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}