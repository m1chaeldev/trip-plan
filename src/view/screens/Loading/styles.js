import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemStyle: {
        padding: 10,
        paddingTop: 0
    },
    itemWrapper: {
        backgroundColor: "#1e1e1e",
        width: "100%",
        height: "auto",
        borderRadius: 5
    },
    itemHeader: {
        width: "100%",
        height: "auto",
        borderBottomColor: "#121212",
        borderBottomWidth: 1,
        padding: 10
    },
    itemHeaderText: {
        color: "#bb86fc",
        fontSize: 16,
        fontWeight: "bold"
    },
    itemBody: {
        width: "100%",
        height: "auto",
        padding: 10,
        flexDirection: "column"
    },
    itemBodyTextWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        flexDirection: "row"
    },
    itemBodyText: {
        color: "#e1e1e1"
    },
    itemBodyTextCustom: {
        color: "#bb86fc",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 5
    },
    screenWrapper: {
        backgroundColor: "#121212",
        height: "100%"
    },
    headerWrapper: {
        backgroundColor: "#1e1e1e",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    headerTextStyle: {
        color: "#bb86fc",
        textTransform: "uppercase",
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center"
    },
    addNewBarWrapper: {
        width: "100%",
        padding: 10,
        height: "auto"
    },
    addNewBarStyle: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    addNewBarTextWrapper: {
        width: "60%",
        height: "auto",
    },
    addNewBarTextCustom: {
        color: "#e1e1e1",
        fontSize: 14
    },
    itemsWrapper: {
        width: "100%",
        height: "80.5%"
    }
});

export default styles;