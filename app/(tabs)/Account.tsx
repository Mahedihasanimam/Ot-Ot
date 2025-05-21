import { useThemeContext } from '@/hooks/ThemeContext';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Account = () => {

    const { colors } = useTheme();

    const { theme, toggleTheme, isDarkMode } = useThemeContext();


    // Remove the local state for dark mode and use the context instead
    // ...

    // Update the toggle function to use the context
    const handleToggleDarkMode = () => {
        toggleTheme();
    };

    return (
        <ScrollView style={[tw`flex-1`, { backgroundColor: colors.background }]}>
            {/* Profile Header */}
            <View style={tw`flex-row items-center p-5`}>
                <View style={tw`w-16 h-16 rounded-full bg-blue-600 justify-center items-center mr-5`}>
                    <Text style={tw`text-white text-2xl font-bold`}>SM</Text>
                </View>
                <View style={tw`flex-1`}>
                    <Text style={[tw`text-xl font-bold`, { color: colors.text }]}>Shara Martinez</Text>
                    <Text style={[tw`text-sm mt-1`, { color: colors.text, opacity: 0.7 }]}>example@gmail.com</Text>
                    <Text style={[tw`text-sm`, { color: colors.text, opacity: 0.7 }]}>+1235698745</Text>
                </View>
            </View>

            {/* Divider */}
            <View style={[tw`h-px my-2`, { backgroundColor: colors.border }]} />

            {/* Account Settings */}
            <View style={tw`px-5`}>
                <Text style={[tw`text-lg font-bold mb-4 mt-3`, { color: colors.text }]}>Accounts connect</Text>

                {[
                    { icon: <MaterialIcons name="edit" size={24} color={colors.text} />, text: 'Edit profile' },
                    { icon: <Ionicons name="key-outline" size={24} color={colors.text} />, text: 'Change password' },
                    { icon: <Ionicons name="notifications-outline" size={24} color={colors.text} />, text: 'Notification Preferences' },
                    { icon: <MaterialIcons name="description" size={24} color={colors.text} />, text: 'Terms & Conditions' },
                    { icon: <Ionicons name="business-outline" size={24} color={colors.text} />, text: 'Update business' },
                    { icon: <MaterialIcons name="account-circle" size={24} color={colors.text} />, text: 'Account details' },
                    { icon: <Ionicons name="shield-checkmark-outline" size={24} color={colors.text} />, text: 'Privacy settings' },
                    {
                        icon: <MaterialIcons name="dark-mode" size={24} color={colors.text} />,
                        text: 'Dark mode',
                        rightComponent: (
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isDarkMode ? '#007BFF' : '#f4f3f4'}
                                onValueChange={handleToggleDarkMode}
                                value={isDarkMode}
                            />
                        )
                    },
                    {
                        icon: <AntDesign name="logout" size={24} color={'red'} />,
                        text: 'Logout',
                        textStyle: 'text-red-500'
                    },
                ].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[tw`flex-row items-center justify-between py-4`,
                        index < 8 ? { borderBottomWidth: 1, borderBottomColor: colors.border } : {}]}
                    >
                        <View style={tw`flex-row items-center`}>
                            {item.icon}
                            <Text style={[tw`ml-4`, { color: colors.text }, item.textStyle ? tw`${item.textStyle}` : {}]}>
                                {item.text}
                            </Text>
                        </View>
                        {item.rightComponent || <Feather name="chevron-right" size={20} color={colors.text} />}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default Account;