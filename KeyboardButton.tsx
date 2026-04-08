import { StyleSheet, Text, View } from "react-native";

const buttonColors = {
  default: "#202020",
  operation: "#038fff",
  result: "#2ed058",
};

export type buttonTypes = keyof typeof buttonColors;

type keyboardButtonProps = {
  value: string;
  type: buttonTypes;
};

export default function KeyboardButton({ value, type }: keyboardButtonProps) {
  return (
    <View style={[styles.container, { backgroundColor: buttonColors[type] }]}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 3,
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 40,
  },
});
