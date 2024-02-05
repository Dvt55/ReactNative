import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
       width: "100%",
       height: "100%",
       bottom: 0,
       backgroundColor: "#ffffff",
       alignItems: "center",
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       marginTop: 30,

    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 50,
        height: 40,
        margin: 12,
        backgroundColor: "#f6f6f6",
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textbuttonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    messageError: {
        fontSize: 10,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    existImcResult: {
        width: "100%",
        height: "50%"
    },
    centeredFlatListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextList: {
        fontSize: 20,
        color: "red",
        width: "100%",
        height: 50,

    },
    ResultList: {
        fontSize: 28,
        color: "red",
        width: "100%",
        height: 50,
    }
});

export default styles