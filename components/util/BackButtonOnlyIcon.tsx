import tw from '@/assets/lib/tailwind';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, View } from 'react-native';


const BackButtonOnlyIcon: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Pressable onPress={() => navigation.goBack()}>
                <Image
                    source={require('@/assets/images/backicon.png')}
                    style={tw`w-14 h-14`}
                    resizeMode="contain"
                />
            </Pressable>
        </View>
    );
};

export default BackButtonOnlyIcon;
