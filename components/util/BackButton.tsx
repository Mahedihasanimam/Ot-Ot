import tw from '@/assets/lib/tailwind';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface BackButtonProps {
    title: string;
}

const BackButton: React.FC<BackButtonProps> = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View>
            <Pressable onPress={() => navigation.goBack()}>
                <View style={tw`flex-row items-center  bg-primary rounded-full w-[90%] mx-auto px-1 py-1 mt-8 gap-6`}>
                    <Image
                        source={require('@/assets/images/backicon.png')}

                        resizeMode="contain"
                    />
                    <Text style={tw` font-medium text-center text-white text-lg`}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default BackButton;
