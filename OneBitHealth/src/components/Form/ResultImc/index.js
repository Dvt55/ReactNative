import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Result = (props) => {
    return(
    <View style={styles.resultImc}>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.numer}>{props.Result_Imc}</Text>
    </View>
    );
};
export default Result;