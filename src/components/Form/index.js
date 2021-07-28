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