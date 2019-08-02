import React from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    Alert
} from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

class ModalEditPalace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palaceName: "",
            address: "",
            startTime: "",
            endTime: "",
            shouldBring: "",
            description: ""
        };
    }

    saveData = (item) => {
        const index = this.props.navigation.state.params.dataIndex;
        const { palaceName, startTime, endTime, shouldBring, description, address } = this.state;
        const form = {
            data: {
                name: palaceName || item.name,
                address: address || item.address,
                startTime: startTime || item.startTime,
                endTime: endTime || item.endTime,
                shouldBring: shouldBring || item.shouldBring,
                description: description || item.description
            },
            index,
            itemIndex: this.props.itemIndex
        }
        this.props.updatePalace(form);
        this.setState({ palaceName: "", address: "", startTime: "", endTime: "", shouldBring: "", description: "" });
        this.props.onRequestClose();
    }

    tickPalaceCompleted = (item) => {
        const index = this.props.navigation.state.params.dataIndex;
        const form = {
            data: {
                name: item.name,
                address: item.address,
                startTime: item.startTime,
                endTime: item.endTime,
                shouldBring: item.shouldBring,
                description: item.description,
                completed: !item.completed
            },
            index,
            itemIndex: this.props.itemIndex
        }
        this.props.updatePalace(form);
        this.setState({ palaceName: "", address: "", startTime: "", endTime: "", shouldBring: "", description: "" });
        this.props.onRequestClose();
    }

    handleDeletePalace = (index) => {
        const data = this.props.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        const item = data[dataIndex].palaces[index];
        Alert.alert(
            `Confirm your action`,
            `Delete "${item.name}"?`,
            [
                {
                    text: 'Cancel',
                    onPress: null,
                },
                { text: 'OK', onPress: () => this.onDeletePalace(dataIndex, index) },
            ],
            { cancelable: false },
        );
    }

    onDeletePalace = (dataIndex, index) => {
        this.props.deletePalace({ index: dataIndex, itemIndex: index })
        this.props.onRequestClose();
    }

    createData = () => {
        const index = this.props.navigation.state.params.dataIndex;
        const { palaceName, startTime, endTime, shouldBring, description, address } = this.state;
        if (palaceName !== "") {
            const form = {
                data: {
                    name: palaceName,
                    address,
                    startTime,
                    endTime,
                    shouldBring,
                    description,
                    completed: false
                },
                index
            }
            this.props.createPalace(form);
        }
        this.setState({ palaceName: "", address: "", startTime: "", endTime: "", shouldBring: "", description: "" });
        this.props.onRequestClose();
    }

    render() {
        const props = this.props;
        const onClose = props.onRequestClose;
        const data = this.props.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        let item = data[dataIndex].palaces[props.itemIndex];
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
                    {props.editMode === "edit" && (
                        <TouchableOpacity
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 45,
                                marginBottom: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: item.completed ? "#a4262c" : "#03dac5"
                            }}
                            onPress={() => this.tickPalaceCompleted(item)}
                        >
                            <Icon
                                name={item.completed ? "ios-close-circle-outline" : "ios-checkmark-circle-outline"}
                                size={20}
                                color="#e1e1e1"
                            />
                        </TouchableOpacity>
                    )}
                    <Text style={styles.textLabel}>Name:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.name || "Type something to add"}
                        placeholderTextColor="#e1e1e1"
                        autoFocus
                        autoCorrect={false}
                        value={this.state.palaceName}
                        onChangeText={(text) => this.setState({ palaceName: text })}
                    />
                    <Text style={styles.textLabel}>Address:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.address || "Type something to add"}
                        placeholderTextColor="#e1e1e1"
                        autoCorrect={false}
                        value={this.state.address}
                        onChangeText={(text) => this.setState({ address: text })}
                    />
                    <Text style={styles.textLabel}>Should bring:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.shouldBring || "Type something to add"}
                        placeholderTextColor="#e1e1e1"
                        autoCorrect={false}
                        value={this.state.shouldBring}
                        onChangeText={(text) => this.setState({ shouldBring: text })}
                    />
                    <Text style={styles.textLabel}>Description:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.description || "Type something to add"}
                        placeholderTextColor="#e1e1e1"
                        autoCorrect={false}
                        value={this.state.description}
                        onChangeText={(text) => this.setState({ description: text })}
                    />
                    <View style={{
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity
                            style={styles.btnStyle}
                            onPress={props.editMode === "edit" ? () => this.saveData(item) : this.createData}
                        >
                            <Text style={{ color: "#1e1e1e" }}>Save</Text>
                        </TouchableOpacity>
                        {this.props.editMode === "edit" && (
                            <TouchableOpacity
                                style={{ ...styles.btnStyle, backgroundColor: "#a4262c", marginLeft: 10 }}
                                onPress={() => this.handleDeletePalace(this.props.itemIndex)}
                            >
                                <Text style={{ color: "#1e1e1e" }}>Delete</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Modal>
        );
    }
}

export default ModalEditPalace;