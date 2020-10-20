import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import InputArea from './screens/InputArea';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState ();

  const startGameHandler = (selectNumber) => {
    setUserNumber(selectNumber);
  };

  let content = <InputArea onStartGame={startGameHandler}/>;

  if(userNumber){
    content = <GameScreen userChoice={userNumber}/>
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
