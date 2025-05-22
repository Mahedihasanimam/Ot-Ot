import Button from '@/components/util/Button';
import { useThemeContext } from '@/hooks/ThemeContext';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Account = () => {
    const { colors, dark } = useTheme();
    const { theme, toggleTheme, isDarkMode } = useThemeContext();
    const [activeItem, setActiveItem] = useState(1);

    const handleToggleDarkMode = () => {
        toggleTheme();
    };

    const handleItemPress = (index) => {
        setActiveItem(index);
        // Add your navigation logic here
        // navigation.navigate('ScreenName');
    };

    return (
        <ScrollView style={[tw`flex-1 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'} `]}>
            <Button label="Profile Setting" onPress={() => { }} buttonStyle='bg-primary py-5 mt-8 rounded-full mx-4' textStyle='text-white text-center text-[18px] font-semibold' />

            <View style={tw` items-center h-[220px] p-6 border border-[#00000033] mx-4 my-4 rounded-lg ${dark ? 'bg-[#3D3D3D]' : 'bg-white'} `}>

                <Image source={require('../../assets/images/avater.png')} style={tw`w-20 h-20 rounded-full`} />
                <View style={tw`flex-1 text-center`}>
                    <Text style={[tw`text-xl font-bold text-center mx-auto pb-1`, { color: colors.text }]}>Shara Martinez</Text>
                    <View style={tw`flex flex-row items-center `}>
                        <Image source={require('../../assets/images/email.png')} style={tw`w-[16px] h-[12px]`} />
                        <Text style={[tw`text-sm  text-center`, { color: colors.text, opacity: 0.7 }]}>   example@gmail.com</Text>
                    </View>
                    <View style={tw`flex flex-row items-center gap-2 text-center mx-auto pt-1 `}>
                        <Image source={require('../../assets/images/phone.png')} style={tw`w-[16px] h-[12px] `} />
                        <Text style={[tw`text-sm text-center`, { color: colors.text, opacity: 0.7 }]}>+1235698745</Text>

                    </View>
                </View>
            </View>



            {/* Account Settings */}
            <View style={tw`px-5 mt-4 gap-4 mb-4`}>
                {[
                    {
                        icon: <MaterialIcons style={tw`${dark ? 'text-[#258EFF]' : 'text-[#505050]'}`} name="edit" size={24} color={activeItem === 0 ? '#FFFFFF' : colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 0 ? 'text-white' : ''}`}>Accounts connect</Text>
                        )
                    },
                    {
                        icon: <MaterialIcons name="edit" size={24} color={activeItem === 1 ? '#FFFFFF' : colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 1 ? 'text-white' : ''}`}>Edit profile</Text>
                        )
                    },
                    {
                        icon: <Ionicons name="key-outline" size={24} color={activeItem === 2 ? '#FFFFFF' : colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 2 ? 'text-white' : ''}`}>Change password</Text>
                        )
                    },
                    {
                        icon: <Ionicons name="notifications-outline" size={24} color={activeItem === 3 ? '#FFFFFF' : colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 3 ? 'text-white' : ''}`}>Notification Preferences</Text>
                        )
                    },
                    {
                        icon: <MaterialIcons name="description" size={24} color={activeItem === 4 ? '#FFFFFF' : colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 4 ? 'text-white' : ''}`}>Terms & Conditions</Text>
                        )
                    },
                    {
                        icon: <Ionicons name="business-outline" size={24} color={activeItem === 5 ? '#FFFFFF' : colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 5 ? 'text-white' : ''}`}>Update business</Text>
                        )
                    },
                    {
                        icon: <MaterialIcons name="account-circle" size={24} color={activeItem === 6 ? '#FFFFFF' : colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 6 ? 'text-white' : ''}`}>Account details</Text>
                        )
                    },
                    {
                        icon: <Ionicons name="shield-checkmark-outline" size={24} color={activeItem === 7 ? '#FFFFFF' : colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 7 ? 'text-white' : ''}`}>Privacy settings</Text>
                        )
                    },
                    {
                        icon: <MaterialIcons name="dark-mode" size={24} color={colors.text} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 8 ? 'text-white' : ''}`}>Dark mode</Text>
                        ),
                        rightComponent: (
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isDarkMode ? '#FFFFFF' : '#f4f3f4'}
                                onValueChange={handleToggleDarkMode}
                                value={isDarkMode}
                            />
                        ),
                        isToggle: true
                    },
                    {
                        icon: <AntDesign name="logout" size={24} color={'red'} />,
                        text: (
                            <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 9 ? 'text-white' : ''}`}>Log Out</Text>
                        ),
                        textStyle: 'text-red-500'
                    },
                ].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            tw`flex-row items-center justify-between py-4 px-4 rounded-full border border-gray-300 ${dark ? 'bg-[#3D3D3D]' : 'bg-white'}`,
                            index < 8 ? { borderBottomWidth: 1, borderBottomColor: colors.border } : {},
                            activeItem === index && !item.isToggle ? { backgroundColor: '#007BFF' } : {}
                        ]}
                        onPress={() => !item.isToggle && handleItemPress(index)}
                        activeOpacity={0.7}
                    >
                        <View style={tw`flex-row items-center`}>
                            {item.icon}
                            <Text style={[
                                tw`ml-4`,
                                { color: activeItem === index ? '#FFFFFF' : colors.text },
                                item.textStyle ? tw`${item.textStyle}` : {}
                            ]}>
                                {item.text}
                            </Text>
                        </View>
                        {item.rightComponent || (
                            <Feather
                                style={tw`font-bold text-[18px]`}
                                name="chevron-right"
                                size={20}
                                color={activeItem === index ? '#FFFFFF' : colors.text}
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default Account;