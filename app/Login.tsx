import tw from '@/assets/lib/tailwind';
import BackButtonOnlyIcon from '@/components/util/BackButtonOnlyIcon';
import InputBox from '@/components/util/InputBox';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
    const { dark, colors } = useTheme();
    const navigation = useNavigation<any>();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (field: string) => (text: string) => {
        setFormData(prev => ({ ...prev, [field]: text }));
    };

    return (
        <View style={[tw`flex-1 px-6 py-10 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'}`]}>
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
            <Text
                style={[
                    tw`text-xl font-bold text-center mb-6`,
                    { color: colors.text },
                ]}
            >
                Login to your account
            </Text>

            {/* Email */}
            <InputBox
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChangeText={handleChange('email')}
                prefixIcon={
                    <Image source={require('@/assets/images/email.png')} />
                }
                containerStyle="h-[50px] border border-gray-500 rounded-full px-4 my-2"
                textStyle={dark ? 'text-white' : 'text-black'}
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
                                    ? require('@/assets/images/eye.png')
                                    : require('@/assets/images/eyeclose.png')
                            }
                        />
                    </TouchableOpacity>
                }
                secureTextEntry={!passwordVisible}
                containerStyle="h-[50px] border border-gray-500 rounded-full px-4 my-2 ${"
                textStyle={dark ? 'text-white' : 'text-black'}
            />

            {/* Remember Me and Forgot Password */}
            <View style={tw`flex-row items-center justify-between mt-3`}>
                <View style={tw`flex-row items-center`}>
                    <TouchableOpacity
                        onPress={() => setRememberMe(!rememberMe)}
                        style={tw`mr-2`}
                    >
                        <View
                            style={tw.style(
                                `w-5 h-5 border rounded`,
                                rememberMe ? 'bg-primary' : 'bg-white'
                            )}
                        />
                    </TouchableOpacity>
                    <Text style={[tw`text-sm`, { color: colors.text }]}>Remember me</Text>
                </View>

                <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
                    <Text style={[tw`text-sm`, { color: colors.primary }]}>
                        Forgot Password?
                    </Text>
                </Pressable>
            </View>

            {/* Login Button */}
            <TouchableOpacity
                style={tw`bg-primary mt-6 rounded-full py-3 items-center`}
                onPress={() => navigation.navigate('(tabs)')}
            >
                <Text style={tw`text-white font-bold text-lg`}>Login</Text>
            </TouchableOpacity>

            {/* OR Divider */}
            <View style={tw`flex-row items-center my-8`}>
                <View style={tw`flex-1 h-px bg-gray-300`} />
                <Text style={[tw`mx-3`, { color: colors.text }]}>or</Text>
                <View style={tw`flex-1 h-px bg-gray-300`} />
            </View>

            {/* Google Sign-In */}
            <TouchableOpacity
                style={tw`border border-gray-300 rounded-full py-3 items-center flex-row justify-center`}
            >
                <Image
                    source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }}
                    style={tw`w-5 h-5 mr-2`}
                />
                <Text style={[tw`font-medium`, { color: colors.text }]}>
                    Continue with Google
                </Text>
            </TouchableOpacity>

            {/* Register Link */}
            <View style={tw`flex-row justify-center mt-[50%]`}>
                <Text style={[tw`mr-1`, { color: colors.text }]}>Don't have an account?</Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={[tw`font-bold`, { color: colors.primary }]}>Register here</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;
