import {View, StyleSheet, useWindowDimensions} from "react-native";

function Card({children}) {

  const {width, height} = useWindowDimensions();

  const marginTopSet = width < 380 ? 30 : 40;

  return (
    <View style={[styles.inputContainer, {marginTop: marginTopSet}]}>
        {children}
    </View>
  )
}


const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#4e0329",
        marginTop: 6,
        marginHorizontal: 18,
        padding: 20,
        borderRadius: 4,
        elevation: 4,
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.5,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Card