import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemsWrapper: {
        width: "100%",
        height: "68%"
    },
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
        fontSize: 16,
        fontWeight: "400"
    },
    itemBody: {
        width: "100%",
        height: "auto",
        padding: 5,
        flexDirection: "column",
        borderBottomColor: "#121212",
        borderBottomWidth: 1
    },
    itemBodyTextWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        flexDirection: "row",
    },
    itemBodyText: {
        color: "#bb86fc",
        fontSize: 14,
        fontWeight: "100"
    },
    itemBodyTextCustom: {
        color: "#e1e1e1",
        marginLeft: 5,
        fontWeight: "100"
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
        width: "80%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center"
    },
    addNewBarTextCustom: {
        color: "#e1e1e1",
        fontSize: 14,
        fontWeight: "500"
    },
    tabBarWrapper: {
        width: "100%",
        height: "auto",
        padding: 10,
        paddingTop: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    tabBarBtn: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    }
});

export default styles;