import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";
import Background from "@/components/patterns/Background";
import { View } from "react-native";
export default function TabLayout() {
  return (
    <View className="flex-1">
      {/* <Background /> */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#ffffff",
          },
          tabBarActiveTintColor: "#F95428",
          tabBarInactiveTintColor: "#666666",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Lookup",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={20} name="search" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="dictionaries"
          options={{
            title: "Dictionaries",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={20} name="book" color={color} />
            ),
          }}
        />
        {/* <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="gear" color={color} />
          ),
        }}
      /> */}
      </Tabs>
    </View>
  );
}
