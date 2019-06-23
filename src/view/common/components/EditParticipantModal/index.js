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
            userName: "",
            phone: ""
        };
    }

    saveData = (item) => {
        const index = this.props.navigation.state.params.dataIndex;
        const { userName, phone } = this.state;
        const form = {
            data: {
                name: userName || item.name,
                phone: phone || item.phone
            },
            index,
            itemIndex: this.props.itemIndex
        }
        this.props.updateParticipant(form);
        this.setState({ userName: "", phone: "" });
        this.props.onRequestClose();
    }

    createData = () => {
        const index = this.props.navigation.state.params.dataIndex;
        const { userName, phone } = this.state;
        if (userName !== "" || phone !== "") {
            const form = {
                data: {
                    name: userName,
                    phone
                },
                index
            }
            this.props.createParticipant(form);
        }
        this.setState({ userName: "", phone: "" });
        this.props.onRequestClose();
    }

    render() {
        const props = this.props;
        const onClose = props.onRequestClose;
        const data = this.props.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        let item = data[dataIndex].participants[props.itemIndex];
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
                        placeholder={item.name || "Nhập vào để thêm"}
                        placeholderTextColor="#a4262c"
                        autoCorrect={false}
                        multiline={true}
                        value={this.state.userName}
                        onChangeText={(text) => this.setState({ userName: text })}
                    />
                    <Text style={styles.textLabel}>Phone number:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.phone || "Nhập vào để thêm"}
                        placeholderTextColor="#a4262c"
                        autoCorrect={false}
                        multiline={true}
                        value={this.state.phone}
                        onChangeText={(text) => this.setState({ phone: text })}
                    />
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={props.editMode === "edit" ? () => this.saveData(item) : this.createData}
                    >
                        <Text style={{ color: "#1e1e1e" }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default ModalEditTrip;