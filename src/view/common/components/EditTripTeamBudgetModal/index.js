import React from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    Text
} from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

class ModalEditTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountMoney: "",
            noteMoney: ""
        };
    }

    saveData = (item, method) => {
        const { amountMoney, noteMoney } = this.state;
        let date = new Date().getDate();
        if (date < 10) date = "0" + date;
        let month = new Date().getMonth() + 1;
        if (month < 10) month = "0" + month;
        const year = new Date().getFullYear();
        let hours = new Date().getHours();
        if (hours < 10) hours = "0" + hours;
        let min = new Date().getMinutes();
        if (min < 10) min = "0" + min;
        const time = `${date}/${month}/${year} (${hours}:${min})`;
        let money = method === "plus" ?
            Number(item.teamBudget) + Number(amountMoney) : Number(item.teamBudget) - Number(amountMoney);
        const total = method === "plus" ?
            `${(Number(item.totalCost) + Number(amountMoney))}` : `${item.totalCost}`;
        money = `${money}`;
        const form = {
            data: {
                teamBudgetNew: money,
                teamBudgetOld: item.teamBudget,
                note: noteMoney,
                method,
                time
            },
            totalCost: total,
            index: this.props.itemIndex
        }
        if (amountMoney !== "" && noteMoney !== "") this.props.saveTeamBudget(form);
        this.setState({ amountMoney: "", noteMoney: "" });
        this.props.onRequestClose();
    }

    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
    }

    render() {
        const props = this.props;
        const { amountMoney } = this.state;
        const { editMode } = this.props;
        const onClose = props.onRequestClose;
        const data = props.data;
        const index = this.props.itemIndex;
        let item = data[index];
        item = item || [];
        return (
            <Modal
                isVisible={props.visible}
                onBackButtonPress={onClose}
                onBackdropPress={onClose}
                onModalHide={onClose}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
            >
                <View style={styles.modalWrapper}>
                    <Text style={styles.textLabel}>Amount:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.teamBudget || "Type something to add"}
                        placeholderTextColor="#e1e1e1"
                        autoCorrect={false}
                        multiline={true}
                        value={this.state.amountMoney}
                        onChangeText={(text) => this.setState({ amountMoney: text })}
                    />
                    <Text style={styles.textLabel}>Note:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Type something to add"
                        placeholderTextColor="#e1e1e1"
                        autoCorrect={false}
                        multiline={true}
                        value={this.state.noteMoney}
                        onChangeText={(text) => this.setState({ noteMoney: text })}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            style={{ ...styles.btnStyle, marginRight: 10 }}
                            onPress={() => this.saveData(item, "plus")}
                        >
                            <Icon
                                style={{ marginRight: 5 }}
                                name="md-add"
                                size={20}
                                color="#1e1e1e"
                            />
                            <Text style={{ color: "#1e1e1e" }}>({this.formatNumber((Number(item.teamBudget) + Number(amountMoney))) || "0"}₫)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...styles.btnStyle, backgroundColor: "#a4262c" }}
                            onPress={() => this.saveData(item, "minus")}
                        >
                            <Icon
                                style={{ marginRight: 5 }}
                                name="md-remove"
                                size={20}
                                color="#1e1e1e"
                            />
                            <Text style={{ color: "#1e1e1e" }}>({this.formatNumber((Number(item.teamBudget) - Number(amountMoney))) || "0"}₫)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default ModalEditTrip;