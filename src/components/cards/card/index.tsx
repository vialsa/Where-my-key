import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/routesParams";

type Keys = {
  id: string;
  user: string;
  key: string;
};

type CardProps = {
  data: Keys;
  onDelete: (id: string) => void;  // Função para excluir a chave
};

export default function Card({ data, onDelete }: CardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>Usuário: {data.user}</Text>
        <Text style={[styles.text, styles.key]}>Chave: {data.key}</Text>
      </View>
      <View style={styles.separator}>
        <Pressable
          style={styles.editButton}
          onPress={() => navigation.navigate("ModalKeyEditScreen", data)}
        >
          <FontAwesome name="edit" size={24} color="black" />
        </Pressable>
        <Pressable
          style={styles.deleteButton}  // Novo botão de excluir
          onPress={() => onDelete(data.id)}  // Chama a função onDelete ao clicar
        >
          <FontAwesome name="trash" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  );
}
