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
  isZero?: boolean;
  isEquals?: boolean;
  equation: String[];
  setEquation: React.Dispatch<React.SetStateAction<String[]>>;
  setResultado?: React.Dispatch<React.SetStateAction<string>>;
};

export default function KeyboardButton({
  value,
  type,
  isZero,
  isEquals,
  equation,
  setEquation,
  setResultado,
}: keyboardButtonProps) {
  return (
    <Pressable
      onPress={() => {
        if (setResultado !== undefined) {
          setResultado(
            calcular(
              equation.length <= 0
                ? "0"
                : equation.toString().replaceAll(",", "").replaceAll("x", "*"),
            ),
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
          isZero ? styles.zero : undefined,
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
