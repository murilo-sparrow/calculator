import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import KeyboardButton from "./KeyboardButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { useState } from "react";
import { calcular } from "./lib/calcular";

export default function App() {
  const [equacao, setEquacao] = useState<String[]>([]);
  const [resultado, setResultado] = useState<string>("0");

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
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="("
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value=")"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="%"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="/"
                  type="operation"
                  equation={equacao}
                  setEquation={setEquacao}
                />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="7"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="8"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="9"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="x"
                  type="operation"
                  equation={equacao}
                  setEquation={setEquacao}
                />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="4"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="5"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="6"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="-"
                  type="operation"
                  equation={equacao}
                  setEquation={setEquacao}
                />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="1"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="2"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="3"
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="+"
                  type="operation"
                  equation={equacao}
                  setEquation={setEquacao}
                />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="0"
                  type="default"
                  isZero
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="."
                  type="default"
                  equation={equacao}
                  setEquation={setEquacao}
                />
                <KeyboardButton
                  value="="
                  type="result"
                  isEquals
                  equation={equacao}
                  setEquation={setEquacao}
                  setResultado={setResultado}
                />
              </View>
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
    // backgroundColor: "blue",
  },

  buttonsView: {
    flexDirection: "row",
    alignItems: "baseline",
    // backgroundColor: "yellow",
    paddingVertical: 5,
  },

  equationView: {
    // backgroundColor: "green",
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
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  keysRow: {
    flexDirection: "row",
  },

  topIcons: { marginHorizontal: 7 },
});
