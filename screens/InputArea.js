import React, {useState} from 'react';
import { Alert, View, TextInput, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Input from '../components/Input';
import Card from '../components/Card';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const InputArea = props => {

    const [entredValue, setEntredValue] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [selectedNumber, setselectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEntredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEntredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(entredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99){
            Alert.alert('Invalid number!', 'Número deve ser entre 1 e 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }

        setConfirmed(true);
        setselectedNumber(chosenNumber);
        setEntredValue('');
        Keyboard.dismiss();
    };
    let confirmedOutput;

    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>Número escolheu</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)} color={Colors.primary}>
                    COMEÇAR JOGO
                </MainButton>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.InputArea}>
                <Text style={styles.title}>Comece um novo jogo!</Text>
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <Text>Digite um número</Text>
                        <Input style={styles.Input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={entredValue}/>
                        <View style={styles.btnContainer}>
                            <View style={styles.btnActions}><Button title="Limpar" onPress={resetInputHandler} color={Colors.secondary} /></View>
                            <View style={styles.btnActions}><Button title="Confirmar" onPress={confirmInputHandler} color={Colors.primary} /></View>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    InputArea: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        padding: 10
    },
    inputContainer: {
        width: 500,
        maxWidth: '90%',
        alignItems: 'center',
    },
    btnActions: {
        width: 100,
    },
    Input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center'
    }
});

export default InputArea;