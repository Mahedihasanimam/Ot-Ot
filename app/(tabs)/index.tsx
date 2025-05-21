import tw from '@/assets/lib/tailwind'
import Performance from '@/components/home/charts/Performance'
import ProfileOverview from '@/components/home/charts/ProfileOverview'
import HomeHeader from '@/components/home/HomeHeader'
import Posts from '@/components/home/Posts'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'

const HomeScreen = () => {
  const { colors, dark } = useTheme()
  const postlength = 4

  // Define text color based on theme


  return (
    <GestureHandlerRootView style={tw`flex-1 ${dark ? 'bg-[#3D3D3D]' : 'bg-white'}`}>
      <ScrollView contentContainerStyle={tw`p-4 pt-8`}>
        <HomeHeader />

        {/* Upcoming posts */}
        <View>
          <Text style={[tw`text-[16px] font-semibold mt-8 ${dark ? 'text-white' : 'text-[#343A40]'}`]}>
            Upcoming posts
          </Text>
          <View style={tw`gap-3 mt-4`}>
            {[...Array(postlength)].map((_, index) => (
              <Posts key={index} />
            ))}
          </View>
        </View>

        {/* Recent posts */}
        <View>
          <Text style={[tw`text-[16px] font-semibold mt-8 ${dark ? 'text-white' : 'text-[#343A40]'}`]}>
            Recent posts
          </Text>
          <View style={tw`gap-3 mt-4`}>
            {[...Array(postlength)].map((_, index) => (
              <Posts key={index} />
            ))}
          </View>
        </View>

        {/* Sales Performance charts */}
        <Text style={[tw`text-[18px] font-medium mt-8 ${dark ? 'text-white' : 'text-[#343A40]'}`]}>
          Sales Performance
        </Text>
        <Performance />

        <ProfileOverview />
      </ScrollView>
    </GestureHandlerRootView>
  )
}

export default HomeScreen
