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

// Components

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
        };
    }

    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
    }

    renderItem = ({ item, index }) => {
        const data = this.props.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        let money = "";
        money = Number(item.teamBudgetNew) >= Number(item.teamBudgetOld) ?
            (Number(item.teamBudgetNew) - Number(item.teamBudgetOld)) :
            (Number(item.teamBudgetOld) - Number(item.teamBudgetNew));
        return (
            // Each item
            <View style={{ ...styles.itemStyle, paddingBottom: index + 1 === data[dataIndex].teamBudgetHistory.length ? 0 : 10 }}>
                <View style={styles.itemWrapper}>
                    <View style={styles.itemHeader}>
                        <Text style={styles.itemHeaderText}>{item.note}</Text>
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
                                    {item.time}
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
                                    name="md-wallet"
                                    size={20}
                                    color="#e1e1e1"
                                />
                            </View>
                            <View style={styles.itemBodyTextWrapper}>
                                <Text style={styles.itemBodyText}>
                                    Team wallet:
                                                </Text>
                                <Icon
                                    style={{ marginLeft: 5 }}
                                    name={item.method === "plus" ? "md-add" : "md-remove"}
                                    size={12}
                                    color={item.method === "plus" ? "#03dac5" : "#a4262c"}
                                />
                                <Text style={{
                                    ...styles.itemBodyTextCustom,
                                    color: item.method === "plus" ? "#03dac5" : "#a4262c"
                                }}>
                                    {this.formatNumber(money) || "0"}₫
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
                                    name="md-cash"
                                    size={20}
                                    color="#e1e1e1"
                                />
                            </View>
                            <View style={styles.itemBodyTextWrapper}>
                                <Text style={styles.itemBodyText}>
                                    Before:
                                                </Text>
                                <Text style={styles.itemBodyTextCustom}>
                                    {this.formatNumber(item.teamBudgetOld) || "0"}₫
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
                                    name="ios-cash"
                                    size={20}
                                    color="#e1e1e1"
                                />
                            </View>
                            <View style={styles.itemBodyTextWrapper}>
                                <Text style={styles.itemBodyText}>
                                    After:
                                                </Text>
                                <Text style={styles.itemBodyTextCustom}>
                                    {this.formatNumber(item.teamBudgetNew) || "0"}₫
                                    </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const originalData = this.props.data;
        const index = this.props.navigation.state.params.dataIndex;
        const data = originalData[index].teamBudgetHistory;
        const headerTitle = originalData[index].name;
        return (
            <View style={styles.screenWrapper}>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerTextStyle}>
                        {headerTitle}
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
                                {data.length} transaction{data.length > 1 ? "s" : ""} {data.length > 1 ? "were" : "was"} found
                            </Text>
                        </View>
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