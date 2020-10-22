import React, {useState, useRef, useEffect} from 'react';
import { Alert, View, TextInput, StyleSheet, Text, Button,TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';


const MainButton = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.btnText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30
    },
    btnText:{
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});


export default MainButton;