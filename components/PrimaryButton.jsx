import {View, Text, StyleSheet, Pressable} from "react-native";

function PrimaryButton ({children, onPress}) {
  return (
      <View style={styles.outerInputContainer}>
          <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.innerInputContainer, styles.pressed] : styles.innerInputContainer} android_ripple={{color: "#dddddd"}} >
              <Text style={styles.textInput}> {children} </Text>
          </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
    outerInputContainer: {
      margin: 4,
      borderRadius: 28,
      backgroundColor: "#72063c",
      overflow: "hidden"
    },
    innerInputContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 4,
      shadowColor: "grey",
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 4,
      shadowOpacity: 4
    },
    textInput: {
        textAlign: "center",
        color: "white"
    },
    pressed: {
      opacity: 0.5
    }
});

export default PrimaryButton





































{/* <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.innerInputContainer, styles.pressed] : styles.innerInputContainer} android_ripple={{color: "#dddddd"}}>
          <Text style={styles.textInput}> {children} </Text>
          </Pressable> */}





// outerInputContainer: {
//   margin: 4,
//   borderRadius: 28,
//   backgroundColor: "#72063c",
//   overflow: "hidden"
// },
// innerInputContainer: {
//   paddingVertical: 8,
//   paddingHorizontal: 16,
//   elevation: 4,
//   shadowColor: "black",
//   shadowEffect: {width: 0, height: 2},
//   shadowRadius: 6,
//   shadowOpacity: 0.5
// },
// textInput: {
//   color: "white",
//   fontWeight: "bold",
//   textAlign: "center"
// },
// pressed: {
//   opacity: 0.5
// }