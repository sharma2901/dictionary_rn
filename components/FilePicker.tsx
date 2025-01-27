import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import * as DocumentPicker from "expo-document-picker";

interface FilePickerProps {
  onDirectorySelect?: (uri: string) => void;
  className?: string;
  buttonText?: string;
  textClassName?: string;
}

const FilePicker: React.FC<FilePickerProps> = ({
  onDirectorySelect,
  className,
  buttonText = "Select Directory",
  textClassName,
}) => {
  const handleDirectoryPick = async () => {
    try {
      // On iOS, we can pick directories. On Android, we'll pick a file instead
      // as directory picking is not supported
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: false,
        multiple: false,
      });

      console.log("result", result);

      if (result.assets && result.assets.length > 0) {
        const selectedFile = result.assets[0];
        onDirectorySelect?.(selectedFile.uri);
      }
    } catch (error) {
      console.error("Error picking directory:", error);
    }
  };

  return (
    <View className="w-full">
      <TouchableOpacity
        onPress={handleDirectoryPick}
        className={`bg-blue-500 px-4 py-2 rounded-lg active:opacity-80 ${
          className || ""
        }`}
      >
        <Text
          className={`text-white text-center font-medium ${
            textClassName || ""
          }`}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilePicker;
