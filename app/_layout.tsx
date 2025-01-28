import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { useCallback } from "react";
import "../global.css";

// Keep splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

// Ensure that reloading on `/modal` keeps a back button present.

function RootLayoutNav() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <View className={`flex-1 `}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </View>
    </SafeAreaView>
  );
}

export default function Layout() {
  const [fontsLoaded] = useFonts({
    NotoSans: require("../assets/fonts/NotoSans.ttf"),
    NotoSansItalic: require("../assets/fonts/NotoSansItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <RootLayoutNav />
    </View>
  );
}
