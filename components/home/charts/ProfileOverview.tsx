import Button from '@/components/util/Button';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

// Import your images (adjust paths as needed)
const icons = {
  reach: require('@/assets/images/reach.png'),
  engage: require('@/assets/images/engage.png'),
  followers: require('@/assets/images/followers.png'),
  like: require('@/assets/images/like.png'),
  comment: require('@/assets/images/comment.png'),
  share: require('@/assets/images/share.png'),
  view: require('@/assets/images/view.png'),
  click: require('@/assets/images/click.png'),
  unfollow: require('@/assets/images/unfollow.png'),
  hide: require('@/assets/images/hide.png'),
};

const ProfileOverview = () => {
  const navigation = useNavigation();
  const { dark } = useTheme();

  const handleCreatePost = () => {
    Alert.alert('Create Post', 'Your post has been created successfully.');
  }
  return (
    <ScrollView style={tw`${dark ? 'bg-[#3D3D3D]' : 'bg-white'}  pt-4`} showsVerticalScrollIndicator={false}>
      {/* Profile Overview Header */}
      <Text style={tw`text-xl font-bold mb-4 ${dark ? 'text-white' : 'text-[#343A40]'}`}>Profile Overview</Text>

      {/* Metrics Cards */}
      <View style={tw`mb-4`}>
        {/* Post Reach */}
        <View style={tw`bg-[#FFE1C3] border border-[#FFBC78] rounded-xl px-4 py-3 mb-3 flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
            <Image source={icons.reach} style={tw`w-5 h-5 mr-2`} />
            <Text style={tw`font-semibold text-gray-700`}>Post reach</Text>
          </View>
          <Text style={tw`font-bold text-base text-gray-800`}>1,550</Text>
        </View>

        {/* Engagement */}
        <View style={tw`bg-[#D0FFDB] border border-[#31D657] rounded-xl px-4 py-3 mb-3 flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
            <Image source={icons.engage} style={tw`w-5 h-5 mr-2`} />
            <Text style={tw`font-semibold text-[#343A40] text-[16px]`}>Engagement</Text>
          </View>
          <Text style={tw`font-bold text-base text-gray-800`}>1,294</Text>
        </View>

        {/* Profile Followers */}
        <View style={tw`bg-[#DFEEFF] border border-[#007BFF]  rounded-xl px-4 py-3 mb-3 flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
            <Image source={icons.followers} style={tw`w-5 h-5 mr-2`} />
            <Text style={tw`font-semibold text-[#343A40] text-[16px]`}>Profile followers</Text>
          </View>
          <Text style={tw`font-bold text-base text-gray-800`}>3,000</Text>
        </View>
      </View>

      {/* Reactions Section */}
      <View style={tw`bg-[#DFEEFF] border border-[#007BFF]  rounded-xl px-4 py-3 mb-4`}>


        {[
          { icon: icons.like, label: 'Reactions', value: '512' },
          { icon: icons.comment, label: 'Comments', value: '289' },
          { icon: icons.share, label: 'Shares', value: '456' },
          { icon: icons.view, label: 'Photo views', value: '378' },
          { icon: icons.click, label: 'Link clicks', value: '422' },
        ].map((item, index) => (
          <View
            key={index}
            style={tw.style(
              'flex-row justify-between items-center py-2 ',
              index !== 4 && 'border-b border-[#007bffd0]'
            )}
          >

            <View style={tw`flex-row items-center p-1`}>
              <Image source={item.icon} style={tw`w-5 h-5 mr-2`} />
              <Text style={tw`text-[#343A40] text-[16px] font-medium`}>{item.label}</Text>
            </View>
            <Text style={tw`text-[#000000] text-[18px] font-medium`}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* Negative Metrics */}
      <View style={tw`flex-row justify-between mb-6 gap-2`}>
        {/* Unfollows Card */}
        <View style={tw`flex-1 bg-[#FFD5D5] border border-[#FF0000] rounded-xl px-6 py-4 flex-row items-center gap-2`}>
          <Image source={icons.unfollow} />
          <View>
            <Text style={tw`text-[#343A40] text-[16px] font-normal`}>Unfollows</Text>
            <Text style={tw`text-[#000000] text-[18px] font-medium`}>145</Text>
          </View>
        </View>

        {/* Post Hides Card */}
        <View style={tw`flex-1 bg-[#FFD5F6] border border-[#D700A8] rounded-xl px-6 py-4 flex-row items-center gap-2`}>
          <Image source={icons.hide} />
          <View>
            <Text style={tw`text-[#343A40] text-[16px] font-normal`}>Post hides</Text>
            <Text style={tw`text-[#000000] text-[18px] font-medium`}>145</Text>
          </View>
        </View>
      </View>



      {/* Create Post Button */}

      <Button label="+ Create post" onPress={() => navigation.navigate('Post')} buttonStyle="bg-primary rounded-full p-4 mt-2" textStyle="text-white text-[18px] font-semibold text-center font-semibold" />
    </ScrollView>
  );
};

export default ProfileOverview;