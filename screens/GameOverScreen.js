import React, { useState, useRef, useEffect } from 'react';
import { Alert, View, Image, TextInput, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MainButton from '../components/MainButton';



const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Fim de jogo!</Text>
                <View style={styles.imgContainer}>
                    <Image fadeDuration={1000} source={{uri: 'https://www.thelawofattraction.com/wp-content/uploads/101-ways-achieve-success-featured.jpg'}} style={styles.imgStyle} resizeMode="cover"/>
                    {/* <Image source={require('../assets/success.png')} style={styles.imgStyle} resizeMode="cover"/> */}
                </View>
            <Text>Número de tentativas: {props.roundsNumber}</Text>
            <Text>Número escolhido: {props.userNumber}</Text>
            <MainButton onPress={props.onRestart}>NOVO JOGO</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 20
    },  
    imgStyle: {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;