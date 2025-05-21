import tw from '@/assets/lib/tailwind';
import BackButtonOnlyIcon from '@/components/util/BackButtonOnlyIcon';
import InputBox from '@/components/util/InputBox';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

const ResetPassword = () => {
    const navigation = useNavigation<any>();
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (field: string) => (text: string) => {
        setFormData(prev => ({ ...prev, [field]: text }));
        // Check if passwords match whenever either field changes
        if (field === 'newPassword') {
            setPasswordsMatch(text === formData.confirmPassword);
        } else {
            setPasswordsMatch(formData.newPassword === text);
        }
    };

    const handleSubmit = () => {
        if (!formData.newPassword || !formData.confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        // Here you would typically call your API to reset the password
        navigation.navigate('PasswordChangeSuccess');
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
            <Text style={tw`text-2xl text-[#121212] font-bold text-center mb-2`}>
                Reset Password
            </Text>
            <Text style={tw`text-sm text-[#6D6D6D] text-center mb-6`}>
                Create a new password for your account
            </Text>

            {/* New Password */}
            <InputBox
                placeholder="New password"
                type="password"
                value={formData.newPassword}
                onChangeText={handleChange('newPassword')}
                prefixIcon={
                    <Image
                        source={require('@/assets/images/lock.png')}

                    />
                }
                suffixIcon={
                    <TouchableOpacity onPress={() => setNewPasswordVisible(!newPasswordVisible)}>
                        {newPasswordVisible ? (
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
                secureTextEntry={!newPasswordVisible}
                containerStyle="h-[50px] border border-black rounded-full px-4 my-2"
                textStyle="text-base"
            />

            {/* Confirm Password */}
            <InputBox
                placeholder="Confirm new password"
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
                containerStyle={`h-[50px] border rounded-full px-4 my-2 ${passwordsMatch ? 'border-black' : 'border-red-500'
                    }`}
                textStyle="text-base"
            />

            {!passwordsMatch && formData.confirmPassword ? (
                <Text style={tw`text-red-500 text-sm mb-2`}>
                    Passwords do not match
                </Text>
            ) : null}

            {/* Password requirements hint */}
            <Text style={tw`text-sm text-[#6D6D6D] mb-4`}>
                Password must be at least 8 characters long
            </Text>

            {/* Submit Button */}
            <TouchableOpacity
                style={tw`bg-primary mt-4 rounded-full py-3 items-center`}
                onPress={handleSubmit}
            >
                <Text style={tw`text-white font-bold text-lg`}>Change Password</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ResetPassword;