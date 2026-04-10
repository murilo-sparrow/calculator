import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import KeyboardButton from "./KeyboardButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";

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

let equation: [] = [];

export default function App() {
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
              <View style={{ flex: 1, flexDirection: "row" }}>
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
              <View style={{ flex: 6 }}></View>
              <View
                style={{
                  // backgroundColor: "green",
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center",
                  paddingVertical: 2,
                }}
              >
                <Ionicons name="backspace" size={32} color={"#a6a6a6"} />
              </View>
            </View>
            <View style={styles.keyboard}>
              <View style={styles.keysRow}>
                <KeyboardButton value="(" type="default" />
                <KeyboardButton value=")" type="default" />
                <KeyboardButton value="%" type="default" />
                <KeyboardButton value="/" type="operation" />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton value="7" type="default" />
                <KeyboardButton value="8" type="default" />
                <KeyboardButton value="9" type="default" />
                <KeyboardButton value="x" type="operation" />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton value="4" type="default" />
                <KeyboardButton value="5" type="default" />
                <KeyboardButton value="6" type="default" />
                <KeyboardButton value="-" type="operation" />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton value="1" type="default" />
                <KeyboardButton value="2" type="default" />
                <KeyboardButton value="3" type="default" />
                <KeyboardButton value="+" type="operation" />
              </View>
              <View style={styles.keysRow}>
                <KeyboardButton value="0" type="default" isZero />
                <KeyboardButton value="," type="default" />
                <KeyboardButton value="=" type="result" />
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
    // backgroundColor: "blue",
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
