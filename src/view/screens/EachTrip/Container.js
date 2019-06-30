import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

// Actions
import { tripActions } from "./../../../redux/actions"

// Components
import ModalEditPalace from "./../../common/components/EditPalaceModal";
import ModalEditParticipant from "./../../common/components/EditParticipantModal";

// Styles
import styles from "./styles";

// Constants

class App extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            tabSelected: 1,
            isShowingEditPalaceModal: false,
            isShowingEditParticipantModal: false,
            palaceIndex: "",
            participantIndex: "",
            editMode: ""
        };
    }

    closeModal = () => {
        this.setState({
            isShowingEditPalaceModal: false,
            isShowingEditParticipantModal: false,
            palaceIndex: "",
            participantIndex: ""
        })
    }

    handleDeleteParticipant = (index) => {
        const data = this.props.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        const item = data[dataIndex].participants[index];
        Alert.alert(
            `Confirm your action`,
            `Delete "${item.name}"?`,
            [
                {
                    text: 'Cancel',
                    onPress: null,
                },
                { text: 'OK', onPress: () => this.props.deleteParticipant({ index: dataIndex, itemIndex: index }) },
            ],
            { cancelable: false },
        );
    }

    editingPalace = (index) => {
        this.setState({ palaceIndex: index, editMode: "edit", isShowingEditPalaceModal: true });
    }

    editingParticipant = (index) => {
        this.setState({ participantIndex: index, editMode: "edit", isShowingEditParticipantModal: true });
    }

    renderParticipants = ({ item, index }) => {
        const data = this.props.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        return (
            // Each item
            <TouchableOpacity
                onPress={() => this.editingParticipant(index)}
            >
                <View style={{ ...styles.itemStyle, paddingBottom: index + 1 === data[dataIndex].participants.length ? 0 : 10 }}>
                    <View style={{ ...styles.itemWrapper, flexDirection: "row", padding: 20 }}>
                        <View style={{
                            width: "94%",
                            height: "auto",
                            flexDirection: "row"
                        }}>
                            <View style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                backgroundColor: "#03dac5",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Icon
                                    name="ios-person"
                                    size={30}
                                    color="#121212"
                                />
                            </View>
                            <View style={{
                                width: "80%",
                                height: "auto",
                                padding: 5,
                                paddingLeft: 15
                            }}>
                                <Text style={{
                                    color: "#e1e1e1",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#03dac5"
                                }}>{item.name}</Text>
                                <Text style={{
                                    color: "#e1e1e1"
                                }}>{item.phone}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.handleDeleteParticipant(index)}>
                            <Icon
                                style={{ marginLeft: 5 }}
                                name="ios-close-circle-outline"
                                size={25}
                                color="#a4262c"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderPalaces = ({ item, index }) => {
        const data = this.props.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        return (
            // Each item
            <TouchableOpacity
                onPress={() => this.editingPalace(index)}
            >
                <View style={{ ...styles.itemStyle, paddingBottom: index + 1 === data[dataIndex].palaces.length ? 0 : 10 }}>
                    <View style={styles.itemWrapper}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemHeaderText}>{item.name}</Text>
                        </View>
                        {/* Text */}
                        <View style={styles.itemBody}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{
                                    width: 25,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Icon
                                        name="md-pin"
                                        size={20}
                                        color="#e1e1e1"
                                    />
                                </View>
                                <View style={styles.itemBodyTextWrapper}>
                                    <Text style={styles.itemBodyText}>
                                        Address:
                                </Text>
                                    <Text style={styles.itemBodyTextCustom}>
                                        {item.address}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* Text */}
                        <View style={styles.itemBody}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{
                                    width: 25,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Icon
                                        name="md-time"
                                        size={20}
                                        color="#e1e1e1"
                                    />
                                </View>
                                <View style={styles.itemBodyTextWrapper}>
                                    <Text style={styles.itemBodyText}>
                                        Time:
                                </Text>
                                    <Text style={styles.itemBodyTextCustom}>
                                        {item.startTime} - {item.endTime}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* Text */}
                        <View style={styles.itemBody}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{
                                    width: 25,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Icon
                                        name="md-bulb"
                                        size={20}
                                        color="#e1e1e1"
                                    />
                                </View>
                                <View style={styles.itemBodyTextWrapper}>
                                    <Text style={styles.itemBodyText}>
                                        Should bring:
                                </Text>
                                    <Text style={styles.itemBodyTextCustom}>
                                        {item.shouldBring}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* Text */}
                        <View style={{
                            ...styles.itemBody,
                            borderBottomWidth: 0,
                            paddingBottom: 0
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{
                                    width: 25,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Icon
                                        name="md-text"
                                        size={20}
                                        color="#e1e1e1"
                                    />
                                </View>
                                <View style={styles.itemBodyTextWrapper}>
                                    <Text style={styles.itemBodyText}>
                                        Description:
                                </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.itemBody}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.itemBodyTextCustom}>
                                    {item.description || "Nothing"}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const originalData = this.props.data;
        const index = this.props.navigation.state.params.dataIndex;
        const data = originalData[index];
        const { tabSelected } = this.state;
        const palaceText = `${data.palaces.length} palace${data.palaces.length > 1 ? "s" : ""} to go`;
        const participantText = `${data.participants.length} participant${data.participants.length > 1 ? "s" : ""} joining this trip`;
        return (
            <View style={styles.screenWrapper}>
                <ModalEditPalace
                    {...this.props}
                    editMode={this.state.editMode}
                    itemIndex={this.state.palaceIndex}
                    visible={this.state.isShowingEditPalaceModal}
                    onRequestClose={this.closeModal}
                />
                <ModalEditParticipant
                    {...this.props}
                    editMode={this.state.editMode}
                    itemIndex={this.state.participantIndex}
                    visible={this.state.isShowingEditParticipantModal}
                    onRequestClose={this.closeModal}
                />
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerTextStyle}>
                        {data.name}
                    </Text>
                </View>

                {/* Add new */}
                <View style={styles.addNewBarWrapper}>
                    <View style={styles.addNewBarStyle}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon
                                name="md-arrow-round-back"
                                size={30}
                                color="#bb86fc"
                            />
                        </TouchableOpacity>
                        <View style={styles.addNewBarTextWrapper}>
                            <Text style={styles.addNewBarTextCustom}>
                                {tabSelected === 1 ? palaceText : participantText}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={
                                tabSelected === 1 ?
                                    () => this.setState({ isShowingEditPalaceModal: true, editMode: "create" })
                                    : () => this.setState({ isShowingEditParticipantModal: true, editMode: "create" })}
                        >
                            <Icon
                                name={tabSelected !== 1 ? "md-person-add" : "ios-add-circle-outline"}
                                size={30}
                                color="#bb86fc"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Tab Bar */}
                <View style={styles.tabBarWrapper}>
                    <TouchableOpacity style={{
                        ...styles.tabBarBtn,
                        backgroundColor: tabSelected === 1 ? "#e1e1e1" : "#bb86fc",
                        marginRight: 10
                    }}
                        onPress={() => tabSelected !== 1 ? this.setState({ tabSelected: 1 }) : null}
                    >
                        <Text style={{
                            color: tabSelected === 1 ? "#121212" : "#e1e1e1"
                        }}>Palaces</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        ...styles.tabBarBtn,
                        backgroundColor: tabSelected === 1 ? "#bb86fc" : "#e1e1e1"
                    }}
                        onPress={() => tabSelected === 1 ? this.setState({ tabSelected: 2 }) : null}
                    >
                        <Text style={{
                            color: tabSelected === 1 ? "#e1e1e1" : "#121212"
                        }}>Participants</Text>
                    </TouchableOpacity>
                </View>
                {/* Items */}
                <View style={styles.itemsWrapper}>
                    {tabSelected === 1 && (
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={data.palaces}
                            renderItem={this.renderPalaces}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                    {tabSelected !== 1 && (
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={data.participants}
                            renderItem={this.renderParticipants}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                </View>
            </View>
        );
    }
}


const mapActionToProps = {
    createPalace: tripActions.createPalace,
    deletePalace: tripActions.deletePalace,
    updatePalace: tripActions.updatePalace,
    createParticipant: tripActions.createParticipant,
    updateParticipant: tripActions.updateParticipant,
    deleteParticipant: tripActions.deleteParticipant
};

const mapStateToProps = state => {
    return {
        data: state.trip.data
    };
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(App);