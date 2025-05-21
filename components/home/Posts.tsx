import tw from '@/assets/lib/tailwind'
import React from 'react'
import { Text, View } from 'react-native'

const Posts = () => {
    return (
        <View style={tw`p-4 border border-primary rounded-lg `}>
            <Text style={tw`text-[#888888] text-[16px] font-normal`}>Today, 3:00 PM</Text>
            <Text style={tw`text-[16px] text-[#000000] font-normal`}>New product launch announcement </Text>
            <Text>#productlaunch</Text>

        </View>
    )
}

export default Posts