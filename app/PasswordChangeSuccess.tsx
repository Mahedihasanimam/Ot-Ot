import tw from '@/assets/lib/tailwind';
import Button from '@/components/util/Button';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

const PasswordChangeSuccess: React.FC = () => {
    const navigation = useNavigation<any>();


    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, scaleAnim]);

    return (
        <View style={tw`flex-1 items-center justify-center px-4 bg-white`}>
            <Animated.Image
                source={require('@/assets/images/success.png')}
                style={[
                    tw`mb-6`,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
                resizeMode="contain"
            />

            <Animated.Text
                style={[
                    tw`text-2xl text-[#00B047] font-bold text-center mb-6 max-w-xs`,
                    { opacity: fadeAnim },
                ]}
            >
                Password changed successfully
            </Animated.Text>

            <Button
                buttonStyle="mt-6 bg-primary px-4 py-3 rounded-full w-full"
                textStyle="text-white text-lg font-bold text-center"
                label="Back to login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

export default PasswordChangeSuccess;
