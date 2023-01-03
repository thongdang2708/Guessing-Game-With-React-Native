import {View, Text, StyleSheet, useWindowDimensions} from "react-native";

function NumberContainer({children}) {

  const {width, height} = useWindowDimensions();

  const paddingSet = width < 380 ? 10 : 12;
  const marginVerticalSet = width < 380 ? 12 : 24;
  const fontSizeSet = width < 380 ? 20 : 24;

  return (
    <View style={[styles.inputContainer, {padding: paddingSet, marginVertical: marginVerticalSet}]}> 
        <Text style={[styles.textInput, {fontSize: fontSizeSet}]}> {children} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 10,
        marginVertical: 24,
        borderWidth: 2,
        borderColor: "white",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        maxWidth: "20%",
        width: 200
    },
    textInput: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default NumberContainer