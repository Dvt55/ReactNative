import { useState } from "react";
import React from "react";
import { Text, TextInput, TouchableOpacity, View, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import Result from "./ResultImc/"
import styles from "./styles";

const Form = () => {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha sua altura e peso")
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")
    const [messageError, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function ImcCalculator() {
        let heightFormat = height.replace(",", ".");
        let weightFormat = weight.replace(",", ".");
        let totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
        setImc(totalImc);
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

        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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

                </Pressable>
                :
                <View style={styles.existImcResult}>
                    <Result messageResultImc={messageImc} Result_Imc={imc} />
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => ResultImcValid()}>
                        <Text style={styles.textbuttonCalculator}>{TextButton}</Text>
                    </TouchableOpacity>

                    <View style={styles.centeredFlatListContainer}>
                        <FlatList 
                            data={[...imcList].reverse()}
                            renderItem={({ item }) => (
                                <Text>
                                    <Text style={styles.TextList}>Resultado IMC= </Text>
                                    <Text style={styles.ResultList}>{item.imc}</Text>
                                    
                                </Text>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>

                </View>
            }

        </View>

    );
};
export default Form;