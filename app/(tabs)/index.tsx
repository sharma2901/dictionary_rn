import Background from "@/components/patterns/Background";
import { Text, View } from "react-native";

export default function Lookup() {
  return (
    <View className="flex-1 items-center justify-center">
      <Background />
      <Text className={`text-2xl font-bold `}>शब्द खोजें</Text>
    </View>
  );
}
