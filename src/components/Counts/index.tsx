import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  counts: number;
};

export function Counts({ counts }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{counts}</Text>
    </View>
  );
}
