import tw from '@/assets/lib/tailwind';
import BackButtonOnlyIcon from '@/components/util/BackButtonOnlyIcon';
import InputBox from '@/components/util/InputBox';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

const Register = () => {
    const { dark, colors } = useTheme();
    const navigation = useNavigation<any>();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);
    const [agree, setAgree] = useState<boolean>(false);

    const handleChange = (field: string) => (text: string) => {
        setFormData(prev => ({ ...prev, [field]: text }));
    };

    const handleRegister = () => {
        const { name, email, phone, password, confirmPassword } = formData;

        if (!name || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!agree) {
            alert('Please agree to the terms and privacy policy');
            return;
        }

        // Proceed with registration
        console.log('Register data:', formData);
    };

    const bgColor = dark ? 'bg-black' : 'bg-white';
    const textColor = dark ? 'text-white' : 'text-black';
    const inputBorder = dark ? 'border-white' : 'border-black';
    const mutedText = dark ? 'text-gray-400' : 'text-[#6D6D6D]';

    return (
        <View style={[tw`flex-1 px-6 py-10`, { backgroundColor: colors.background }]}>
            {/* Back Button */}
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
            <Text style={tw`text-xl font-bold text-center mb-6 ${textColor}`}>Register Your Account</Text>

            {/* Name */}
            <InputBox
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={handleChange('name')}
                prefixIcon={<FontAwesome name="user" size={20} color={dark ? '#ccc' : '#555'} />}
                containerStyle={`h-[50px] border ${inputBorder} rounded-full px-4 my-2`}
                textStyle={`text-base ${textColor}`}
            />

            {/* Email */}
            <InputBox
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChangeText={handleChange('email')}
                prefixIcon={
                    <Image source={require('@/assets/images/email.png')} />
                }
                containerStyle={`h-[50px] border ${inputBorder} rounded-full px-4 my-2`}
                textStyle={`text-base ${textColor}`}
            />

            {/* Phone */}
            <InputBox
                placeholder="Enter your phone number"
                type="phone"
                value={formData.phone}
                onChangeText={handleChange('phone')}
                prefixIcon={
                    <Image source={require('@/assets/images/phone.png')} />
                }
                containerStyle={`h-[50px] border ${inputBorder} rounded-full px-4 my-2`}
                textStyle={`text-base ${textColor}`}
            />

            {/* Password */}
            <InputBox
                placeholder="Enter password"
                type="password"
                value={formData.password}
                onChangeText={handleChange('password')}
                prefixIcon={
                    <Image source={require('@/assets/images/lock.png')} />
                }
                suffixIcon={
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Image
                            source={
                                passwordVisible
                                    ? require('../assets/images/eye.png') // ✅ use correct relative path
                                    : require('../assets/images/eyeclose.png')
                            }
                        />
                    </TouchableOpacity>
                }
                secureTextEntry={!passwordVisible}
                containerStyle={`h-[50px] border ${inputBorder} rounded-full px-4 my-2`}
                textStyle={`text-base ${textColor}`}
            />

            {/* Confirm Password */}
            <InputBox
                placeholder="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                prefixIcon={
                    <Image source={require('@/assets/images/lock.png')} />
                }
                suffixIcon={
                    <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                        <Image
                            source={
                                passwordVisible
                                    ? require('../assets/images/eye.png') // ✅ use correct relative path
                                    : require('../assets/images/eyeclose.png')
                            }
                        />

                    </TouchableOpacity>


                }
                secureTextEntry={!confirmPasswordVisible}
                containerStyle={`h-[50px] border ${inputBorder} rounded-full px-4 my-2`}
                textStyle={`text-base ${textColor}`}
            />

            {/* Terms Checkbox */}
            <View style={tw`flex-row items-center mt-3`}>
                <TouchableOpacity onPress={() => setAgree(!agree)} style={tw`mr-2`}>
                    <View style={tw`w-5 h-5 border rounded ${agree ? 'bg-black' : 'bg-white'}`} />
                </TouchableOpacity>
                <Text style={tw`text-sm ${mutedText}`}>
                    By creating this account, you agree to the{' '}
                    <Text style={tw`${textColor} font-normal`}>terms of use</Text> &{' '}
                    <Text style={tw`${textColor} font-normal`}>privacy policy</Text>.
                </Text>
            </View>

            {/* Register Button */}
            <TouchableOpacity
                style={tw`bg-primary mt-6 rounded-full py-3 items-center`}
                onPress={handleRegister}
            >
                <Text style={tw`text-white font-bold text-lg`}>Register</Text>
            </TouchableOpacity>

            {/* OR Divider */}
            <View style={tw`flex-row items-center my-4`}>
                <View style={tw`flex-1 h-px bg-gray-300`} />
                <Text style={tw`mx-3 ${mutedText}`}>or</Text>
                <View style={tw`flex-1 h-px bg-gray-300`} />
            </View>

            {/* Google Sign-In */}
            <TouchableOpacity
                style={tw`border ${inputBorder} rounded-full py-3 items-center flex-row justify-center`}
            >
                <Image
                    source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }}
                    style={tw`w-5 h-5 mr-2`}
                />
                <Text style={tw`${textColor} font-medium`}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={tw`mt-6 flex-row justify-center`}>
                <Text style={tw`${mutedText}`}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={tw`${textColor} font-bold`}>Login here</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Register;
