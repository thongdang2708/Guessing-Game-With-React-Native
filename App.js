import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { useState } from 'react/cjs/react.development';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  
  let [userNumber, setUserNumber] = useState();
  let [gameIsOver, setGameIsOver] = useState(false);
  let [guessRounds, setGuessRounds] = useState(0);


  const [fontsLoaded] = useFonts({
      "open-sans-regular": require("../Game/assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("../Game/assets/fonts/OpenSans-Bold.ttf")
  });
  
  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  }

  const resetGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
    setGameIsOver(false);
  };

  const handleGameOver = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const pickNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let current = <StartGameScreen pickNumber={pickNumber}/>
  
  if (userNumber) {
    current = <GameScreen userNumber={userNumber} handleGameOver={handleGameOver}/>;
  }
  
  if (gameIsOver) {
    current = <GameOverScreen userNumber={userNumber} guessRounds={guessRounds} resetGame={resetGame}/>;
  }
  
  
  return (  
    <>
    <StatusBar style="light"/>
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootContainer}>
      <ImageBackground source={require("../Game/assets/background.png")} resizeMode="cover" style={styles.rootContainer} imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.rootContainer}>
          {current}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  imageStyle: {
    opacity: 0.25
  }
});
