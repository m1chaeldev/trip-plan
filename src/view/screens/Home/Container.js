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

// Components
import ModalEditTrip from "./../../common/components/EditTripModal";
import ModalEditTripTeamBudget from "./../../common/components/EditTripTeamBudgetModal";

// Styles
import styles from "./styles";

// Actions
import { tripActions } from "./../../../redux/actions";
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

class App extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isShowingEditTripModal: false,
            isShowingEditTripTeamBudgetModal: false,
            editingItem: "",
            editMode: ""
        };
    }

    closeModal = () => {
        this.setState({
            isShowingEditTripModal: false,
            isShowingEditTripTeamBudgetModal: false,
            editingItem: ""
        })
    }

    handleViewTrip = (index) => {
        this.props.navigation.navigate("EachTrip", { data: this.props.data, dataIndex: index })
    }

    handleEditTrip = (index) => {
        this.setState({ editingItem: index, editMode: "edit", isShowingEditTripModal: true })
    }

    handleEditTripTeamBudget = (index) => {
        this.setState({ editingItem: index, isShowingEditTripTeamBudgetModal: true })
    }

    handleDeleteTrip = (index) => {
        const { data } = this.props;
        const item = data[index];
        Alert.alert(
            `Confirm your action`,
            `Delete "${item.name}"?`,
            [
                {
                    text: 'Cancel',
                    onPress: null,
                },
                { text: 'OK', onPress: () => this.props.deleteTrip(index) },
            ],
            { cancelable: false },
        );
    }

    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
    }

    renderItem = ({ item, index }) => (
        // Each item
        <TouchableOpacity
            onPress={() => this.handleViewTrip(index)}
        >
            <View style={{ ...styles.itemStyle, paddingBottom: index + 1 === this.props.data.length ? 0 : 10 }}>
                <View style={styles.itemWrapper}>
                    <View style={styles.itemHeader}>
                        <Text style={styles.itemHeaderText}>{item.name}</Text>
                    </View>
                    <View style={styles.itemBody}>
                        {/* Text */}
                        <View style={{ flexDirection: "row" }}>
                            <View style={{
                                width: "7%"
                            }}>
                                <Icon
                                    style={{}}
                                    name="ios-bicycle"
                                    size={20}
                                    color="#e1e1e1"
                                />
                            </View>
                            <View style={styles.itemBodyTextWrapper}>
                                <Text style={styles.itemBodyText}>
                                    All palaces to go:
                            </Text>
                                <Text style={styles.itemBodyTextCustom}>
                                    {item.palaces.length}
                                </Text>
                            </View>
                        </View>
                        {/* Text */}
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <View style={{
                                width: "7%"
                            }}>
                                <Icon
                                    style={{}}
                                    name="ios-contact"
                                    size={20}
                                    color="#e1e1e1"
                                />
                            </View>
                            <View style={styles.itemBodyTextWrapper}>
                                <Text style={styles.itemBodyText}>
                                    Participants:
                            </Text>
                                <Text style={styles.itemBodyTextCustom}>
                                    {item.participants.length}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.itemBody, styles.itemBodyBudget]}>
                        {/* Text */}
                        <View style={{ flexDirection: "row" }}>
                            <View style={{
                                width: "7%"
                            }}>
                                <Icon
                                    style={{}}
                                    name="md-wallet"
                                    size={20}
                                    color="#e1e1e1"
                                />
                            </View>
                            <View style={styles.itemTeamBudgetTextWrapper}>
                                <View style={{
                                    width: "59%",
                                    flexDirection: "row"
                                }}>
                                    <Text style={styles.itemBodyText}>
                                        Team wallet:
                                </Text>
                                    <Text style={styles.itemBodyTextCustom}>
                                        {this.formatNumber(item.teamBudget) || "0"}₫
                                </Text>
                                </View>
                                <TouchableOpacity
                                    style={{ ...styles.budgetEditBtn }}
                                    onPress={() => this.handleEditTripTeamBudget(index)}
                                >
                                    <Icon
                                        style={{ marginRight: 5 }}
                                        name="md-create"
                                        size={9}
                                        color="#e1e1e1"
                                    />
                                    <Text style={styles.budgetEditTextBtn}>Edit</Text>
                                </TouchableOpacity>
                                <View style={{ width: "1%" }}></View>
                                <TouchableOpacity
                                    style={styles.budgetEditBtn}
                                    onPress={() => this.props.navigation.navigate("BudgetHistory", { data: this.props.data, dataIndex: index })}
                                >
                                    <Icon
                                        style={{ marginRight: 5 }}
                                        name="md-list-box"
                                        size={9}
                                        color="#e1e1e1"
                                    />
                                    <Text style={styles.budgetEditTextBtn}>History</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        ...styles.itemBody,
                        paddingVertical: 5
                    }}>
                        {/* Text */}
                        <View style={{ flexDirection: "row" }}>
                            <View style={{
                                ...styles.itemTeamBudgetTextWrapper,
                                width: "100%"
                            }}>
                                <Icon
                                    style={{ marginRight: 5 }}
                                    name="md-cash"
                                    size={20}
                                    color="#e1e1e1"
                                />
                                <Text style={styles.itemBodyText}>
                                    Total cost:
                                </Text>
                                <Text style={styles.itemBodyTextCustom}>
                                    {this.formatNumber(item.totalCost) || "0"}₫
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* Edit & Delete */}
                    <View style={styles.footerWrapper}>
                        <Text style={{ color: "#e1e1e1", marginRight: 5, fontWeight: "100" }}>{item.createdTime}</Text>
                        <TouchableOpacity onPress={() => this.handleEditTrip(index)}>
                            <Icon
                                style={{}}
                                name="ios-create"
                                size={25}
                                color="#03dac5"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleDeleteTrip(index)}>
                            <Icon
                                style={{ marginLeft: 5 }}
                                name="ios-close-circle-outline"
                                size={25}
                                color="#a4262c"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    render() {
        const { data } = this.props;
        return (
            <View style={styles.screenWrapper}>
                <ModalEditTrip
                    {...this.props}
                    data={data}
                    editMode={this.state.editMode}
                    itemIndex={this.state.editingItem}
                    visible={this.state.isShowingEditTripModal}
                    onRequestClose={this.closeModal}
                />
                <ModalEditTripTeamBudget
                    {...this.props}
                    data={data}
                    itemIndex={this.state.editingItem}
                    visible={this.state.isShowingEditTripTeamBudgetModal}
                    onRequestClose={this.closeModal}
                />
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerTextStyle}>
                        Trip Plan
                    </Text>
                </View>
                {/* Add new */}
                <View style={styles.addNewBarWrapper}>
                    <View style={styles.addNewBarStyle}>
                        <View style={styles.addNewBarTextWrapper}>
                            <Text style={styles.addNewBarTextCustom}>
                                You have {data.length} trip{data.length > 1 ? "s" : ""} to go
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.setState({ isShowingEditTripModal: true, editMode: "create" })}
                        >
                            <Icon
                                style={{}}
                                name="ios-add-circle-outline"
                                size={30}
                                color="#bb86fc"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Items */}
                <View style={styles.itemsWrapper}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={data}
                        renderItem={this.renderItem}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        );
    }
}

const mapActionToProps = {
    createTrip: tripActions.createTrip,
    deleteTrip: tripActions.deleteTrip,
    updateTrip: tripActions.updateTrip,
    saveTeamBudget: tripActions.saveTeamBudget
};

const mapStateToProps = state => {
    return {
        data: state.trip.data,
        modalText: state.trip.modalText
    };
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(App);