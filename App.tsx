import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import KeyboardButton from "./KeyboardButton";

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
  return (
    <View style={styles.container}>
      <View style={styles.visor}></View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 45,
    paddingTop: 30,
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
  },

  keysRow: {
    flexDirection: "row",
  },
});
