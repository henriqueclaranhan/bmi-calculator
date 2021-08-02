import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import BmiResult from './BmiResult';

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [message, setMessage] = useState("Fill out the weight and height fields");
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        return setBmi( (weight/(height**2)).toFixed(2) );
    }

    const validateValues = () => {
        if(height != null && weight != null){
            setMessage("Your BMI is")
            calculateBmi();
            setHeight(null);
            setWeight(null);
            Keyboard.dismiss();
        }
        else {
            setMessage("Fill out the weight and height fields");
            setBmi(null);
        }
    }

    return (
        <View>
           <View>
               <Text>Height</Text>
               <TextInput onChangeText={setHeight} value={height} placeholder="e.g. 1.70" keyboardType="numeric" />
               <Text>Weight</Text>
               <TextInput onChangeText={setWeight} value={weight} placeholder="e.g. 80" keyboardType="numeric" />
               <TouchableOpacity title="Calculate" onPress={ () => { validateValues() } } />
           </View>
           <BmiResult bmiResultMessage={message} bmiResult={bmi}/>
        </View>
    );
}