
import {Text, StyleSheet, Platform} from "react-native";


function Title({children}) {
  return (
    <Text style={styles.title}> {children} </Text>
  )
};

const styles = StyleSheet.create({
   title: {
     borderWidth: 2,
     borderColor: "#ddb52f",
     textAlign: "center",
     padding: 15,
     fontSize: 26,
     color: "#ddb52f",
     borderRadius: 10,
    maxWidth: "80%",
    width: 350
   }
}); 

export default Title