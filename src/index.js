import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";

// Navigation
import Router from "./navigation/router";

class Application extends PureComponent {

    render() {
        return (
            <Fragment>
                <Router {...this.props} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
});

const mapActionsToProps = {};
export default connect(
    mapStateToProps,
    mapActionsToProps
)(Application);
