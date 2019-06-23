import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import Application from "./src";
import { PersistGate } from 'redux-persist/lib/integration/react';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Application />
        </PersistGate>
      </Provider>
    );
  }
}