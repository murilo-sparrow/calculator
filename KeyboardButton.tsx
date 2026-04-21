import { Pressable, StyleSheet, Text, View } from "react-native";

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
};

export default function KeyboardButton({
  value,
  type,
  isZero,
  isEquals,
  equation: equation,
  setEquation: setEquation,
}: keyboardButtonProps) {
  if (isEquals) {
    if (equation.length > 0) {
      value = "=";
    } else {
      value = "C";
    }
  }

  return (
    <Pressable
      onPress={() => {
        setEquation((equation) => [...equation, value]);
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
