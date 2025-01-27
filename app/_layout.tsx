import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useCallback } from "react";
// import { ThemeDebug } from "@/components/ThemeDebug";

// Keep splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={isDark ? "dark" : "light"}>
        <View className="flex-1 bg-base-100">
          <StatusBar style={isDark ? "light" : "dark"} />
          <SafeAreaView className="flex-1">
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: "transparent",
                },
              }}
            />
          </SafeAreaView>
          {/* {__DEV__ && <ThemeDebug />} */}
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
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
