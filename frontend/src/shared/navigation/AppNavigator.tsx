import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "../../features/auth/screens/RegistrationScreen";
import LoginScreen from "../../features/auth/screens/LoginScreen";
import OTPVerificationScreen from "../../features/auth/screens/OTPVerificationScreen";
import SplashScreen from "../../features/auth/screens/SplashScreen";
import TabNavigator from "./TabNavigator";
import FundTransferScreen from "../../features/payments/screens/FundTransferScreen";
import DepositScreen from "../../features/payments/screens/DepositScreen";
import WithdrawScreen from "../../features/payments/screens/WithdrawScreen";
import TransactionsScreen from "../../features/transactions/screens/TransactionsScreen";
import AddCardScreen from "../../features/cards/screens/AddCardScreen";
import CardDetailsScreen from "../../features/cards/screens/CardDetailsScreen";
import CardManagementScreen from "../../features/cards/screens/CardManagementScreen";
import NotificationScreen from "../../features/notifications/screens/NotificationScreen";
import InternetPaymentScreen from "../../features/payments/screens/InternetPaymentScreen";
import InternetPaymentSummaryScreen from "../../features/payments/screens/InternetPaymentSummaryScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id="MainStack"
        screenOptions={{ headerShown: false }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="FundTransfer" component={FundTransferScreen} />
        <Stack.Screen name="Deposit" component={DepositScreen} />
        <Stack.Screen name="Withdraw" component={WithdrawScreen} />
        <Stack.Screen name="CardManagement" component={CardManagementScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
        <Stack.Screen name="AddCard" component={AddCardScreen} />
        <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
        <Stack.Screen name="InternetPayment" component={InternetPaymentScreen} />
        <Stack.Screen name="InternetPaymentSummary" component={InternetPaymentSummaryScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
