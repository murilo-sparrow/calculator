import { Pressable, StyleSheet, Text, View } from "react-native";
import { calcular } from "./lib/calcular";

export const buttonColors = {
  default: "rgb(32, 32, 32)",
  operation: "rgb(62, 142, 247)",
  result: "rgb(103, 206, 103)",
};

export type buttonTypes = keyof typeof buttonColors;

type keyboardButtonProps = {
  value: string;
  type: buttonTypes;
  setEquation: React.Dispatch<React.SetStateAction<String[]>>;
};

export default function KeyboardButton({
  value,
  type,
  setEquation,
}: keyboardButtonProps) {
  return (
    <Pressable
      onPress={() => {
        if (value === "C") {
          setEquation((equation) => [""]);
        } else if (value === "=") {
          setEquation((equation) =>
            calcular(
              equation.toString().replaceAll(",", "").replaceAll("x", "*"),
            ).split(""),
          );
        } else {
          setEquation((equation) => [...equation, value]);
        }
      }}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: buttonColors[type] },
          value === "0" ? styles.zero : undefined,
        ]}
      >
        <Text style={styles.text}>{value}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    borderStartWidth: 0.7,
    borderEndWidth: 0.5,
    borderColor: "#9494948c",
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
  },
  zero: {
    width: 170,
  },
});
