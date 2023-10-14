// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import JoinScreen from '../screens/JoinScreen';
// import ConfirmNumberScreen from '../screens/ConfirmNumberScreen';
// import DashboardScreen from '../screens/DashboardScreen';
// import GroupSettings from '../components/GroupSettings';
// import AddParticipantScreen from '../screens/AddParticipantScreen';
// import TandaSettingsScreen from '../screens/TandaSettingsScreen';
// import SignUpTandaSettingsScreen from '../screens/SignUpTandaSettingsScreen';

const Stack = createStackNavigator()

const Navigation = () => {
  
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='SignInScreen' component={SignInScreen}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
            {/*<Stack.Screen name='JoinTanda' component={JoinScreen}/>
             <Stack.Screen name='ConfirmNumber' component={ConfirmNumberScreen}/>           
            <Stack.Screen name='Dashboard' component={DashboardScreen}/>
            <Stack.Screen name='AddParticipants' component={AddParticipantScreen}/>
            <Stack.Screen name='TandaSettings' component={TandaSettingsScreen}/>
            <Stack.Screen name='SignUpTandaSettingsScreen' component={SignUpTandaSettingsScreen}/> */}
            </Stack.Navigator>
        </NavigationContainer>
        
    )  
}

export default Navigation