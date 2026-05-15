import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList } from "react-native";
import KeyboardButton, { buttonTypes } from "./KeyboardButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { useState } from "react";
import { calcular } from "./lib/calcular";

export default function App() {
  const [equacao, setEquacao] = useState<String[]>([]);
  const resultado = calcular(
    equacao.toString().replaceAll(",", "").replaceAll("x", "*"),
  );

  const simbolos: { id: string; simbolo: string; tipo: buttonTypes }[] = [
    { id: "0", simbolo: "(", tipo: "default" },
    { id: "1", simbolo: ")", tipo: "default" },
    { id: "2", simbolo: "%", tipo: "default" },
    { id: "3", simbolo: "/", tipo: "operation" },
    { id: "4", simbolo: "7", tipo: "default" },
    { id: "5", simbolo: "8", tipo: "default" },
    { id: "6", simbolo: "9", tipo: "default" },
    { id: "7", simbolo: "x", tipo: "operation" },
    { id: "8", simbolo: "4", tipo: "default" },
    { id: "9", simbolo: "5", tipo: "default" },
    { id: "10", simbolo: "6", tipo: "default" },
    { id: "11", simbolo: "-", tipo: "operation" },
    { id: "12", simbolo: "1", tipo: "default" },
    { id: "13", simbolo: "2", tipo: "default" },
    { id: "14", simbolo: "3", tipo: "default" },
    { id: "15", simbolo: "+", tipo: "operation" },
    { id: "16", simbolo: "0", tipo: "default" },
    { id: "17", simbolo: ".", tipo: "default" },
    { id: "18", simbolo: resultado === "" ? "C" : "=", tipo: "result" },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <View
            style={[
              styles.container,
              {
                paddingBottom: insets?.bottom,
                paddingTop: insets?.top,
                paddingLeft: insets?.left,
                paddingRight: insets?.right,
              },
            ]}
          >
            <View style={styles.visor}>
              <View style={styles.buttonsView}>
                <Ionicons
                  name="settings-outline"
                  color={"rgb(62, 142, 247)"}
                  size={25}
                  style={styles.topIcons}
                />
                <Ionicons
                  name="time-outline"
                  color={"rgb(62, 142, 247)"}
                  size={25}
                  style={styles.topIcons}
                />
              </View>
              <View style={styles.digitsView}>
                <Text
                  style={[
                    styles.digitsText,
                    ,
                    resultado.length > 7 && resultado.length <= 18
                      ? { fontSize: 50 }
                      : resultado.length > 18
                        ? { fontSize: 25 }
                        : {},
                  ]}
                >
                  {resultado}
                </Text>
              </View>
              <View style={styles.equationView}>
                <Text
                  style={[
                    styles.equationText,
                    equacao.length > 11 && equacao.length <= 16
                      ? { fontSize: 30 }
                      : equacao.length > 16
                        ? { fontSize: 20 }
                        : {},
                  ]}
                >
                  {equacao}
                </Text>
                <Ionicons
                  onPress={() =>
                    setEquacao((equation) => equation.slice(0, -1))
                  }
                  name="backspace"
                  size={32}
                  color={"#a6a6a6"}
                />
              </View>
            </View>
            <View style={styles.keyboard}>
              <FlatList
                data={simbolos}
                keyExtractor={(simbolo) => simbolo.id}
                numColumns={4}
                renderItem={({ item }) => (
                  <KeyboardButton
                    value={item.simbolo}
                    type={item.tipo}
                    setEquation={setEquacao}
                  />
                )}
              />
            </View>
            <StatusBar style="auto" />
          </View>
        )}
      </SafeAreaInsetsContext.Consumer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  visor: {
    flex: 2,
    paddingHorizontal: 15,
  },

  buttonsView: {
    flexDirection: "row",
    alignItems: "baseline",
    paddingVertical: 5,
  },

  equationView: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
  },

  equationText: {
    color: "#ffffff",
    fontSize: 40,
    flex: 1,
    marginRight: 10,
    textAlign: "right",
    fontFamily: "monospace",
  },

  digitsView: {
    flex: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  digitsText: {
    color: "#ffffff",
    fontSize: 80,
    flex: 1,
    textAlign: "right",
    fontFamily: "monospace",
  },

  keyboard: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  topIcons: { marginHorizontal: 7 },
});
