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
        fontWeight: "400"
    },
    itemBody: {
        width: "100%",
        height: "auto",
        padding: 10,
        flexDirection: "column",
        borderBottomColor: "#121212",
        borderBottomWidth: 1
    },
    itemBodyTextWrapper: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    itemBodyText: {
        color: "#e1e1e1",
        fontWeight: "100"
    },
    itemBodyTextCustom: {
        color: "#bb86fc",
        fontSize: 14,
        fontWeight: "100",
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
        fontSize: 14,
        fontWeight: "500"
    },
    itemsWrapper: {
        width: "100%",
        height: "80.5%"
    },
    itemBodyBudget: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    budgetEditBtn: {
        width: "20%",
        height: "auto",
        borderRadius: 45,
        backgroundColor: "#bb86fc",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    budgetEditTextBtn: {
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: 9,
        color: "#e1e1e1"
    },
    itemTeamBudgetTextWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "92%"
    },
    footerWrapper: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        padding: 5,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;