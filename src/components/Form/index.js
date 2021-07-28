import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import BmiResult from './BmiResult';

export default function Form(){
    return (
        <View>
           <View>
               <Text>Height</Text>
               <TextInput placeholder="e.g. 1.70" keyboardType="numeric" />
               <Text>Weight</Text>
               <TextInput placeholder="e.g. 80" keyboardType="numeric" />
               <Button title="Calculate"/>
           </View>
           <BmiResult bmiResultMessage={message} bmiResult={bmi}/>
        </View>
    );
}