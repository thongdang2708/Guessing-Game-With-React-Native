import {View, Text, StyleSheet, Image, useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";



function GameOverScreen({userNumber, guessRounds, resetGame}) {

  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  let marginTopSet = height < 500 ? 50 : 100;

  if (height < 500) {
    imageSize = 80;
  }

  const imageStyleSet = {
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize / 2
  }
 
  return (
  <ScrollView style={styles.screen}>
   <View style={[styles.rootContainer, {marginTop: marginTopSet}]}>
    <Title> Game Over </Title> 

    <View style={[styles.imageContainer, imageStyleSet]}>
      <Image source={require("../assets/success.png")} style={styles.imageStyle}/>
    </View>

    <Text style={styles.mainText}> Your phone needs <Text style={styles.highlightText}> {guessRounds} </Text> rounds to guess the number <Text style={styles.highlightText}> {userNumber} </Text>.</Text>

    <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetGame}>
          <InstructionText>
            Click to go back to play!
          </InstructionText>
        </PrimaryButton>
    </View>
   </View>
   </ScrollView>
  )
};


const styles = StyleSheet.create({
    screen: {
      flex: 1
    },
    rootContainer: {
      flex: 1,
      padding: 15,
      justifyContent: "center",
      alignItems: "center"
    },
    imageContainer: {
      marginTop: 20,
      borderWidth: 3,
      borderColor: "black",
      overflow: "hidden"
    },
    imageStyle: {
      width: "100%",
      height: "100%"
    },
    mainText: {
      fontFamily: "open-sans-regular",
      fontSize: 24,
    },
    highlightText: {
      fontFamily: "open-sans-bold",
      color: "#4e0329"
    },
    buttonContainer: {
      marginTop: 5
    }
});

export default GameOverScreen