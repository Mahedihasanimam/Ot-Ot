import tw from '@/assets/lib/tailwind';
import Button from '@/components/util/Button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';




type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};


const SignOrSignpSplash = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <Animated.View
            style={[
                tw`p-4 mt-[50%]`,
                {
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }],
                },
            ]}
        >
            <View style={tw`mb-[20%]`}>
                <Image source={require('@/assets/images/Techsplash.png')} />
            </View>

            {/* <InputBox toggleVisibilityIcon={
                {
                    visible: <Image source={require('@/assets/images/eye.png')} />,
                    hidden: <Image source={require('@/assets/images/eye.png')} />,
                }
            } suffixIcon={<Image source={require('@/assets/images/eye.png')} />} placeholder="password" type="password" containerStyle="mb-2 border border-[#000000] rounded-full px-3 py-2" textStyle="text-[#000000] text-[18px]" onChangeText={(text) => console.log(text)} /> */}

            <View style={tw`p-4`}>
                <Button
                    label="Sign up"
                    onPress={() => navigation.navigate('Register')}
                    buttonStyle="mt-2 bg-primary p-3 rounded-full"
                    textStyle="text-[#FFFFFF] text-center text-[18px] font-medium"
                />
                <Button
                    label="Login"
                    onPress={() =>
                        navigation.navigate('Login')
                    }
                    buttonStyle="mt-2 bg-white p-3 rounded-full border-2 border-[#000000]"
                    textStyle="text-[#000000] text-center text-[18px] font-medium"
                />
            </View>
        </Animated.View>
    );
};

export default SignOrSignpSplash;
