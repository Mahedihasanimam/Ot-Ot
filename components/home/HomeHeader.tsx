import tw from '@/assets/lib/tailwind'
import { useNavigation } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const HomeHeader = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={tw`flex flex-row p-4 bg-primary text-white rounded-lg justify-between items-center`}>

            <View style={tw`flex flex-row items-center justify-between gap-2  `}>
                <View>
                    <Image source={require('../../assets/images/avater.png')} />
                </View>
                <View>
                    <Text style={tw`text-white`}>Hello...</Text>
                    <Text style={tw`text-white text-xl font-medium`}>Shara Martinez</Text>
                    <Text style={tw`text-white text-[16px] font-medium`}>Welcome to your dashboard</Text>
                </View>

            </View>

            <View style={tw`absolute top-4 right-4`}>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image source={require('../../assets/images/notification.png')} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default HomeHeader