import {View, Text, StyleSheet} from "react-native";

function SingleLog({logIndex, logValue}) {
  return (
    <View style={styles.logContainer}>
        <View>
            <Text style={styles.textInput}> #{logIndex}</Text>
        </View>

        <View>
            <Text style={styles.textInput}> {logValue} </Text> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logContainer: {
        marginVertical: 10, 
        marginHorizontal: 20,
        backgroundColor: "#ddb52f",
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderWidthColor: "black",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
        fontFamily: "open-sans-bold",
        color: "black",
        fontWeight: "bold"
    }
});

export default SingleLog