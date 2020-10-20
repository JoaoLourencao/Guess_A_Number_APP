import React from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
import Card from '../components/Card'
const InputArea = props => {
    return(
        <View style={styles.InputArea}>
            <Text style={styles.title}>Comece um novo jogo!</Text>
            <Card style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                    <Text>Selecion um número</Text>
                    <TextInput />
                    <View style={styles.btnContainer}>
                        <Button title="Limpar" onPress={()=>{}}/>
                        <Button title="Confirmar" onPress={()=>{}}/>
                    </View>
                </View>
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    InputArea:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,

    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        padding: 15
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        
    }
});

export default InputArea;