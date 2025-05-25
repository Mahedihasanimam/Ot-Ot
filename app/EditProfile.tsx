import tw from '@/assets/lib/tailwind';
import BackButton from '@/components/util/BackButton';
import Button from '@/components/util/Button';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const EditProfile = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permission.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleSubmit = () => {
        // You can handle your submit logic here
        console.log('Name:', name);
        console.log('Phone:', phone);
        console.log('Image URI:', image);
        alert('Profile updated!');
    };

    return (
        <View style={tw`flex-1 bg-white  pt-6`}>
            <BackButton title="Edit Profile" />
            <View style={tw`items-center mt-8 px-4`}>
                <View style={tw`relative`}>
                    <Image
                        source={image ? { uri: image } : require('@/assets/images/avater.png')}
                        style={tw`w-24 h-24 rounded-full`}
                    />
                    <TouchableOpacity
                        style={tw`absolute bottom-0 right-0 bg-[#3A2D1C] p-1.5 rounded-full border-2 border-white`}
                        onPress={pickImage}
                    >
                        <FontAwesome name="camera" size={16} color="#fff" />
                    </TouchableOpacity>
                </View>

                <Text style={tw`mt-3 font-medium text-base`}>Profile picture</Text>

                <View style={tw`flex-row items-center border border-gray-300 rounded-full px-4 py-2 w-full mt-6`}>
                    <AntDesign name="user" size={20} color="#555" style={tw`mr-2`} />
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={tw`flex-1 text-base`}
                        placeholder="Name"
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={tw`flex-row items-center border border-gray-300 rounded-full px-4 py-2 w-full mt-4`}>
                    <FontAwesome name="phone" size={20} color="#555" style={tw`mr-2`} />
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        style={tw`flex-1 text-base`}
                        placeholder="Phone"
                        keyboardType="phone-pad"
                        placeholderTextColor="#999"
                    />
                </View>

                <Button buttonStyle='mt-6 bg-[#007BFF] w-full p-5 text-center text-white rounded-full mt-[100%]' textStyle='text-[#FFFFFF] text-[18px] font-semibold text-center' label='Save' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default EditProfile;
