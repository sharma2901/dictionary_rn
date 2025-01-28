import { Text, View } from "react-native";
import FilePicker from "@/components/FilePicker";

export default function Dictionaries() {
  const handleDirectorySelect = (uri: string, files?: string[]) => {
    console.log("Selected directory URI:", uri);
    if (files) {
      console.log("Files in directory:", files);
    }
  };

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold mb-8">Dictionary Manager</Text>
      <FilePicker
        onDirectorySelect={handleDirectorySelect}
        buttonText="Select Dictionary Folder"
        className="w-64"
      />
    </View>
  );
}
