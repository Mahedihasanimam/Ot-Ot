import tw from '@/assets/lib/tailwind';
import BackButton from '@/components/util/BackButton';

import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const AccountDetails = () => {
    return (
        <ScrollView style={tw`bg-white mt-8`}>
            <BackButton title="Account Details" />

            <View style={tw`mt-8`}>

                {/* Premium Header */}
                <View style={tw`flex-row  gap-2 items-center justify-center mt-4 mb-6`}>
                    <Image source={require('@/assets/images/crawon.png')} />
                    <Text style={tw`text-[#007BFF] text-[20px] font-bold`}>Premium account</Text>
                </View>

                {/* Last Payment Box */}
                <View style={tw`bg-white border border-[#00000033] rounded-xl p-4 mx-4 mb-4 shadow-sm flex flex-row items-center justify-between`}>
                    <View>

                        <Text style={tw`text-[#000000] font-medium text-base mb-1`}>Last payment</Text>
                        <Text style={tw`text-gray-500 mb-1`}>**** **** **** 4589</Text>
                        <Text style={tw`text-gray-400 mb-2`}>20-04-2025, at 10:20 PM</Text>
                    </View>
                    <Text style={tw`text-right text-black font-semibold text-[24px]`}>$199.00</Text>
                </View>

                {/* Next Payment Box */}
                <View style={tw`bg-white border border-[#00000033] rounded-xl p-4 mx-4 mb-6 shadow-sm flex flex-row items-center justify-between`}>
                    <View>
                        <Text style={tw`text-[#000000] font-semibold text-base mb-1`}>Next payment</Text>
                        <Text style={tw`text-gray-500 mb-1`}>**** **** **** 4589</Text>
                        <Text style={tw`text-gray-400 mb-2 text-[14px]`}>19-05-2025</Text>
                    </View>
                    <Text style={tw`text-right text-gray-400 font-bold text-[24px]`}>$199.00</Text>
                </View>
            </View>

        </ScrollView>
    );
};

export default AccountDetails;
