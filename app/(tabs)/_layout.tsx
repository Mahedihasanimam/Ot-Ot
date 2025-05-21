import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = '#FFFFFF';
  const inactiveColor = 'rgba(255, 255, 255, 0.5)';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#007BFF',
          borderTopWidth: 0,
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
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/home.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
              }}
            />
          ),
        }}
      />

      {/* Post Tab */}
      <Tabs.Screen
        name="Post"
        options={{
          title: 'Post',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/post.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
              }}
            />
          ),
        }}
      />


      {/* Post Tab */}
      <Tabs.Screen
        name="Genarate"
        options={{
          title: 'Genarate',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/genarete.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
              }}
            />
          ),
        }}
      />



      {/* Schedule Tab */}
      <Tabs.Screen
        name="Schedule"
        options={{
          title: 'Schedule',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/schedul.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
              }}
            />
          ),
        }}
      />

      {/* Account Tab */}
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/user.png')}
              style={{

                tintColor: focused ? activeColor : inactiveColor,
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