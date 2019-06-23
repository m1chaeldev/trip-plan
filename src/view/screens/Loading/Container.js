import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    View,
    Text
} from 'react-native';

// Components

// Styles
import styles from "./styles";

// Actions

class App extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.screenWrapper}>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerTextStyle}>
                        Trip Plan
                    </Text>
                </View>
            </View>
        );
    }
}

const mapActionToProps = {
};

const mapStateToProps = state => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(App);