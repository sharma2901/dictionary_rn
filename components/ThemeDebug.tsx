import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "./ThemeProvider";

export function ThemeDebug() {
  const { theme } = useTheme();

  return (
    <View className="absolute top-10 left-2 bg-gray-800 p-2 rounded">
      <Text className="text-white">Current Theme: {theme}</Text>
    </View>
  );
}
