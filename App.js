import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import InputArea from './screens/InputArea';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fecthFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
  });
};


export default function App() {
  const [userNumber, setUserNumber] = useState ();
  const [guessRounds, setGuessRounds] = useState (0);
  const [dataLoaded, setDataLoaded] = useState (0);

  if(!dataLoaded){
    return <AppLoading startAsync={fecthFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)}/>;
  }

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHandler = selectNumber => {
    setUserNumber(selectNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <InputArea onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGame}/>;

  }

  return (
    <View style={styles.screen}>
        <StatusBar style="light"/>
        <Header title="Adivinhe o número"/>
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1
    }
});
