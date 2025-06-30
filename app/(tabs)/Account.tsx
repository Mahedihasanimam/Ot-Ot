import CustomLogoutModal from '@/components/ui/CustomLogoutModal';
import Button from '@/components/util/Button';
import { useThemeContext } from '@/hooks/ThemeContext';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Account = () => {
    const { colors, dark } = useTheme();
    const { toggleTheme, isDarkMode } = useThemeContext();
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigation = useNavigation<any>();

    const handleToggleDarkMode = () => {
        toggleTheme();
    };

    const handleItemPress = (item: any, index: number) => {
        if (item.name === 'LogOut') {
            setShowLogoutModal(true);
            return;
        }

        setActiveItem(index);
        console.log('navigate to ', item.name);
        navigation.navigate(item.name);
    };

    const handleLogout = () => {
        setShowLogoutModal(false);
        // Clear user data or token here if needed
        navigation.replace('Login'); // or replace with login route
    };

    const menuItems = [
        {
            name: 'AccountsConnect',
            icon: <MaterialIcons name="edit" size={24} />,
            label: 'Accounts connect'
        },
        {
            name: 'EditProfile',
            icon: <MaterialIcons name="edit" size={24} />,
            label: 'Edit profile'
        },
        {
            name: 'ChangePassword',
            icon: <Ionicons name="key-outline" size={24} />,
            label: 'Change password'
        },
        {
            name: 'NotificationPreferences',
            icon: <Ionicons name="notifications-outline" size={24} />,
            label: 'Notification Preferences'
        },
        {
            name: 'TermsAndConditions',
            icon: <MaterialIcons name="description" size={24} />,
            label: 'Terms & Conditions'
        },
        {
            name: 'UpdateBusiness',
            icon: <Ionicons name="business-outline" size={24} />,
            label: 'Update business'
        },
        {
            name: 'AccountDetails',
            icon: <MaterialIcons name="account-circle" size={24} />,
            label: 'Account details'
        },
        {
            name: 'PrivacySettings',
            icon: <Ionicons name="shield-checkmark-outline" size={24} />,
            label: 'Privacy settings'
        },
        {
            name: 'DarkMode',
            icon: <MaterialIcons name="dark-mode" size={24} />,
            label: 'Dark mode',
            isToggle: true,
            rightComponent: (
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkMode ? '#FFFFFF' : '#f4f3f4'}
                    onValueChange={handleToggleDarkMode}
                    value={isDarkMode}
                />
            )
        },
        {
            name: 'LogOut',
            icon: <AntDesign name="logout" size={24} color="red" />,
            label: 'Log Out',
            textStyle: 'text-red-500'
        }
    ];

    return (
        <View style={tw`flex-1 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'}`}>
            <ScrollView
                contentContainerStyle={tw``} // Added padding bottom for better scroll
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Settings Button */}
                <Button
                    label="Profile Setting"
                    onPress={() => { }}
                    buttonStyle='bg-primary py-5 mt-2 rounded-full mx-4'
                    textStyle='text-white text-center text-[18px] font-semibold'
                />

                {/* Profile Card */}
                <View style={tw`items-center h-[220px] p-6 mx-4 my-4 rounded-lg ${dark ? 'bg-[#3D3D3D]' : 'bg-white'} border border-[#00000033]`}>
                    <Image
                        source={require('../../assets/images/avater.png')}
                        style={tw`w-20 h-20 rounded-full`}
                    />
                    <View style={tw`mt-4 items-center`}>
                        <Text style={[tw`text-xl font-bold`, { color: colors.text }]}>Shara Martinez</Text>
                        <View style={tw`flex-row items-center mt-1`}>
                            <Image
                                source={require('../../assets/images/email.png')}
                                style={tw`w-4 h-3 mr-1`}
                            />
                            <Text style={[tw`text-sm`, { color: colors.text, opacity: 0.7 }]}>
                                example@gmail.com
                            </Text>
                        </View>
                        <View style={tw`flex-row items-center mt-1`}>
                            <Image
                                source={require('../../assets/images/phone.png')}
                                style={tw`w-3 h-3 mr-1`}
                            />
                            <Text style={[tw`text-sm`, { color: colors.text, opacity: 0.7 }]}>
                                +1235698745
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Menu Items */}
                <View style={tw`px-4 mt-2 `}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            disabled={item.isToggle}
                            key={index}
                            style={[
                                tw`flex-row items-center justify-between py-4 px-4 rounded-full border border-[#00000033] mb-3`,
                                dark ? tw`bg-[#3D3D3D]` : tw`bg-white`,
                                activeItem === index && !item.isToggle ? tw`bg-[#007BFF]` : {}
                            ]}
                            onPress={() => handleItemPress(item, index)}
                            activeOpacity={0.7}
                        >
                            <View style={tw`flex-row items-center`}>
                                {React.cloneElement(item.icon, {
                                    color: activeItem === index && !item.isToggle
                                        ? '#FFFFFF'
                                        : (item.icon.props.color || (dark ? '#258EFF' : '#505050'))
                                })}
                                <Text style={[
                                    tw`ml-4 text-[16px] font-medium`,
                                    activeItem === index && !item.isToggle
                                        ? tw`text-white`
                                        : dark
                                            ? tw`text-white`
                                            : tw`text-[#505050]`,
                                    item.textStyle ? tw`${item.textStyle}` : {}
                                ]}>
                                    {item.label}
                                </Text>
                            </View>

                            {item.rightComponent || (
                                !item.isToggle && (
                                    <Feather
                                        name="chevron-right"
                                        size={20}
                                        color={activeItem === index ? '#FFFFFF' : (dark ? '#FFFFFF' : '#505050')}
                                    />
                                )
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
                {/* Logout Modal - Updated with proper styling */}
                <CustomLogoutModal
                    visible={showLogoutModal}
                    onCancel={() => setShowLogoutModal(false)}
                    onConfirm={handleLogout}
                />
            </ScrollView>

        </View>
    );
};

// Add this to your CustomLogoutModal component file
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    darkModalContent: {
        backgroundColor: '#1F2937',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#000',
    },
    darkTitle: {
        color: '#FFF',
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        color: '#666',
    },
    darkMessage: {
        color: '#D1D5DB',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginLeft: 15,
    },
    cancelText: {
        color: '#3B82F6',
        fontWeight: '600',
    },
    confirmText: {
        color: '#EF4444',
        fontWeight: '600',
    },
});

export default Account;