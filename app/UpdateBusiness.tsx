import BackButton from '@/components/util/BackButton'
import Button from '@/components/util/Button'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'

const UpdateBusiness = () => {
    const { dark } = useTheme();

    const handleSubmit = () => {
        Alert.alert('Success', 'Business updated successfully!');
    }
    return (
        <ScrollView style={tw`flex-1 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'} mt-8`}>
            <BackButton title="Update Business" />

            <View style={tw`p-4 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'}`}>
                {/* Google My Business Section */}

                <View style={tw`flex flex-row items-center gap-4 border border-[#00000033] rounded-2xl p-4 mb-6 ${dark ? 'bg-[#3D3D3D]' : 'bg-white'}`}>
                    <Image
                        source={require('@/assets/images/googlebusiness.png')}

                    />
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-lg font-bold mb-2 ${dark ? 'text-white' : 'text-black'}`}>Google My Business</Text>
                        <Text style={tw`text-sm ${dark ? 'text-white' : 'text-gray-600'} mb-8`}>
                            Pull all your business information directly from Google My Business
                        </Text>
                        <TouchableOpacity style={tw`bg-[#14A901] items-center py-2 rounded-full w-[96px] absolute right-4 bottom-0`}>
                            <Text style={tw`text-sm text-white font-medium px-2`}>Connected</Text>
                        </TouchableOpacity>
                    </View>

                </View>


                {/* Business Name */}
                <View style={tw`mb-5`}>

                    <TextInput
                        placeholder="Business Name"
                        style={tw`border border-[#00000033] h-[60px]  px-4 text-base rounded-full  text-[16px] font-medium ${dark ? 'bg-[#3D3D3D] text-white placeholder:text-white' : 'bg-white text-[#000000]'}`}
                    />
                </View>

                {/* Business Description */}
                <View style={tw`mb-5`}>


                    <TextInput
                        placeholder="Business Description"
                        style={tw`border border-[#00000033] rounded-2xl px-3 text-base h-32 ${dark ? 'bg-[#3D3D3D] text-white placeholder:text-white' : 'bg-white text-[#000000]'}`}
                        multiline
                        textAlignVertical='top'
                    />
                    <Text style={tw`text-sm ${dark ? 'text-[#AFAFAF]' : 'text-gray-600'} mt-2  italic`}>
                        Be specific about product or service your offer
                    </Text>
                </View>

                {/* Industry Category */}
                <View style={tw`mb-5`}>
                    <Text style={tw`text-base font-semibold mb-2 ${dark ? 'text-white' : 'text-black'}`}>Industry category</Text>
                    <View style={tw`border border-[#00000033] h-[60px]  px-4 text-base rounded-full  text-[16px] font-medium items-start justify-center ${dark ? 'bg-[#3D3D3D] text-white placeholder:text-white' : 'bg-white text-[#000000]'}`}>
                        <Text style={tw`text-gray-500 text-base`}>- select your industry -</Text>
                    </View>
                </View>

                {/* Business Location */}
                <View style={tw`mb-5`}>
                    <Text style={tw`text-base font-semibold mb-2 ${dark ? 'text-white' : 'text-black'}`}>Business Location</Text>
                    <TextInput
                        placeholder="Enter your business location"
                        style={tw`border border-[#00000033] h-[60px]  px-4 text-base rounded-full  text-[16px] font-medium ${dark ? 'bg-[#3D3D3D] text-white placeholder:text-white' : 'bg-white text-[#000000]'}`}
                    />
                </View>

                {/* Current Promotions */}
                <View style={tw`mb-5`}>
                    <Text style={tw`text-base font-semibold mb-2 ${dark ? 'text-white' : 'text-black'}`}>Current Promotions</Text>
                    <TextInput
                        placeholder="Type here..."
                        style={tw`border border-[#00000033] rounded-2xl px-3 text-base h-32 ${dark ? 'bg-[#3D3D3D] text-white placeholder:text-white' : 'bg-white text-[#000000]'}`}
                        multiline
                        textAlignVertical='top'
                    />
                </View>

                {/* Save Button */}
                <Button
                    buttonStyle="mt-2 bg-[#007BFF] w-full p-5 text-center text-white rounded-full"
                    textStyle="text-[#FFFFFF] text-[18px] font-semibold text-center"
                    label="Save"
                    onPress={handleSubmit}
                />
            </View>
        </ScrollView>
    )
}

export default UpdateBusiness