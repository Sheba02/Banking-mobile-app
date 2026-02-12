import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import OTPVerificationScreen from "../screens/auth/OTPVerificationScreen";
import SplashScreen from "../screens/common/SplashScreen";
import TabNavigator from "./TabNavigator";
import FundTransferScreen from "../screens/transfer/FundTransferScreen";
import DepositScreen from "../screens/transfer/DepositScreen";
import WithdrawScreen from "../screens/transfer/WithdrawScreen";
import TransactionsScreen from "../screens/home/TransactionsScreen";
import AddCardScreen from "../screens/cards/AddCardScreen";
import CardDetailsScreen from "../screens/cards/CardDetailsScreen";
import CardManagementScreen from "../screens/cards/CardManagementScreen";
import NotificationScreen from "../screens/common/NotificationScreen";
import InternetPaymentScreen from "../screens/payments/InternetPaymentScreen";
import InternetPaymentSummaryScreen from "../screens/payments/InternetPaymentSummaryScreen";

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
