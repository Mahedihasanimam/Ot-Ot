
import tw from '@/assets/lib/tailwind';
import { useTheme } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform, StyleSheet, Text } from 'react-native';

export default function TabLayout() {
  const { colors, dark } = useTheme();

  // Colors that adapt to theme
  const tabBarBackground = dark ? '#1a1a1a' : '#007BFF'; // Changed to white for light mode
  const activeColor = dark ? '#FFFFFF' : '#FFFFFF'; // Blue for light, white for dark
  const inactiveColor = dark ? 'rgba(255, 255, 255, 0.5)' : '#FFFFFF'; // Darker inactive for light mode

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tabBarBackground,
          borderTopWidth: dark ? 0 : 1,
          borderTopColor: dark ? undefined : '#e5e5e5',
          paddingTop: 10,
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => focused ? (
            <Text style={[tw`font-semibold`, { color: activeColor }]}>Home</Text>
          ) : null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/home.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />

      {/* Post Tab */}
      <Tabs.Screen
        name="Post"
        options={{
          tabBarLabel: ({ focused }) => focused ? <Text style={[tw`font-semibold`, { color: activeColor }]}>Post</Text> : null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/post.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />

      {/* Generate Tab */}
      <Tabs.Screen
        name="Genarate"
        options={{
          tabBarLabel: ({ focused }) => focused ? <Text style={[tw`font-semibold`, { color: activeColor }]}>Generate</Text> : null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/genarete.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />

      {/* Schedule Tab */}
      <Tabs.Screen
        name="Schedule"
        options={{
          tabBarLabel: ({ focused }) => focused ? <Text style={[tw`font-semibold`, { color: activeColor }]}>Schedule</Text> : null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/schedul.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="Account"
        options={{
          tabBarLabel: ({ focused }) => focused ? <Text style={[tw`font-semibold`, { color: activeColor }]}>Account</Text> : null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/user.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? activeColor : inactiveColor,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centerButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  generateText: {
    fontSize: 28,
    color: '#007BFF',
    fontWeight: '300',
  },
});