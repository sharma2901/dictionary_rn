import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useCallback } from "react";
import { ThemeDebug } from "@/components/ThemeDebug";
import "../global.css";
// Keep splash screen visible while fonts load

SplashScreen.preventAutoHideAsync();

// Ensure that reloading on `/modal` keeps a back button present.

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  // const isDark = colorScheme === "dark";
  const isDark = true;
  return (
    <SafeAreaView className="flex-1">
      <ThemeProvider theme={isDark ? "dark" : "light"}>
        <View className="flex-1">
          <StatusBar style={isDark ? "light" : "dark"} />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "transparent" },
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          {__DEV__ && <ThemeDebug />}
        </View>
      </ThemeProvider>
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
