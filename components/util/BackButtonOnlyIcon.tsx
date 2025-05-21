import tw from '@/assets/lib/tailwind';
import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, View } from 'react-native';


const BackButtonOnlyIcon: React.FC = () => {
    const { colors, dark } = useTheme();
    const navigation = useNavigation();

    return (
        <View>
            <Pressable onPress={() => navigation.goBack()}>
                {
                    dark ? <Image
                        source={require('@/assets/images/darkback.png')}
                        style={tw`w-14 h-14`}
                        resizeMode="contain"
                    /> : <Image
                        source={require('@/assets/images/backicon.png')}
                        style={tw`w-14 h-14`}
                        resizeMode="contain"
                    />
                }
            </Pressable>
        </View>
    );
};

export default BackButtonOnlyIcon;
