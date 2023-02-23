import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require("../../../assets/rocket.png")} />
      </View>
      <View style={styles.title}>
        <Text style={styles.to}>to</Text>
        <Text style={styles.do}>do</Text>
      </View>
    </View>
  );
}
