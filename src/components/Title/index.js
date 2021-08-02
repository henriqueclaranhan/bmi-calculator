import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'

export default function Title(){
    return (
        <View style={styles.titleBackground}>
            <View style={styles.titleBox}>
                <View style={styles.beforeTitle}></View>
                <Text style={styles.titleText}>BMI Calculator</Text>
            </View>
            
        </View>
    );
}