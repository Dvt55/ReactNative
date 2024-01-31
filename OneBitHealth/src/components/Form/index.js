import { useState } from "react";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Result from "./ResultImc/"
import styles from "./styles";

const Form = () => {

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha sua altura e peso")
const [imc, setImc] = useState(null)
const [TextButton, setTextButton] = useState("Calcular")

function ImcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}
function ResultImcValid(){
    if(height != null && weight != null){
        ImcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é: ")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha sua altura e peso")
}
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} 
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.80"
                keyboardType="numeric"
                />
                    
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 67.387"
                keyboardType="numeric"
                />

                <TouchableOpacity style={styles.buttonCalculator} onPress={() => ResultImcValid()}>
                    
                    <Text style={styles.textbuttonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
            </View>
            <Result messageResultImc={messageImc} Result_Imc={imc}/>
        </View>
    );
};
export default Form;