import tw from '@/assets/lib/tailwind';
import BackButtonOnlyIcon from '@/components/util/BackButtonOnlyIcon';
import InputBox from '@/components/util/InputBox';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

const Register = () => {
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

    return (
        <View style={tw`flex-1 bg-white px-6 py-10`}>
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
            <Text style={tw`text-xl font-bold text-center mb-6`}>Register Your Account</Text>

            {/* Name */}
            <InputBox
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={handleChange('name')}
                prefixIcon={<FontAwesome name="user" size={20} color="#555" />}
                containerStyle="h-[50px] border border-black rounded-full px-4 my-2"
                textStyle="text-base"
            />

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

            {/* Phone */}
            <InputBox
                placeholder="Enter your phone number"
                type="phone"
                value={formData.phone}
                onChangeText={handleChange('phone')}
                prefixIcon={
                    <Image
                        source={require('@/assets/images/phone.png')}

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

            {/* Confirm Password */}
            <InputBox
                placeholder="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                prefixIcon={
                    <Image
                        source={require('@/assets/images/lock.png')}

                    />
                }
                suffixIcon={
                    <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                        {confirmPasswordVisible ? (
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
                secureTextEntry={!confirmPasswordVisible}
                containerStyle="h-[50px] border border-black rounded-full px-4 my-2"
                textStyle="text-base"
            />

            {/* Terms Checkbox */}
            <View style={tw`flex-row items-center mt-3`}>
                <TouchableOpacity onPress={() => setAgree(!agree)} style={tw`mr-2`}>
                    <View style={tw`w-5 h-5 border rounded ${agree ? 'bg-black' : 'bg-white'}`} />
                </TouchableOpacity>
                <Text style={tw`text-sm text-[#6D6D6D]`}>
                    By creating this account, you agree to the{' '}
                    <Text style={tw`text-black font-normal`}>terms of use</Text> &{' '}
                    <Text style={tw`text-black font-normal`}>privacy policy</Text>.
                </Text>
            </View>

            {/* Register Button */}
            <TouchableOpacity
                style={tw`bg-primary mt-6 rounded-full py-3 items-center`}
                onPress={() => console.log('Register data:', formData)}
            >
                <Text style={tw`text-white font-bold text-lg`}>Register</Text>
            </TouchableOpacity>

            {/* OR Divider */}
            <View style={tw`flex-row items-center my-4`}>
                <View style={tw`flex-1 h-px bg-gray-300`} />
                <Text style={tw`mx-3 text-gray-500`}>or</Text>
                <View style={tw`flex-1 h-px bg-gray-300`} />
            </View>

            {/* Google Sign-In */}
            <TouchableOpacity style={tw`border border-gray-300 rounded-full py-3 items-center flex-row justify-center`}>
                <Image
                    source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }}
                    style={tw`w-5 h-5 mr-2`}
                />
                <Text style={tw`text-black font-medium`}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={tw`mt-6 flex-row justify-center`}>
                <Text style={tw`text-[#6D6D6D]`}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={tw`text-black font-bold`}>Login here</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Register;