import React from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    Text
} from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

class ModalEditTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripName: ""
        };
    }

    saveData = (item) => {
        const { tripName } = this.state;
        const form = {
            name: tripName || item.name,
            index: this.props.itemIndex
        }
        this.props.updateTrip(form);
        this.setState({ tripName: "" });
        this.props.onRequestClose();
    }

    createData = () => {
        const { tripName } = this.state;
        if (tripName !== "") {
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
            const form = {
                name: tripName,
                createdTime: time,
                teamBudget: "",
                totalCost: "",
                palaces: [],
                participants: [],
                teamBudgetHistory: []
            }
            this.props.createTrip(form);
            this.setState({ tripName: "" });
            this.props.onRequestClose();
        }
        else this.props.onRequestClose();
    }

    render() {
        const props = this.props;
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
                    <Text style={styles.textLabel}>Name:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.name || "Type something to add"}
                        placeholderTextColor="#e1e1e1"
                        autoCorrect={false}
                        maxLength={50}
                        multiline
                        value={this.state.tripName}
                        onChangeText={(text) => this.setState({ tripName: text })}
                    />
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={editMode === "edit" ? () => this.saveData(item) : this.createData}
                    >
                        <Text style={{ color: "#1e1e1e" }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default ModalEditTrip;