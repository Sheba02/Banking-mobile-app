import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({ navigation }: any) {
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            setTimeout(() => {
                if (token) {
                    navigation.replace('Main');
                } else {
                    navigation.replace('Login');
                }
            }, 2000);
        } catch (error) {
            navigation.replace('Login');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Nexpay</Text>
            <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    },
});
