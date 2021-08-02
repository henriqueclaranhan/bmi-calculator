import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function BmiResult(props){
    return (
        <View style={styles.resultContent}>
            <Text style={styles.resultMessage}>{props.bmiResultMessage}</Text>
            <Text style={styles.result}>{props.bmiResult}</Text>
        </View>
    );
}