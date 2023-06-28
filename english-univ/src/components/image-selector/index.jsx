import {
  requestCameraPermissionsAsync,
  launchCameraAsync,
} from "expo-image-picker";
import { useState } from "react";
import { View, Button, Text, Image, Alert } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../constants";

export const ImageSelector = ({ onImage = { onImage }, pimage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions",
        "We need permissions to get the location",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile picture</Text>
      <View style={styles.preview}>
      
        {!pickedUrl ? (
          pimage ? (
            <Image
              style={styles.image}
              source={{
                uri: pimage,
              }}
            />
          ) : (
            <Text>No image selected</Text>
          )
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>

      <Button
        title="Take picture"
        color={COLORS.secondary}
        onPress={onHandleTakeImage}
      />
    </View>
  );
};

export default ImageSelector;
