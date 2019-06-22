import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Application from "./src"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}