import Button from '@/components/util/Button';
import { useTheme } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Alert, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Post = () => {
  const navigation = useNavigation();
  const { colors, dark } = useTheme();
  const [activeTab, setActiveTab] = useState('Upload media');
  const [caption, setCaption] = useState('');
  const [prompt, setPrompt] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [boostOption, setBoostOption] = useState('');
  const [Boostmodal, setBoostmodal] = useState(false);
  const [days, setDays] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const boostSheetRef = useRef(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleBoost = () => {
    setBoostmodal(true);
  };


  const handleUpload = () => {
    if (!selectedImage) {
      Alert.alert('Missing Image !', 'Please select an image first');
      return;
    }

    const postData = {
      image: selectedImage,
      caption,
      boostOption,
      timestamp: new Date().toISOString()
    };

    console.log('Upload Data:', postData);
    Alert.alert('Success', 'Media uploaded successfully!');
    // Here you would typically send postData to your backend
  };

  const handleGenerate = () => {
    navigation.navigate('GenaretedContent');

    const generationData = {
      prompt,
      timestamp: new Date().toISOString()
    };

    console.log('Generation Data:', generationData);
    Alert.alert('Success', 'AI generation started!');
    // Here you would typically send generationData to your AI service
  };

  return (
    <ScrollView style={tw`flex-1 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'}`}>
      <Button
        label="Set posting preferences"
        onPress={() => { }}
        buttonStyle='bg-primary py-5 mt-8 rounded-full mb-4 mx-4'
        textStyle='text-white text-center text-[18px] font-semibold'
      />

      {/* Tabs */}
      <View style={tw`flex-row mx-4 mt-4 ${dark ? 'bg-[#3D3D3D]' : 'bg-white'} border border-[#00000033] rounded-full p-1`}>
        <TouchableOpacity
          onPress={() => setActiveTab('Upload media')}
          style={tw.style(
            'flex-1 p-3 rounded-full items-center justify-center',
            activeTab === 'Upload media' ? 'bg-[#007BFF]' : 'bg-transparent'
          )}
        >
          <Text style={tw.style(
            'text-[16px] font-semibold ${} ',
            activeTab === 'Upload media' ? 'text-white' : 'text-[#007BFF]'

          )}>
            Upload media
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('generate')}
          style={tw.style(
            'flex-1 p-3 rounded-full items-center justify-center',
            activeTab === 'generate' ? 'bg-[#007BFF]' : 'bg-transparent'
          )}
        >
          <Text style={tw.style(
            'text-[16px] font-semibold',
            activeTab === 'generate' ? 'text-white' : 'text-[#007BFF]'
          )}>
            Generate
          </Text>
        </TouchableOpacity>
      </View>


      {/* Tab Content */}
      {activeTab === 'Upload media' ? (
        <View style={tw`px-4 mt-6`}>
          <View>
            {
              selectedImage && (
                <Image
                  source={{ uri: selectedImage }}
                  style={tw`w-full h-40 rounded-lg`}
                  resizeMode="cover"
                />
              )
            }
            <Text style={tw`${dark ? 'text-white' : 'text-[#000]'} font-medium text-[16px] mt-2`}>Upload media</Text>
            <TouchableOpacity
              style={tw``}
              onPress={pickImage}
            >
              {
                dark ? (
                  <Image
                    source={require('@/assets/images/darkImgUpload.png')}
                    style={tw`w-full h-40 rounded-lg mt-4`}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={require('@/assets/images/lightUploadimg.png')}
                    style={tw`w-full h-40 rounded-lg mt-4`}
                    resizeMode="contain"
                  />
                )
              }

            </TouchableOpacity>



          </View>

          <View style={tw`mt-6`}>
            <Text style={tw`${dark ? 'text-white' : 'text-[#000]'} font-medium text-[16px]`}>Caption & Details</Text>

            <TextInput
              style={tw` rounded-lg p-3 mt-2 h-32 ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-white border border-gray-300'} text-base`}
              placeholder="Enter caption or promotional details"
              placeholderTextColor="#999"
              multiline={true}
              textAlignVertical="top"
              value={caption}
              onChangeText={setCaption}
            />
          </View>


          <View style={tw`flex flex-row items-center justify-end`}>

            <TouchableOpacity
              onPressIn={handleBoost}
              style={tw`${dark ? 'bg-[#3D3D3D] border border-[#c0c0c033]' : 'bg-white border border-[#007BFF]'} rounded-full p-4 mt-4 mr-2 w-[120px] flex flex-col items-center justify-end`}
              onPress={() => console.log('Saved:', { caption, selectedImage, boostOption })}
            >
              <View style={tw`flex flex-row items-center justify-center gap-2`}>

                <Image
                  source={require('../../assets/images/Boost.png')}
                  resizeMode="contain"
                  style={tw`w-5 h-5`}
                />
                <Text style={tw`${dark ? 'text-white' : 'text-[#007BFF]'} text-[16px] font-semibold`}>
                  Boost
                </Text>
              </View>
            </TouchableOpacity>

          </View>


          <View style={tw`flex-row justify-between mt-8 mb-10`}>
            <TouchableOpacity
              style={tw`${dark ? 'bg-[#3D3D3D] ' : 'bg-white  '} border rounded-full p-4 border-[#00000033] flex-1 mr-2 items-center`}
              onPress={() => console.log('Saved:', { caption, selectedImage, boostOption })}
            >
              <Text style={tw`${dark ? 'text-white' : 'text-[#000] '} text-[16px] font-semibold`}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-[#007BFF] p-4 rounded-full flex-1 ml-2 items-center`}
              onPress={handleUpload}
            >
              <Text style={tw`text-white text-[16px] font-semibold`}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={tw`px-4 mt-6`}>
          <View>
            <TextInput
              style={tw` rounded-lg p-3 mt-2 h-32 ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-white border border-gray-300'} text-base`}
              placeholder="Enter caption or promotional details"
              placeholderTextColor="#999"
              multiline={true}
              textAlignVertical="top"
              value={prompt}
              onChangeText={setPrompt}
            />

            <Text style={tw`text-gray-500 text-sm mt-4`}>
              Let our AI Create a custom image based on your service description.
            </Text>

            <TouchableOpacity
              style={tw`bg-[#007BFF] rounded-full p-4 mt-6 items-center`}
              onPress={handleGenerate}
            >
              <Text style={tw`text-white font-semibold text-[16px]`}>✨ Generate</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}


      {
        Boostmodal && (
          <Modal
            visible={Boostmodal}

            onRequestClose={() => setBoostmodal(false)}
            transparent={true}
            animationType="slide"
          >
            {/* Outer container that covers entire screen */}
            <View style={tw`flex-1 justify-end bg-[#00000080]`}>
              {/* Actual modal content */}
              <View style={tw`${dark ? 'bg-[#1E1E1E]' : 'bg-white'}   max-h-[650x]  border-t-8  border-t-[#007BFF] rounded-t-lg  `}>
                <View style={tw` rounded-t-lg `}>
                  <Text style={tw`text-[18px] font-bold bg-[#007BFF] w-full text-white text-center py-2  `}>Boost your post</Text>

                  <View style={tw`${dark ? 'bg-[#1E1E1E]' : 'bg-white'} rounded-lg px-6   `}>
                    {/* Header */}
                    {/* Amount Section */}
                    <View style={tw`mb-6 text-center`}>
                      <Text style={tw`text-[40px] pb-2 font-bold mb-2 text-center mt-4 ${dark ? 'text-white' : 'text-[#000000]'}`}>$0.00</Text>
                      <Text style={tw`text-[18px] font-normal mb-2 ${dark ? 'text-white' : 'text-[#000000]'} `}>For how many days?</Text>
                      <TextInput
                        style={tw`border rounded-full p-4 border-gray-300  mt-2 text-lg ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-white text-[#000000]'}`}
                        placeholder="Type here..."
                        keyboardType="numeric"
                        value={days}
                        onChangeText={setDays}
                      />
                    </View>

                    <View style={tw` `} />

                    {/* Card Information */}
                    <View style={tw`mb-4`}>
                      <Text style={tw`text-[16px] font-medium mb-4 ${dark ? 'text-white' : 'text-[#4B2E2B]'}`}>Card Information</Text>

                      <View style={tw`mb-4`}>

                        <View style={tw`flex-row items-center`}>
                          <TextInput
                            style={tw`flex-1 border border-gray-300 p-3 rounded-t-md ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-white text-[#000000]'}`}
                            placeholder="Card number"
                            keyboardType="numeric"
                            value={cardNumber}
                            onChangeText={setCardNumber}
                          />
                          {/* <Image
                            source={require('@/assets/images/visa.png')}
                            style={tw`w-12 h-8 ml-2`}
                            resizeMode="contain"
                          /> */}
                        </View>
                      </View>

                      <View style={tw`flex-row justify-between`}>
                        <View style={tw`w-1/2 pr-2`}>

                          <TextInput
                            style={tw`border border-gray-300 p-3 ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-white text-[#000000]'}`}
                            placeholder="MM/YY"
                            keyboardType="numeric"
                            value={expiry}
                            onChangeText={setExpiry}
                          />
                        </View>
                        <View style={tw`w-1/2 pl-2`}>

                          <TextInput
                            style={tw`border border-gray-300 p-3 ${dark ? 'bg-[#3D3D3D] text-white' : 'bg-white text-[#000000]'}`}
                            placeholder="CVC"
                            keyboardType="numeric"
                            secureTextEntry
                            value={cvc}
                            onChangeText={setCvc}
                          />
                        </View>
                      </View>
                    </View>




                  </View>
                </View>
                {/* Footer Buttons */}
                <View style={tw`flex-row gap-2 justify-between p-4`}>
                  <TouchableOpacity
                    style={tw`py-3 px-8 w-[50%] text-center border border-gray-300 rounded-full`}
                    onPress={() => setBoostmodal(false)}
                  >

                    <Text style={tw`text-lg font-semibold text-gray-600 text-center`}>Cancel</Text>
                  </TouchableOpacity>



                  <TouchableOpacity
                    style={tw`bg-blue-500 py-3 px-8 rounded-full w-[50%]`}
                    onPress={() => {
                      console.log({
                        days,
                        cardNumber,
                        expiry,
                        cvc,
                      });
                      setBoostmodal(false);
                    }}
                  >
                    <View style={tw`flex-row gap-2 items-center justify-center  text-center`}>
                      <Image
                        source={require('../../assets/images/boostWhite.png')}

                        resizeMode="contain"
                      />
                      <Text style={tw`text-lg font-semibold text-white text-center`}>Boost</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
          </Modal>
        )
      }
    </ScrollView>
  );
};

export default Post;




