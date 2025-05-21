import tw from '@/assets/lib/tailwind'
import Performance from '@/components/home/charts/Performance'
import ProfileOverview from '@/components/home/charts/ProfileOverview'
import HomeHeader from '@/components/home/HomeHeader'
import Posts from '@/components/home/Posts'
import React from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'


const HomeScreen = () => {
  const postlength = 4

  return (
    <GestureHandlerRootView style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`p-4 pt-8`}>
        <HomeHeader />

        {/* Upcoming posts */}
        <View>
          <Text style={tw`text-[16px] text-[#000000] font-semibold mt-8`}>
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
          <Text style={tw`text-[16px] text-[#000000] font-semibold mt-8`}>
            Recent posts
          </Text>
          <View style={tw`gap-3 mt-4`}>
            {[...Array(postlength)].map((_, index) => (
              <Posts key={index} />
            ))}
          </View>
        </View>


        {/* Sales Performance charts */}
        <Text style={tw`text-[18px] text-[#000000] font-medium mt-8`}>Sales Performance</Text>
        <Performance />

        <ProfileOverview />

      </ScrollView>
    </GestureHandlerRootView>
  )
}

export default HomeScreen
