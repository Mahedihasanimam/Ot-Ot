import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import tw from '@/assets/lib/tailwind';
import { ThemeProvider, useThemeContext } from '@/hooks/ThemeContext';
import { useEffect } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function ThemedApp() {
  const { theme } = useThemeContext();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { bottom, top } = useSafeAreaInsets()

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(
        theme === 'dark' ? '#1a1a1a' : '#ffffff'
      );
      NavigationBar.setButtonStyleAsync(
        theme === 'dark' ? 'light' : 'dark'
      );
    }
  }, [theme]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={[tw`flex-1`, {
      paddingBottom: bottom,
      paddingTop: top,
      backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff'
    }]}>

      <NavThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        <Stack screenOptions={{ headerShown: false, statusBarStyle: theme === 'dark' ? 'light' : 'dark' }}>
          <Stack.Screen name="InitialScreen" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </NavThemeProvider>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}