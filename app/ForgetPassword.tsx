import tw from '@/assets/lib/tailwind';
import BackButtonOnlyIcon from '@/components/util/BackButtonOnlyIcon';
import InputBox from '@/components/util/InputBox';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const ForgetPassword = () => {
    const { colors, dark } = useTheme();
    const navigation = useNavigation<any>();
    const [formData, setFormData] = useState({
        email: '',

    });

    const handleChange = (field: string) => (text: string) => {
        setFormData(prev => ({ ...prev, [field]: text }));
    };

    return (
        <View style={tw`flex-1 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'} px-6 py-10`}>
            <BackButtonOnlyIcon />

            {/* Logo */}
            <View style={tw`items-center mb-8`}>
                <Image
                    source={require('@/assets/images/logo.png')}
                    style={tw`w-20 h-20`}
                    resizeMode="contain"
                />
            </View>

            {/* Title */}
            <Text style={tw`text-2xl ${dark ? 'text-white' : 'text-[#121212]'} font-bold text-center mb-6`}>Forgot your password ?</Text>
            <Text style={tw`text-sm ${dark ? 'text-white' : 'text-[#000000]'} font-normal text-center mb-6`}>Enter your email here. We will send you a 6 digit OTP via your email address.</Text>

            {/* Email */}
            <InputBox
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChangeText={handleChange('email')}
                prefixIcon={
                    <Image
                        source={require('@/assets/images/email.png')}

                    />
                }
                containerStyle="h-[50px]  rounded-full px-4 my-2 border-gray-500 border-[1px] "
                textStyle={dark ? 'text-white' : 'text-black'}
            />


            {/* Login Button */}
            <TouchableOpacity
                style={tw`bg-primary mt-6 rounded-xl py-3 items-center`}
                onPress={() => navigation.navigate('Otpverfy')}
            >
                <Text style={tw`text-white font-bold text-lg`}>Send</Text>
            </TouchableOpacity>


        </View>
    );
};

export default ForgetPassword;