import {View, TextInput, StyleSheet, Alert, useWindowDimensions , KeyboardAvoidingView, ScrollView} from "react-native";

import React from 'react';
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react/cjs/react.development";
import Card from "../components/Card";
import Title from "../components/Title";
import InstructionText from "../components/InstructionText";

function StartGameScreen({pickNumber}) {
  
  let [enterText, setEnterText] = useState("");
  
  const handleChange = (enteredText) => {
    setEnterText(enteredText);
  };

  const {width, height} = useWindowDimensions();

  const marginTopSet = height < 500 ? 20 : 100;
  
  
  const handleReset = () => {
    setEnterText("");
  };

  const handleConfirm = () => {
    const inputNumber = parseInt(enterText);

    if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 99) {
        Alert.alert("Invalid Number!", "Number must be between 0 and 99", [{text: "Okay", style: "destructive", onPress: handleReset}]);
        return;
    }

    pickNumber(inputNumber);
  };

    
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer, {marginTop: marginTopSet}]}>
    <Title> Guess My Number </Title>
    <Card>
      <InstructionText> Enter A Number! </InstructionText>
        <TextInput style={styles.textInput} value={enterText} onChangeText={handleChange} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>

        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleReset}> Reset </PrimaryButton>
            </View>

            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleConfirm}> Confirm </PrimaryButton>
            </View>
        </View>
    </Card>
     </View>
     </KeyboardAvoidingView>
     </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100
  },  
  inputContainer: {
    alignItems: "center",
    justifyCenter: "center",
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 4,
    padding: 10,
    elevation: 4,
    shadowColor: "grey",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.25
},
textInput: {
    width: 50, 
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    textAlign: "center",
    fontSize: 32,
    color: "#ddb52f"
},
buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
},
buttonContainer: {
    flex: 1
}

    
});

export default StartGameScreen
































{/* <TextInput style={styles.textInput} value={enterText} onChangeText={handleChange} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>

<View style={styles.buttonsContainer}>
<View style={styles.buttonContainer}>
<PrimaryButton onPress={handleReset}> Reset </PrimaryButton>
</View>

<View style={styles.buttonContainer}>
<PrimaryButton onPress={handleConfirm}> Confirm </PrimaryButton>
</View>
</View> */}


// inputContainer: {
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: 100,
//   marginHorizontal: 24,
//   backgroundColor: "#4e0329",
//   padding: 16,
//   borderRadius: 5,
//   elevation: 4,
//   shadowColor: "black",
//   shadowOffset: {width: 0, height: 2},
//   shadowRadius: 5,
//   shadowOpacity: 0.5
// },
// textInput: {
// width: 50,
// height: 50,
// color: "#ddb52f",
// padding: 2,
// borderBottomWidth: 2,
// borderBottomColor: "#ddb52f",
// textAlign: "center",
// fontSize: 32
// },
// buttonsContainer: {
// padding: 5,
// width: "100%",
// flexDirection: "row",
// justifyContent: "center",
// alignItems: "center"
// },
// buttonContainer: {
// flex: 1
// }
