import tw from '@/assets/lib/tailwind'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

const Posts = () => {
    const { dark } = useTheme()


    return (
        <View style={tw`p-4 border border-primary rounded-lg`}>
            <Text style={tw`text-[16px] font-normal ${dark ? "text-subT" : "text-subT"}`}>
                Today, 3:00 PM
            </Text>
            <Text style={tw`text-[16px] font-normal ${dark ? "text-whitecolor" : "text-title"}`}>
                New product launch announcement
            </Text>
            <Text style={tw`text-[16px] font-normal ${dark ? "text-whitecolor" : "text-whitecolor"}`}>
                #productlaunch
            </Text>
        </View>
    )
}

export default Posts
