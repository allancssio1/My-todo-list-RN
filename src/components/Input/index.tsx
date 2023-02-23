import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { IPropsInput } from "../../interfaces";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export function Input({ addTodo, handleInput, inputValue }: IPropsInput) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Adicionar tarefa."
        onChangeText={handleInput}
        placeholderTextColor="#808080"
        value={inputValue}
      />
      <TouchableOpacity onPress={addTodo} style={styles.buttonAdd}>
        <AntDesign name="pluscircleo" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
