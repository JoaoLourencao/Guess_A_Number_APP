import React, {useState, useRef, useEffect} from 'react';
import { Alert, View, TextInput, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Fim de jogo!</Text>
            <Text>Número de tentativas: {props.roundsNumber}</Text>
            <Text>Número escolhido: {props.userNumber}</Text>
            <Button title="NOVO JOGO" onPress={props.onRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;