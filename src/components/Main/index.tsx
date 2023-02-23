import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Counts } from "../Counts";
import { Input } from "../Input";
import { styles } from "./styles";

type ITodoList = {
  text: string;
  finished: boolean;
};

export function Main() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<Array<ITodoList>>([]);
  const [countsCreatedTodo, setCountsCreatedTodo] = useState(0);
  const [countsFinishedTodo, setCountsFinishedTodo] = useState(0);
  const previa = [
    {
      text: "um texto curto",
      finished: false,
    },
    {
      text: "um texto médio pq é preciso",
      finished: false,
    },
    {
      text: "um texto um pouco mais que medio para precisar",
      finished: true,
    },
    {
      text: "agora um texto longo pq é preciso testar esse layout. agora que sei que o texto grande esta preciso vamos pensar em algo mais proprio!",
      finished: false,
    },
  ];

  useEffect(() => {
    setTodoList(previa);
  }, []);

  useEffect(() => {
    const todosConclued = todoList.filter((todo) => todo.finished);
    setCountsFinishedTodo(todosConclued.length);
    setCountsCreatedTodo(todoList.length);
  }, [todoList]);

  const addTodoOnList = () => {
    if (inputText) {
      setTodoList((prevState) => [
        ...prevState,
        { text: inputText, finished: false },
      ]);
      setInputText("");
    }
  };

  const handleCheckInput = (checking: ITodoList) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.text === checking.text) {
        todo.finished = !todo.finished;
      }
      return todo;
    });

    setTodoList(newTodoList);
  };

  const removeTodo = (removing: ITodoList) => {
    const newListTodo = todoList.filter((todo) => todo.text !== removing.text);
    setTodoList(newListTodo);
  };

  return (
    <View style={styles.container}>
      <Input
        addTodo={addTodoOnList}
        handleInput={setInputText}
        inputValue={inputText}
      />
      <View style={styles.content}>
        <View style={styles.infoCount}>
          <Text style={styles.createText}>Criadas</Text>
          <Counts counts={countsCreatedTodo} />
        </View>
        <View style={styles.infoCount}>
          <Text style={styles.concluedText}>Concluídas</Text>
          <Counts counts={countsFinishedTodo} />
        </View>
      </View>
      {/* <List /> */}
      {todoList && todoList.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={todoList}
            keyExtractor={(item, index) => String(index)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.itemTodo}>
                <TouchableOpacity onPress={() => handleCheckInput(item)}>
                  <View>
                    <Image
                      source={
                        item.finished
                          ? require("../../../assets/check.png")
                          : require("../../../assets/notCheck.png")
                      }
                    />
                  </View>
                </TouchableOpacity>
                <Text
                  style={item.finished ? styles.todoConclued : styles.textTodo}
                >
                  {item.text}
                </Text>
                <TouchableOpacity onPress={() => removeTodo(item)}>
                  <View>
                    <Image source={require("../../../assets/bin.png")} />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <View style={styles.containerImage}>
            <Image source={require("../../../assets/clipboard.png")} />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.firstText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.secondText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
