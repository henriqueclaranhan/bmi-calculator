import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import BmiResult from './BmiResult';
import styles from './style';

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [message, setMessage] = useState("Fill out the weight and height fields");
    const [errorMessage, setErrorMessage] = useState( {heightText: null, weightText: null} );
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        return setBmi( (weight/(height**2)).toFixed(2) );
    }

    const validateValues = () => {

        // Error in height or weight field
        setErrorMessage(prevState => ({
            ...prevState,
            heightText: (height == null || height.length == 0) ? "Please fill out this field*" : null,
            weightText: (weight == null || weight.length == 0) ? "Please fill out this field*" : null
        }));
        
        if((height != null && weight != null)){
            setMessage("Your BMI is")
            calculateBmi();
            setHeight(null);
            setWeight(null);

            setErrorMessage(prevState => ({
                ...prevState,
                heightText: null,
                weightText: null
            }));

            Keyboard.dismiss();
        }
        else {
            setMessage("Fill out the weight and height fields");
            setBmi(null);
        }
    }

    return (
        <View style={styles.content}>
           <View style={styles.form}>
                <Text style={styles.formLabel}>Height</Text>
                <Text style={styles.labelHint}>in m</Text>
                <TextInput style={styles.formInput} onChangeText={setHeight} value={height} placeholder="e.g. 1.70" keyboardType="numeric" />
                <Text style={styles.labelErrorMessage}>{errorMessage.heightText}</Text>

                <Text style={styles.formLabel}>Weight</Text>
                <Text style={styles.labelHint}>in kg</Text>
                <TextInput style={styles.formInput} onChangeText={setWeight} value={weight} placeholder="e.g. 80" keyboardType="numeric" />
                <Text style={styles.labelErrorMessage}>{errorMessage.weightText}</Text>
           </View>
           <TouchableOpacity style={styles.calculateButton} onPress={ () => { validateValues() } }>
                <Text style={styles.calculateButtonText}>Calculate</Text>
           </TouchableOpacity>
           <BmiResult bmiResultMessage={message} bmiResult={bmi}/>
        </View>
    );

}