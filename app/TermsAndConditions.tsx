import tw from '@/assets/lib/tailwind';
import BackButton from '@/components/util/BackButton';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const TermsAndConditions = () => {
    return (
        <ScrollView>
            <BackButton title="Terms & Conditions" />
            <View style={tw`p-4`}>
                <Text style={tw`text-xl font-bold mb-4 text-[#007BFF]`}>
                    Welcome to Our App!
                </Text>

                <Text style={tw`mb-4 text-justify`}>
                    By accessing or using our application, you agree to be bound by these Terms & Conditions. Please read them carefully before using the app.
                </Text>

                <Text style={tw`text-lg font-semibold mb-2`}>1. Use of the App</Text>
                <Text style={tw`mb-4 text-justify`}>
                    You agree to use the app only for lawful purposes and in accordance with all applicable laws and regulations. Any misuse or unauthorized access is strictly prohibited.
                </Text>

                <Text style={tw`text-lg font-semibold mb-2`}>2. Privacy Policy</Text>
                <Text style={tw`mb-4 text-justify`}>
                    Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                </Text>

                <Text style={tw`text-lg font-semibold mb-2`}>3. User Accounts</Text>
                <Text style={tw`mb-4 text-justify`}>
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </Text>

                <Text style={tw`text-lg font-semibold mb-2`}>4. Changes to Terms</Text>
                <Text style={tw`mb-4 text-justify`}>
                    We reserve the right to modify these Terms & Conditions at any time. We will notify you of any changes, and continued use of the app constitutes acceptance of the new terms.
                </Text>

                <Text style={tw`text-lg font-semibold mb-2`}>5. Contact Us</Text>
                <Text style={tw`mb-4 text-justify`}>
                    If you have any questions about these Terms & Conditions, please contact our support team.
                </Text>

                <Text style={tw`mt-6 text-sm text-center text-gray-500`}>
                    © 2025 Your Company Name. All rights reserved.
                </Text>
            </View>
        </ScrollView>
    );
};

export default TermsAndConditions;
