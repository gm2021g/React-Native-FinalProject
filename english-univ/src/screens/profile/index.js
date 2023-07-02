import { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput, Button, Alert } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { ImageSelector, LocationSelector } from "../../components";
import { COLORS } from "../../constants";
import {
  insertProfile,
  selectProfile,
  updateProfile,
  deleteProfile,
} from "../../db";

const Profile = () => {
  const email = useSelector((state) => state.auth.email);
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [coords, setCoords] = useState(null);
  const [size, setSize] = useState(0);

  useEffect(async () => {
    const loadData = async () => {
      const result = await selectProfile(email);
      setSize(result?.rows?._array.length);
      setName(result?.rows?._array[0].name);
      setLastName(result?.rows?._array[0].lastName);
      setPlace(result?.rows?._array[0].place);
      setImage(result?.rows?._array[0].image);
      setCoords(JSON.parse(result?.rows?._array[0].coords));
    };

    loadData();
  }, []);

  const onHandlerChangeText = (place) => {
    setPlace(place);
  };

  const onHandlerChangeName = (name) => {
    setName(name);
  };

  const onHandlerChangeLastName = (lastName) => {
    setLastName(lastName);
  };

  const onImage = (image) => {
    setImage(image);
  };
  const onLocation = (coords) => {
    setCoords(coords);
  };

  const address = "Address test";

  const onHandlerSubmit = async () => {
    try {
      if (size > 0) {
        const result = await updateProfile(
          email,
          name,
          lastName,
          place,
          image,
          address,
          coords
        );
      } else {
        const result = await insertProfile(
          email,
          name,
          lastName,
          place,
          image,
          address,
          coords
        );

        Alert.alert("Alert", "The profile was saved successfully", [
          { text: "OK", onPress: () => {} },
        ]);
      }
    } catch (error) {
      console.warn("Error querying data " + error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Email: {email} </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={onHandlerChangeName}
            value={name}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={onHandlerChangeLastName}
            value={lastName}
          />

          <TextInput
            style={styles.input}
            placeholder="Country"
            onChangeText={onHandlerChangeText}
            value={place}
          />

          <ImageSelector onImage={onImage} pimage={image} />

          <LocationSelector onLocation={onLocation} pcoords={coords} />

          <Button
            title="Save"
            color={COLORS.secondary}
            onPress={onHandlerSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
