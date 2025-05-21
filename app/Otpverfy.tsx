import tw from '@/assets/lib/tailwind';
import BackButtonOnlyIcon from '@/components/util/BackButtonOnlyIcon';
import { useNavigation } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const OtpVerify = () => {
    const navigation = useNavigation<any>();
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const [countdown, setCountdown] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const inputRefs = useRef<(TextInput | null)[]>([]);

    // Handle OTP input change
    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return; // Prevent pasting

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace
    const handleKeyPress = (index: number, key: string) => {
        if (key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Countdown timer for resend OTP
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else {
            setIsResendDisabled(false);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    const handleResendOtp = () => {
        setCountdown(60);
        setIsResendDisabled(true);
        // Add your resend OTP logic here
    };

    const handleVerify = () => {
        const fullOtp = otp.join('');
        if (fullOtp.length === 6) {
            navigation.navigate('ResetPassword'); // Or your next screen
        }
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
                Enter OTP
            </Text>
            <Text style={tw`text-sm text-[#000000] font-normal text-center mb-6`}>
                It must be different from your previous password.
            </Text>

            {/* OTP Input Boxes */}
            <View style={tw`flex-row justify-between mb-6`}>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        style={tw`w-12 h-12 border border-gray-300 rounded-lg text-center text-lg`}
                        keyboardType="numeric"
                        maxLength={1}
                        value={otp[index]}
                        onChangeText={(text) => handleOtpChange(index, text)}
                        onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
                        selectTextOnFocus
                    />
                ))}
            </View>

            {/* Resend OTP */}
            <View style={tw`flex-row justify-center mb-8`}>
                <Text style={tw`text-sm text-[#6D6D6D]`}>Didn't receive code? </Text>
                <TouchableOpacity
                    onPress={handleResendOtp}
                    disabled={isResendDisabled}
                >
                    <Text style={tw`text-sm text-primary ${isResendDisabled ? 'opacity-50' : ''}`}>
                        Resend {isResendDisabled && `(${countdown}s)`}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Verify Button */}
            <TouchableOpacity
                style={tw`bg-primary rounded-xl py-3 items-center`}
                onPress={handleVerify}
            >
                <Text style={tw`text-white font-bold text-lg`}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OtpVerify;