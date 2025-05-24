import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Genarate = () => {
    const { dark } = useTheme();
    const [generatedText, setGeneratedText] = useState(
        'Elevate your morning routine with our freshly roasted coffee beans! Perfect blend of richness and aroma to kickstart your day'
    );
    const [editedText, setEditedText] = useState(generatedText);
    const [useThisCopy, setUseThisCopy] = useState(false);

    const hashtags = ['#coffee', '#morningvibes', '#coffee', '#localcoffee', '#morningvibes'];

    const handleGenerate = () => {
        const newCopy = 'Brew brilliance every morning with bold, fresh flavors!';
        setGeneratedText(newCopy);
        setEditedText(newCopy);
    };

    return (
        <ScrollView contentContainerStyle={tw`px-4 py-6 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'} min-h-full`}>
            {/* Header Button */}
            <TouchableOpacity style={tw`bg-[#007BFF] p-4 rounded-full items-center my-6`}>
                <Text style={tw`text-[#FFFFFF] text-base font-semibold`}>Ai Copy Generator</Text>
            </TouchableOpacity>
            {/* Generated Copy */}
            <View>
                <Text style={tw`${dark ? 'text-white' : 'text-[#000000]'} font-semibold mb-2`}>Generated copy</Text>
                <TextInput
                    style={tw` rounded-lg p-3 mt-2 h-32 text-[#888888] ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-white border border-gray-300'} text-base`}
                    placeholder="Enter caption or promotional details"
                    placeholderTextColor="#999"
                    multiline={true}

                    textAlignVertical="top"
                    value={generatedText}
                />
            </View>



            {/* Edit Copy */}

            <View>
                <Text style={tw`${dark ? 'text-white' : 'text-[#000000]'} font-semibold my-2 mt-8`}>Edit your copy</Text>
                <TextInput
                    style={tw` rounded-lg p-3 mt-2 h-32 text-[#888888] ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-white border border-gray-300'} text-base`}
                    placeholder="Enter caption or promotional details"
                    placeholderTextColor="#999"
                    multiline={true}

                    textAlignVertical="top"
                    value={editedText}
                    onChangeText={setEditedText}
                />
            </View>


            <View style={tw`mt-6`}>

                {/* Recommended Hashtags */}
                <Text style={tw`${dark ? 'text-white' : 'text-[#000000]'} font-semibold mb-2`}>Recommended hashtags</Text>
                <View style={tw`flex flex-row flex-wrap gap-2 mt-4 mb-12 `}>
                    {hashtags.map((tag, index) => (
                        <TouchableOpacity key={index} style={tw`bg-[#007BFF] px-4 py-2 rounded-full`}>
                            <Text style={tw`text-[#ffffffd0] text-[16px]`}>{tag}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>


            {/* Generate Button */}
            <TouchableOpacity
                onPress={handleGenerate}
                style={tw`bg-[#007BFF] py-3 rounded-full items-center mb-4`}
            >
                <Text style={tw`text-white font-semibold text-base`}>✨ Generate new copy</Text>
            </TouchableOpacity>
            <TouchableOpacity

                style={tw`bg-white border border-[#00000033] py-3 rounded-full items-center mb-4`}
            >
                <View style={tw`flex flex-row items-center `}>
                    <Image source={require('../../assets/images/coppy.png')} />

                    <Text style={tw`text-[#007BFF] font-medium text-base`}>   Use this copy</Text>
                </View>
            </TouchableOpacity>


        </ScrollView>
    );
};

export default Genarate;
