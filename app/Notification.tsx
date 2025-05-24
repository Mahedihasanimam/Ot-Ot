import tw from '@/assets/lib/tailwind'
import BackButton from '@/components/util/BackButton'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const Notification = () => {
    return (
        <ScrollView>
            <BackButton title="Notification" />
            <View style={tw`p-4 gap-2`}>

                <View style={tw`border border-[#FF6868] bg-[#FFEFEF] border-opacity-60 p-5 rounded-lg`}>
                    <View style={tw`flex-row items-center gap-3`}>
                        <Image
                            source={require('@/assets/images/delete.png')}

                        />
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-[#FF2D2D] text-[18px] font-semibold`}>
                                Post deleted
                            </Text>
                            <Text style={tw`text-[#888888] text-[14px] mt-1`}>
                                Your post has been deleted by admin due to violating our terms & conditions.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={tw`border border-[#F27712] bg-[#FFF4EB] border-opacity-60 p-5 rounded-lg`}>
                    <View style={tw`flex-row items-center gap-3`}>
                        <Image
                            source={require('@/assets/images/remainder.png')}

                        />
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-[#F27712] text-[18px] font-semibold`}>
                                Reminder
                            </Text>
                            <Text style={tw`text-[#888888] text-[14px] mt-1`}>
                                You have a post at 09:30 PM.
                            </Text>
                        </View>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

export default Notification