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

class ModalEditPalace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palaceName: "",
            startTime: "",
            endTime: "",
            shouldBring: "",
            description: ""
        };
    }

    saveData = (item) => {
        const index = this.props.navigation.state.params.dataIndex;
        const { palaceName, startTime, endTime, shouldBring, description } = this.state;
        const form = {
            data: {
                name: palaceName || item.name,
                startTime: startTime || item.startTime,
                endTime: endTime || item.endTime,
                shouldBring: shouldBring || item.shouldBring,
                description: description || item.description,
            },
            index,
            itemIndex: this.props.itemIndex
        }
        this.props.updatePalace(form);
        this.setState({ palaceName: "", startTime: "", endTime: "", shouldBring: "", description: "" });
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
        const { palaceName, startTime, endTime, shouldBring, description } = this.state;
        if (palaceName !== "") {
            const form = {
                data: {
                    name: palaceName,
                    startTime,
                    endTime,
                    shouldBring,
                    description
                },
                index
            }
            this.props.createPalace(form);
        }
        this.setState({ palaceName: "", startTime: "", endTime: "", shouldBring: "", description: "" });
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
                    <Text style={styles.textLabel}>Name:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.name || "Nhập vào để thêm"}
                        placeholderTextColor="#a4262c"
                        autoCorrect={false}
                        multiline={true}
                        value={this.state.palaceName}
                        onChangeText={(text) => this.setState({ palaceName: text })}
                    />
                    <Text style={styles.textLabel}>Start time:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.startTime || "Nhập vào để thêm"}
                        placeholderTextColor="#a4262c"
                        autoCorrect={false}
                        multiline={true}
                        value={this.state.startTime}
                        onChangeText={(text) => this.setState({ startTime: text })}
                    />
                    <Text style={styles.textLabel}>End time:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.endTime || "Nhập vào để thêm"}
                        placeholderTextColor="#a4262c"
                        autoCorrect={false}
                        multiline={true}
                        value={this.state.endTime}
                        onChangeText={(text) => this.setState({ endTime: text })}
                    />
                    <Text style={styles.textLabel}>Should bring:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.shouldBring || "Nhập vào để thêm"}
                        placeholderTextColor="#a4262c"
                        autoCorrect={false}
                        multiline={true}
                        value={this.state.shouldBring}
                        onChangeText={(text) => this.setState({ shouldBring: text })}
                    />
                    <Text style={styles.textLabel}>Description:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={item.description || "Nhập vào để thêm"}
                        placeholderTextColor="#a4262c"
                        multiline={true}
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