import BackButton from '@/components/util/BackButton';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import tw from 'twrnc';




const socialButtons = [
    {
        name: 'Facebook',
        icon: require('@/assets/images/facebook.png'),
        gradient: ['#1877F2', '#42A5F5'],
    },
    {
        name: 'Instagram',
        icon: require('@/assets/images/instagram.png'),
        gradient: ['#feda75', '#d62976', '#962fbf'],
    },
    {
        name: 'Tiktok',
        icon: require('@/assets/images/tiktok.png'),
        gradient: ['#000000', '#833ab4', '#00f2ea'],
    },
    {
        name: 'LinkedIn',
        icon: require('@/assets/images/linkedin.png'),
        gradient: ['#0077b5', '#00a0dc'],
    },
];

const AccountsConnect = () => {
    const { dark } = useTheme();

    return (
        <ScrollView contentContainerStyle={tw` ${dark ? 'bg-[#1E1E1E]' : 'bg-white'} h-full`}>
            <BackButton title="Accounts connect" />

            <View style={tw`mt-8 p-4`}>

                {socialButtons.map((item, index) => (
                    <LinearGradient
                        key={index}
                        colors={item.gradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={tw`rounded-full mb-4`}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={tw`flex-row items-center px-5 py-4`}
                        >
                            <Image
                                source={item.icon}
                                style={tw`w-6 h-6 mr-3`}
                                resizeMode="contain"
                            />
                            <Text style={tw`text-white text-[15px] font-semibold`}>
                                Connect your {item.name} account
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                ))}
            </View>

        </ScrollView>
    );
};

export default AccountsConnect;
