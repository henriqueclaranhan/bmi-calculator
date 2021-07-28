import { func } from 'prop-types';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import BmiResult from './BmiResult';

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [message, setMessage] = useState("Fill out the weight and height fields");
    const [bmi, setBmi] = useState(null);
    const [textButton, setTextButton] = useState("Calculate");

    const calculateBmi = () => {
        return setBmi( (weight/(height**2)).toFixed(2) );
    }

    const validateValues = () => {
        if(height != null && weight != null){
            setMessage("Your BMI is")
            calculateBmi();
            setHeight(null);
            setWeight(null);
            setTextButton("Calculate again")
        }
        else {
            setTextButton("Calculate");
            setMessage("Fill out the weight and height fields");
            setBmi(null);
        }
    }

    return (
        <View>
           <View>
               <Text>Height</Text>
               <TextInput placeholder="e.g. 1.70" keyboardType="numeric" />
               <Text>Weight</Text>
               <TextInput placeholder="e.g. 80" keyboardType="numeric" />
               <Button title={textButton}/>
           </View>
           <BmiResult bmiResultMessage={message} bmiResult={bmi}/>
        </View>
    );
}