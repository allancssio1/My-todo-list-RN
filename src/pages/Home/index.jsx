import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Main } from "../../components/Main";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}
