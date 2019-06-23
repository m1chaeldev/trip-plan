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

// Styles
import styles from "./styles";

// Actions
import { tripActions } from "./../../../redux/actions";

class App extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isShowingEditTripModal: false,
            editingItem: "",
            editMode: ""
        };
    }

    closeModal = () => {
        this.setState({
            isShowingEditTripModal: false,
            editingItem: ""
        })
    }

    handleViewTrip = (index) => {
        this.props.navigation.navigate("EachTrip", { data: this.props.data, dataIndex: index })
    }

    handleEditTrip = (index) => {
        this.setState({ editingItem: index, editMode: "edit", isShowingEditTripModal: true })
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
                            <Icon
                                style={{}}
                                name="ios-bicycle"
                                size={20}
                                color="#e1e1e1"
                            />
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
                            <Icon
                                style={{}}
                                name="ios-contact"
                                size={20}
                                color="#e1e1e1"
                            />
                            <View style={styles.itemBodyTextWrapper}>
                                <Text style={styles.itemBodyText}>
                                    Participants:
                            </Text>
                                <Text style={styles.itemBodyTextCustom}>
                                    {item.participants.length}
                                </Text>
                            </View>
                        </View>
                        {/* Edit & Delete */}
                        <View style={{
                            width: "100%",
                            height: "auto",
                            flexDirection: "row",
                            marginTop: 5
                        }}>
                            <View style={{
                                width: "87%",
                                height: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{ color: "#e1e1e1" }}>{item.createdTime}</Text>
                            </View>
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
    saveModalText: tripActions.saveModalText
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