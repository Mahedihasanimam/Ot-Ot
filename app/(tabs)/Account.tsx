// import Button from '@/components/util/Button';
// import { useThemeContext } from '@/hooks/ThemeContext';
// import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { useTheme } from '@react-navigation/native';
// import { useNavigation } from 'expo-router';
// import React, { useState } from 'react';
// import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
// import tw from 'twrnc';

// const Account = () => {
//     const { colors, dark } = useTheme();
//     const { theme, toggleTheme, isDarkMode } = useThemeContext();
//     const [activeItem, setActiveItem] = useState(1);
// const navgation = useNavigation();









//     const handleToggleDarkMode = () => {
//         toggleTheme();
//     };

//     const handleItemPress = (item) => {
//         navgation.navigate(`${item.name}`, { item });
//         setActiveItem(index);
//         // Add your navigation logic here
//         // navigation.navigate('ScreenName');
//     };

//     return (
//         <ScrollView style={[tw`flex-1 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'} `]}>
//             <Button label="Profile Setting" onPress={() => { }} buttonStyle='bg-primary py-5 mt-8 rounded-full mx-4' textStyle='text-white text-center text-[18px] font-semibold' />

//             <View style={tw` items-center h-[220px] p-6 border border-[#00000033] mx-4 my-4 rounded-lg ${dark ? 'bg-[#3D3D3D]' : 'bg-white'} `}>

//                 <Image source={require('../../assets/images/avater.png')} style={tw`w-20 h-20 rounded-full`} />
//                 <View style={tw`flex-1 text-center`}>
//                     <Text style={[tw`text-xl font-bold text-center mx-auto pb-1`, { color: colors.text }]}>Shara Martinez</Text>
//                     <View style={tw`flex flex-row items-center `}>
//                         <Image source={require('../../assets/images/email.png')} style={tw`w-[16px] h-[12px]`} />
//                         <Text style={[tw`text-sm  text-center`, { color: colors.text, opacity: 0.7 }]}>   example@gmail.com</Text>
//                     </View>
//                     <View style={tw`flex flex-row items-center gap-2 text-center mx-auto pt-1 `}>
//                         <Image source={require('../../assets/images/phone.png')} style={tw`w-[16px] h-[12px] `} />
//                         <Text style={[tw`text-sm text-center`, { color: colors.text, opacity: 0.7 }]}>+1235698745</Text>

//                     </View>
//                 </View>
//             </View>



//             {/* Account Settings */}
//             <View style={tw`px-5 mt-4 gap-4 mb-4`}>
//                 {[
//                     {
//                         name: 'AccountsConnect',
//                         icon: <MaterialIcons style={tw`${dark ? 'text-[#258EFF]' : 'text-[#505050]'}`} name="edit" size={24} color={activeItem === 0 ? '#FFFFFF' : colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 0 ? 'text-white' : ''}`}>Accounts connect</Text>
//                         )
//                     },
//                     {
//                         name: 'EditProfile',
//                         icon: <MaterialIcons name="edit" size={24} color={activeItem === 1 ? '#FFFFFF' : colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 1 ? 'text-white' : ''}`}>Edit profile</Text>
//                         )
//                     },
//                     {
//                         name: 'ChangePassword',
//                         icon: <Ionicons name="key-outline" size={24} color={activeItem === 2 ? '#FFFFFF' : colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 2 ? 'text-white' : ''}`}>Change password</Text>
//                         )
//                     },
//                     {
//                         name: 'NotificationPreferences',
//                         icon: <Ionicons name="notifications-outline" size={24} color={activeItem === 3 ? '#FFFFFF' : colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 3 ? 'text-white' : ''}`}>Notification Preferences</Text>
//                         )
//                     },
//                     {
//                         name: 'TermsAndConditions',
//                         icon: <MaterialIcons name="description" size={24} color={activeItem === 4 ? '#FFFFFF' : colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 4 ? 'text-white' : ''}`}>Terms & Conditions</Text>
//                         )
//                     },
//                     {
//                         name: 'UpdateBusiness',
//                         icon: <Ionicons name="business-outline" size={24} color={activeItem === 5 ? '#FFFFFF' : colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 5 ? 'text-white' : ''}`}>Update business</Text>
//                         )
//                     },
//                     {
//                         name: 'AccountDetails',
//                         icon: <MaterialIcons name="account-circle" size={24} color={activeItem === 6 ? '#FFFFFF' : colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 6 ? 'text-white' : ''}`}>Account details</Text>
//                         )
//                     },
//                     {
//                         name: 'PrivacySettings',
//                         icon: <Ionicons name="shield-checkmark-outline" size={24} color={activeItem === 7 ? '#FFFFFF' : colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 7 ? 'text-white' : ''}`}>Privacy settings</Text>
//                         )
//                     },
//                     {
//                         name: 'DarkMode',
//                         icon: <MaterialIcons name="dark-mode" size={24} color={colors.text} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 8 ? 'text-white' : ''}`}>Dark mode</Text>
//                         ),
//                         rightComponent: (
//                             <Switch
//                                 trackColor={{ false: '#767577', true: '#81b0ff' }}
//                                 thumbColor={isDarkMode ? '#FFFFFF' : '#f4f3f4'}
//                                 onValueChange={handleToggleDarkMode}
//                                 value={isDarkMode}
//                             />
//                         ),
//                         isToggle: true
//                     },
//                     {
//                         name: 'LogOut',
//                         icon: <AntDesign name="logout" size={24} color={'red'} />,
//                         text: (
//                             <Text style={tw`text-[16px] font-medium ${dark ? 'text-white' : 'text-[#505050]'} ${activeItem === 9 ? 'text-white' : ''}`}>Log Out</Text>
//                         ),
//                         textStyle: 'text-red-500'
//                     },
//                 ].map((item, index, name) => (
//                     <TouchableOpacity

//                         key={index}
//                         style={[
//                             tw`flex-row items-center justify-between py-4 px-4 rounded-full border border-gray-300 ${dark ? 'bg-[#3D3D3D]' : 'bg-white'}`,
//                             index < 8 ? { borderBottomWidth: 1, borderBottomColor: colors.border } : {},
//                             activeItem === index && !item.isToggle ? { backgroundColor: '#007BFF' } : {}
//                         ]}
//                         onPress={() => !item.isToggle && handleItemPress(item)}
//                         activeOpacity={0.7}
//                     >
//                         <View style={tw`flex-row items-center`}>
//                             {item.icon}
//                             <Text style={[
//                                 tw`ml-4`,
//                                 { color: activeItem === index ? '#FFFFFF' : colors.text },
//                                 item.textStyle ? tw`${item.textStyle}` : {}
//                             ]}>
//                                 {item.text}
//                             </Text>
//                         </View>
//                         {item.rightComponent || (
//                             <Feather
//                                 style={tw`font-bold text-[18px]`}
//                                 name="chevron-right"
//                                 size={20}
//                                 color={activeItem === index ? '#FFFFFF' : colors.text}
//                             />
//                         )}
//                     </TouchableOpacity>
//                 ))}
//             </View>
//         </ScrollView>
//     );
// };

// export default Account;




import Button from '@/components/util/Button';
import { useThemeContext } from '@/hooks/ThemeContext';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Account = () => {
    const { colors, dark } = useTheme();
    const { toggleTheme, isDarkMode } = useThemeContext();
    const [activeItem, setActiveItem] = useState(null);
    const navigation = useNavigation<any>();

    const handleToggleDarkMode = () => {
        toggleTheme();
    };

    const handleItemPress = (item, index) => {


        if (item.name === 'LogOut') {
            Alert.alert(
                'Confirm Logout',
                'Are you sure you want to log out?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Log Out',
                        style: 'destructive',
                        onPress: () => {

                            // Clear user data or token here if needed
                            navigation.navigate('Login'); // or replace with login route
                        },
                    },
                ],
                { cancelable: true }
            );
            return;
        }

        setActiveItem(index);
        console.log('navigate to ', item.name);
        navigation.navigate(item.name);
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
                contentContainerStyle={tw`pb-10`}
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Settings Button */}
                <Button
                    label="Profile Setting"
                    onPress={() => { }}
                    buttonStyle='bg-primary py-5 mt-8 rounded-full mx-4'
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
                <View style={tw`px-4 mt-2 mb-6`}>
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
            </ScrollView>
        </View>
    );
};

export default Account;