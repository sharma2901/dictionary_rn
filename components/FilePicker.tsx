import React from "react";
import { View, Text, TouchableOpacity, Platform, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";

interface FilePickerProps {
  onDirectorySelect?: (uri: string, files?: string[]) => void;
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
      if (Platform.OS === "android") {
        // Use Storage Access Framework on Android
        const permissions =
          await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

        if (permissions.granted) {
          const directoryUri = permissions.directoryUri;
          // Get list of files in the directory
          const files =
            await FileSystem.StorageAccessFramework.readDirectoryAsync(
              directoryUri
            );
          onDirectorySelect?.(directoryUri, files);
        }
      } else {
        // On iOS, we'll use document picker since directory picking isn't directly supported
        const result = await DocumentPicker.getDocumentAsync({
          type: "*/*",
          copyToCacheDirectory: true,
          multiple: false,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
          const selectedFile = result.assets[0];
          // For iOS, we'll just return the file URI since directory selection isn't supported
          onDirectorySelect?.(selectedFile.uri, [selectedFile.uri]);
        }
      }
    } catch (error) {
      console.error("Error picking directory:", error);
      Alert.alert(
        "Error",
        Platform.OS === "ios"
          ? "Failed to select file. Please try again."
          : "Failed to access directory. Make sure to grant permission."
      );
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
