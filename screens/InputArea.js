import React from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';

import Input from '../components/Input';
import Card from '../components/Card';
import Colors from '../constants/colors';

const InputArea = props => {
    return (
        <View style={styles.InputArea}>
            <Text style={styles.title}>Comece um novo jogo!</Text>
            <Card style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                    <Text>Selecion um número</Text>
                    <Input style={styles.Input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="numeric" maxLength={2} />
                    <View style={styles.btnContainer}>
                        <View style={styles.btnActions}><Button title="Limpar" onPress={() => { }} color={Colors.secondary} /></View>
                        <View style={styles.btnActions}><Button title="Confirmar" onPress={() => { }} color={Colors.primary} /></View>
                    </View>
                </View>
            </Card>
        </View>
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
    }
});

export default InputArea;