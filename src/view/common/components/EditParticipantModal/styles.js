import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalWrapper: {
        width: "100%",
        height: "auto",
        backgroundColor: "#121212",
        padding: 20,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    textLabel: {
        color: "#bb86fc",
        fontSize: 16,
        fontWeight: "100"
    },
    inputText: {
        backgroundColor: "#1e1e1e",
        width: "100%",
        height: "auto",
        padding: 10,
        color: "#a4262c",
        textAlign: "center",
        marginTop: 5,
        borderRadius: 45,
        fontWeight: "100"
    },
    btnStyle: {
        backgroundColor: "#03dac5",
        padding: 10,
        marginTop: 10,
        borderRadius: 45,
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "100"
    }
});

export default styles;