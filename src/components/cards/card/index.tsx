import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import global from "../../styles/global";
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
};

export default function Card({ data }: CardProps) {
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
      </View>
    </View>
  );
}
