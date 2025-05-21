import tw from '@/assets/lib/tailwind';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { Animated, ImageSourcePropType, View } from 'react-native';

// Define your navigation stack type
type RootStackParamList = {
    InitialScreen: undefined;
    SignOrSignpSplash: undefined;
};

const InitialScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        // Start animation
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),
        ]).start();

        // Navigate to Login screen after 2 seconds
        const timer = setTimeout(() => {
            navigation.navigate('SignOrSignpSplash');
        }, 2000);

        return () => clearTimeout(timer);
    }, [fadeAnim, scaleAnim]);

    return (
        <View style={tw`flex-1 items-center justify-center bg-white`}>
            <Animated.Image
                source={require('@/assets/images/Welcome.png') as ImageSourcePropType}
                style={{
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }],
                }}
                resizeMode="contain"
            />
        </View>
    );
};

export default InitialScreen;
