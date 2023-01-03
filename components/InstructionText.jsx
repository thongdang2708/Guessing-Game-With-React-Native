import {View, Text, StyleSheet} from "react-native";

function InstructionText({children, style}) {
  return (
    <Text style={[styles.textInput, style]}> {children} </Text>
  )
};

const styles = StyleSheet.create({
    textInput: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "open-sans-bold"
    }
});

export default InstructionText