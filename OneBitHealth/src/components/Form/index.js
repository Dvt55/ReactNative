import { useState } from "react";
import React from "react";
import { Text, TextInput, TouchableOpacity, View, Vibration, Pressable, Keyboard } from "react-native";
import Result from "./ResultImc/"
import styles from "./styles";

const Form = () => {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha sua altura e peso")
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")
    const [messageError, setErrorMessage] = useState(null)

    function ImcCalculator() {
        let heightFormat = height.replace(",",".")
        let weightFormat = weight.replace(",",".")
        return setImc((weightFormat / (heightFormat * heightFormat)).toFixed(2))
    }

    function InvalidationMsg() {
        if (imc == null) {
            Vibration.vibrate()
            setErrorMessage("Campo obrigatório*")
        }
    }
    function ResultImcValid() {
        Keyboard.dismiss()

        if (height != null && weight != null) {
            ImcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        }
        InvalidationMsg()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha sua altura e peso")
    }
    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.messageError}>{messageError}</Text>
                <TextInput style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.80"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.messageError}>{messageError}</Text>
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
            <Result messageResultImc={messageImc} Result_Imc={imc} />
        </Pressable>
    );
};
export default Form;