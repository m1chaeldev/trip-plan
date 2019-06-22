import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

// Style
import styles from "./styles";

// Constant

export default class App extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            tabSelected: 1
        };
    }

    renderParticipants = ({ item, index }) => {
        const data = this.props.navigation.state.params.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        return (
            // Each item
            <TouchableOpacity
                onPress={null}
            >
                <View style={{ ...styles.itemStyle, paddingBottom: index + 1 === data[dataIndex].participants.length ? 0 : 10 }}>
                    <View style={{ ...styles.itemWrapper, flexDirection: "row", padding: 20 }}>
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
                </View>
            </TouchableOpacity>
        );
    }

    renderPalaces = ({ item, index }) => {
        const data = this.props.navigation.state.params.data;
        const dataIndex = this.props.navigation.state.params.dataIndex;
        return (
            // Each item
            <TouchableOpacity
                onPress={null}
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
                                        name="md-cash"
                                        size={20}
                                        color="#e1e1e1"
                                    />
                                </View>
                                <View style={styles.itemBodyTextWrapper}>
                                    <Text style={styles.itemBodyText}>
                                        Incurred cost:
                                </Text>
                                    <Text style={styles.itemBodyTextCustom}>
                                        {item.incurredCost}
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
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const originalData = this.props.navigation.state.params.data;
        const index = this.props.navigation.state.params.dataIndex;
        const data = originalData[index];
        const { tabSelected } = this.state;
        const palaceText = `${data.palaces.length} palace${data.palaces.length > 1 ? "s" : ""} to go`;
        const participantText = `${data.participants.length} participant${data.participants.length > 1 ? "s" : ""} joining this trip`;
        return (
            <View style={styles.screenWrapper}>
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
                            onPress={null}
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