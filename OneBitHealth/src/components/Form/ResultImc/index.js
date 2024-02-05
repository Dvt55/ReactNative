import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./styles";

const Result = (props) => {

    const onShare = async () => {
        const result = await Share.share({
            message:
                'Olá, gostaria de compartilhar com você o resultado do meu IMC: ' + props.Result_Imc,
        })
    }
    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numer}>{props.Result_Imc}</Text>
            <View style={styles.buttomShared}>


                <TouchableOpacity style={styles.shares}
                    onPress={() => {
                        onShare()
                    }}
                >
                    <Text style={styles.TextButtonShare}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Result;