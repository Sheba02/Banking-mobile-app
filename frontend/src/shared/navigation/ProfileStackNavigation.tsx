import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../features/profile/screens/ProfileScreen';
import ChangePasswordScreen from '../../features/profile/screens/ChangePasswordScreen';
import NotificationSettingsScreen from '../../features/profile/screens/NotificationSettingsScreen';
import FAQScreen from '../../features/profile/screens/FAQScreen';

const Stack = createStackNavigator();

export default function ProfileStackNavigation() {
  return (
    <Stack.Navigator
      id="ProfileStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <Stack.Screen name="FAQ" component={FAQScreen} />
    </Stack.Navigator>
  );
}
