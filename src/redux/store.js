import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootReducer from './reducers';
// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )

// export { store }

// export default store

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);