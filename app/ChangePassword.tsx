import tw from '@/assets/lib/tailwind';
import BackButton from '@/components/util/BackButton';
import Button from '@/components/util/Button';
import InputBox from '@/components/util/InputBox';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, ScrollView, View } from 'react-native';

const ChangePassword = () => {
    const { dark } = useTheme();

    const [formData, setFormData] = React.useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (fieldName: string) => (value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleSubmit = () => {
        const { currentPassword, newPassword, confirmPassword } = formData;

        if (!currentPassword || !newPassword || !confirmPassword) {
            Alert.alert('Error', 'All fields are required');
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'New password and confirmation do not match');
            return;
        }

        // Your password update logic goes here
        Alert.alert('Success', 'Password changed successfully!');
    };

    const eyeVisible = <Image source={require('@/assets/images/eye.png')} />;
    const eyeHidden = <Image source={require('@/assets/images/eyeclose.png')} />;
    const lockIcon = <Image source={require('@/assets/images/lock.png')} />;

    return (
        <ScrollView>
            <BackButton title="Change Password" />
            <View style={tw`p-4`}>
                {/* Current Password */}
                <InputBox
                    placeholder="Current password"
                    type="password"
                    value={formData.currentPassword}
                    onChangeText={handleChange('currentPassword')}
                    prefixIcon={lockIcon}
                    toggleVisibilityIcon={{
                        visible: eyeVisible,
                        hidden: eyeHidden,
                    }}
                    containerStyle="h-[50px] border border-gray-500 rounded-full px-4 my-2"
                    textStyle={dark ? 'text-white' : 'text-black'}
                />

                {/* New Password */}
                <InputBox
                    placeholder="New password"
                    type="password"
                    value={formData.newPassword}
                    onChangeText={handleChange('newPassword')}
                    prefixIcon={lockIcon}
                    toggleVisibilityIcon={{
                        visible: eyeVisible,
                        hidden: eyeHidden,
                    }}
                    containerStyle="h-[50px] border border-gray-500 rounded-full px-4 my-2"
                    textStyle={dark ? 'text-white' : 'text-black'}
                />

                {/* Confirm Password */}
                <InputBox
                    placeholder="Confirm new password"
                    type="password"
                    value={formData.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    prefixIcon={lockIcon}
                    toggleVisibilityIcon={{
                        visible: eyeVisible,
                        hidden: eyeHidden,
                    }}
                    containerStyle="h-[50px] border border-gray-500 rounded-full px-4 my-2"
                    textStyle={dark ? 'text-white' : 'text-black'}
                />

                <Button
                    buttonStyle="mt-[100%] bg-[#007BFF] w-full p-5 text-center text-white rounded-full"
                    textStyle="text-[#FFFFFF] text-[18px] font-semibold text-center"
                    label="Save"
                    onPress={handleSubmit}
                />
            </View>
        </ScrollView>
    );
};

export default ChangePassword;
