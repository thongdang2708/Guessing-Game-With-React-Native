import {View, Text,  StyleSheet, Alert, FlatList, useWindowDimensions} from "react-native";
import Title from "../components/Title";
import { useState } from "react/cjs/react.development";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect } from "react/cjs/react.development";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import {Ionicons} from "@expo/vector-icons";
import SingleLog from "../components/single item/SingleLog";

const generateRandomNumber = (min, max, excludeNumber) => {

  const generateRandom =  Math.floor(Math.random() * (max - min)) + min;

  if (generateRandom === excludeNumber) {
    return generateRandomNumber(min, max, excludeNumber);
  } else {
    return generateRandom;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, handleGameOver}) {

 
  const randomNumber = generateRandomNumber(minBoundary, maxBoundary, userNumber);

  const [opponentGuess, setOpponentGuess] = useState(randomNumber);
  const [numberOfGuessRounds, setNumberOfGuessRounds] = useState([opponentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  },[]);

  useEffect(() => {
    if (opponentGuess === userNumber) {
      handleGameOver(numberOfGuessRounds.length);
    }
  }, [opponentGuess, userNumber]);

  
  const {width, height} = useWindowDimensions();

  const marginTopSet = height < 500 ? 30 : 100;


  const handlePress = (direction) => {

    if ((direction === "low" && opponentGuess < userNumber) || (direction === "higher" && opponentGuess > userNumber)) {
        Alert.alert("Something is wrong", "You know there is something wrong...!", [{text: "Cancel", style: "cancel"}]);
        return;
    }

    if (direction === "low") {
        maxBoundary = opponentGuess;
      
    } else {
       minBoundary = opponentGuess + 1;
    }
    
    const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, opponentGuess);
    setOpponentGuess(newRandomNumber);
    setNumberOfGuessRounds((prevRounds) => [newRandomNumber, ...prevRounds]);
  };

    let content = (
      <>
         <NumberContainer> {opponentGuess} </NumberContainer>

<Card>
<InstructionText style={styles.styleInstructionText}> Higher or Lower? </InstructionText>
<View style={styles.buttonsContainer}>
   <View style={styles.buttonContainer}>
   <PrimaryButton onPress={() => handlePress("low")}> 
   <Ionicons name="md-remove" size={24} color="white"/>
   </PrimaryButton>
   </View>

   <View style={styles.buttonContainer}>
   <PrimaryButton onPress={()=> handlePress("higher")}> 
   <Ionicons name="md-add" size={24} color="white"/>
   </PrimaryButton>
   </View>
</View>
</Card>
      </>
    );
    
    if (width > 500) {
      content = (
        <>
        <View style={styles.containerInWide}>
        <View style={styles.buttonContainer}>
   <PrimaryButton onPress={() => handlePress("low")}> 
   <Ionicons name="md-remove" size={24} color="white"/>
   </PrimaryButton>
   </View>

        <NumberContainer> {opponentGuess} </NumberContainer>

        <View style={styles.buttonContainer}>
   <PrimaryButton onPress={()=> handlePress("higher")}> 
   <Ionicons name="md-add" size={24} color="white"/>
   </PrimaryButton>
   </View>



        </View>
        </>
      )
    }
    
    
  const totalLength = numberOfGuessRounds.length;
  return (
    <View style={[styles.rootContainer, {marginTop: marginTopSet}]}>
       <Title> Opponent's Guess! </Title>

        {content}
        <View style={styles.listContainer}>
          <FlatList data={numberOfGuessRounds} renderItem={(itemData) => {
              return <SingleLog logIndex={totalLength - itemData.index} logValue={itemData.item}/>
          }}
          keyExtractor={(item, index) => {
            return item;
          }}
          alwaysBounceVertical={false}
          />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      alignItems: "center"
    },
    buttonsContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonContainer: {
      flex: 1
    },
    styleInstructionText: {
      marginBottom: 20,
    },
    listContainer: {
      flex: 1,
      padding: 10
    },
    containerInWide: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }
});

export default GameScreen