import { Text, View } from "react-native";
import "../global.css";
import FilePicker from "@/components/FilePicker";
export default function Index() {
  const handleDirectorySelect = (uri: string) => {
    console.log("Directory selected:", uri);
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-primary">Hello Dictionary</Text>
      <FilePicker
        onDirectorySelect={handleDirectorySelect}
        className="px-4 py-2 border-1 rounded-md mt-4 bg-success"
        textClassName="text-primary-content font-bold text-lg"
      />
    </View>
  );
}
