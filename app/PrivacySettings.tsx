import BackButton from '@/components/util/BackButton'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'

const PrivacySettings = () => {
    const { colors, dark } = useTheme();
    const [profileVisibility, setProfileVisibility] = useState('-Select-')
    const [showVisibilityDropdown, setShowVisibilityDropdown] = useState(false)
    const [searchEngines, setSearchEngines] = useState(false)
    const [shareData, setShareData] = useState(false)
    const [locationSharing, setLocationSharing] = useState(false)
    const [activityStatus, setActivityStatus] = useState(true)

    const visibilityOptions = [
        {
            label: 'Only me',
            value: 'only_me',
            icon: (
                <Image
                    source={require('../assets/images/lock.png')}

                />
            ),
        },
        {
            label: 'Friends',
            value: 'friends',
            icon: (
                <Image
                    source={require('../assets/images/friends.png')}

                />
            ),
        },

        {
            label: 'Everyone',
            value: 'everyone',
            icon: (
                <Image
                    source={require('../assets/images/gloval.png')}

                />
            ),
        },
    ];
    return (
        <ScrollView style={tw`flex-1 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'}  pb-6 `}>
            <BackButton title="Privacy Settings" />
            <View style={tw`p-2`}>

                {/* Profile Visibility */}
                <View style={tw`mb-6`}>
                    <View style={tw`flex flex-row items-start gap-2 border border-[#00000033] rounded-lg p-4 mt-4 ${dark ? 'bg-[#3D3D3D]' : 'bg-white'}`}>
                        <View>
                            <Image source={require('@/assets/images/profilegard.png')} />
                        </View>
                        <View style={tw``}>
                            <Text style={tw`text-lg ${dark ? 'text-white' : 'text-[#000000]'}  font-bold mb-1`}>Profile Visibility</Text>
                            <Text style={tw`text-sm text-[#888888] mb-3`}>
                                Control who can see your profile information
                            </Text>
                            <TouchableOpacity
                                style={tw` rounded-lg p-3 flex-row justify-between items-center ${dark ? 'bg-[#505050]' : 'bg-[#F6F6F6]'}`}
                                onPress={() => setShowVisibilityDropdown(!showVisibilityDropdown)}
                            >
                                <Text style={tw`${dark ? 'text-white' : 'text-[#000000]'}`}>{profileVisibility}</Text>
                                <Ionicons
                                    name={showVisibilityDropdown ? 'chevron-up' : 'chevron-down'}
                                    size={20}
                                    color="gray"
                                />
                            </TouchableOpacity>

                            {showVisibilityDropdown && (
                                <View style={tw`mt-1 border  rounded-lg absolute top-25 w-full ${dark ? 'bg-[#3D3D3D]' : 'bg-white border-gray-300'}  z-50`}>
                                    {visibilityOptions.map((option) => (
                                        <TouchableOpacity
                                            key={option.value}
                                            style={tw`p-3 border-b border-[#00000033]`}
                                            onPress={() => {
                                                setProfileVisibility(option.value)
                                                setShowVisibilityDropdown(false)
                                            }}
                                        >
                                            <View style={tw`flex-row items-center gap-2`}>
                                                {option.icon}
                                                <Text style={tw`${dark ? 'text-white' : 'text-[#000000]'}`}>{option.label}</Text>

                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>

                    </View>



                </View>



                {/* Allow Search Engines */}
                <PrivacyToggle
                    icon={<Image source={require('@/assets/images/browser.png')} />}
                    title="Allow Search Engines to Index Profile"
                    description="Let search engines find your profile."
                    value={searchEngines}
                    onValueChange={setSearchEngines}
                />



                {/* Share Data with Third Parties */}
                <PrivacyToggle
                    icon={<Image source={require('@/assets/images/shareblue.png')} />}
                    title="Share Data with Third Parties"
                    description="Allow sharing of your data with third-party services."
                    value={shareData}
                    onValueChange={setShareData}
                />



                {/* Allow Location Sharing */}
                <PrivacyToggle
                    icon={<Image source={require('@/assets/images/location.png')} />}
                    title="Allow Location Sharing"
                    description="Share your location with apps and services."
                    value={locationSharing}
                    onValueChange={setLocationSharing}
                />



                {/* Request Data/Account Deletion */}
                <View style={tw`mb-4 border ${dark ? 'border-[#3D3D3D] bg-[#3D3D3D]' : 'border-[#00000033] bg-white'} rounded-2xl p-4 `}>
                    <View style={tw`flex-row items-start gap-4`}>

                        {/* Icon */}
                        <View>
                            <Image
                                source={require('@/assets/images/detabase.png')}
                                style={tw`w-10 h-10`} // Adjust size as needed
                                resizeMode="contain"
                            />
                        </View>

                        {/* Text Content */}
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-lg font-bold mb-1 ${dark ? 'text-white' : 'text-[#000000]'}`}>
                                Request My Data/Account Deletion
                            </Text>
                            <Text style={tw`text-sm ${dark ? 'text-white' : 'text-[#000000]'} mb-3`}>
                                Delete your account.
                            </Text>

                            {/* Button inside content block for alignment */}

                        </View>
                        <View>
                            <TouchableOpacity style={tw`bg-[#FF5252] rounded-full py-3 px-6`}>
                                <Text style={tw`text-white text-center font-medium text-[16px]`}>
                                    Request
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>




                {/* Show Activity Status */}
                <PrivacyToggle
                    icon={<Image source={require('@/assets/images/eyeblue.png')} />}
                    title="Show My Activity Status"
                    description="Let others see when you're active"
                    value={activityStatus}
                    onValueChange={setActivityStatus}
                />

            </View>
        </ScrollView>
    )
}

const PrivacyToggle = ({ title, description, value, onValueChange, icon }) => {
    const { dark } = useTheme();
    return (
        <View style={tw`mb-4 border border-[#00000033] rounded-2xl p-4 min-h-[111px] ${dark ? 'bg-[#3D3D3D]' : 'bg-white'}`}>
            <View style={tw`flex-row justify-between items-center gap-4 mb-1 flex-1`}>
                <View style={tw`flex-row items-center gap-4 flex-1`}>
                    <View>
                        {
                            icon
                        }
                    </View>
                    <View>
                        <Text style={tw`text-[18px] font-medium ${dark ? 'text-white' : 'text-[#000000]'}`}>{title}</Text>
                        <Text style={tw`text-sm text-[#888888] mr-2`}>{description}</Text>

                    </View>
                </View>
                <View>

                    <Switch
                        value={value}
                        onValueChange={onValueChange}
                        thumbColor={value ? '#007AFF' : '#f4f3f4'}
                        trackColor={{ false: '#767577', true: '#007AFF' }}
                    />
                </View>
            </View>

        </View>
    )
}

export default PrivacySettings