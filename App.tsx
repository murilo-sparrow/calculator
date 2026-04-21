import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import KeyboardButton from "./KeyboardButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { useState } from "react";

// type calcKey = {
//   symbol: string;
//   type: buttonTypes;
// };

// const calcKeys: calcKey[] = [
//   { symbol: "0", type: "default" },
//   { symbol: "0", type: "default" },
//   { symbol: "0", type: "default" },
//   { symbol: "0", type: "default" },
//   { symbol: "1", type: "default" },
//   { symbol: "2", type: "default" },
//   { symbol: "3", type: "default" },
//   { symbol: "4", type: "default" },
//   { symbol: "5", type: "default" },
//   { symbol: "6", type: "default" },
//   { symbol: "7", type: "default" },
//   { symbol: "8", type: "default" },
//   { symbol: "9", type: "default" },
//   { symbol: "0", type: "default" },
//   { symbol: ",", type: "default" },
//   { symbol: "5", type: "default" },
// ];

export default function App() {
  const [equation, setEquation] = useState<String[]>([]);
  const [resultado, setResultado] = useState<number>(0);

  function calculate() {
    equation.forEach((v) => setResultado(resultado + Number(v)));
  }

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
                <Text style={styles.digitsText}>{resultado}</Text>
              </View>
              <View style={styles.equationView}>
                <Text
                  style={[
                    styles.equationText,
                    equation.length > 11 && equation.length <= 16
                      ? { fontSize: 30 }
                      : equation.length > 16
                        ? { fontSize: 20 }
                        : {},
                  ]}
                >
                  {equation}
                </Text>
                <Ionicons
                  onPress={() =>
                    setEquation((equation) => equation.slice(0, -1))
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
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value=")"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="%"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="/"
                  type="operation"
                  equation={equation}
                  setEquation={setEquation}
                />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="7"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="8"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="9"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="x"
                  type="operation"
                  equation={equation}
                  setEquation={setEquation}
                />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="4"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="5"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="6"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="-"
                  type="operation"
                  equation={equation}
                  setEquation={setEquation}
                />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="1"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="2"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="3"
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="+"
                  type="operation"
                  equation={equation}
                  setEquation={setEquation}
                />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton
                  value="0"
                  type="default"
                  isZero
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value=","
                  type="default"
                  equation={equation}
                  setEquation={setEquation}
                />
                <KeyboardButton
                  value="="
                  type="result"
                  isEquals
                  equation={equation}
                  setEquation={setEquation}
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
    // backgroundColor: "red",
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
