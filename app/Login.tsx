import tw from '@/assets/lib/tailwind';
import BackButtonOnlyIcon from '@/components/util/BackButtonOnlyIcon';
import InputBox from '@/components/util/InputBox';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
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
        <View style={tw`flex-1 bg-white px-6 py-10`}>
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
            <Text style={tw`text-xl font-bold text-center mb-6`}>Login to your account</Text>

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
                containerStyle="h-[50px] border border-black rounded-full px-4 my-2"
                textStyle="text-base"
            />

            {/* Password */}
            <InputBox
                placeholder="Enter password"
                type="password"
                value={formData.password}
                onChangeText={handleChange('password')}
                prefixIcon={
                    <Image
                        source={require('@/assets/images/lock.png')}

                    />
                }
                suffixIcon={
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        {passwordVisible ? (
                            <Image
                                source={require('@/assets/images/eye.png')}

                            />
                        ) : (
                            <Image
                                source={require('@/assets/images/eyeclose.png')}

                            />
                        )}
                    </TouchableOpacity>
                }
                secureTextEntry={!passwordVisible}
                containerStyle="h-[50px] border border-black rounded-full px-4 my-2"
                textStyle="text-base"
            />

            {/* Remember Me */}
            <View style={tw`flex-row items-center justify-between mt-3`}>
                {/* Checkbox and label */}
                <View style={tw`flex-row items-center`}>
                    <TouchableOpacity
                        onPress={() => setRememberMe(!rememberMe)}
                        style={tw`mr-2`}
                    >
                        <View
                            style={tw.style(
                                `w-5 h-5 border rounded`,
                                rememberMe ? 'bg-black' : 'bg-white'
                            )}
                        />
                    </TouchableOpacity>
                    <Text style={tw`text-black font-normal text-sm`}>Remember me</Text>
                </View>

                {/* Forgot Password */}
                <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
                    <Text style={tw`text-black font-normal text-sm`}>Forgot Password?</Text>
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
                <Text style={tw`mx-3 text-gray-500`}>or</Text>
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
                <Text style={tw`text-black font-medium`}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Register Link */}
            <View style={tw` flex-row justify-center mt-[50%]`}>
                <Text style={tw`text-[#6D6D6D]`}>Don't have an account? </Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={tw`text-black font-bold`}>Register here</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;