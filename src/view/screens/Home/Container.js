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
data = [
    {
        name: "Đà lạt tháng 7 cùng đồng bọn tại nhà tui",
        palaces: [
            {
                name: "Cây thông cô đơn",
                startTime: "7:00",
                endTime: "8:00",
                incurredCost: "10000",
                shouldBring: "Máy ảnh",
                description: `Đường khó cẩn thận nha mấy thằng loz. Té nhào đầu xuống éo ai cứu đâu hihi`
            }
        ],
        participants: [
            {
                name: "Thái Nguyễn",
                phone: "0332123721"
            }
        ]
    }
]

export default class App extends React.Component {
    static navigationOptions = {
        header: null,
    };

    handleViewTrip = (index) => {
        this.props.navigation.navigate("EachTrip", { data, dataIndex: index })
    }

    handleAddTrip = () => {
        alert("Add button")
    }

    renderItem = ({ item, index }) => (
        // Each item
        <TouchableOpacity
            onPress={() => this.handleViewTrip(index)}
        >
            <View style={{ ...styles.itemStyle, paddingBottom: index + 1 === data.length ? 0 : 10 }}>
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
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={styles.screenWrapper}>
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
                            onPress={this.handleAddTrip}
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