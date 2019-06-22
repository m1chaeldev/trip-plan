import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'
import rootReducer from './reducers'
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export { store }

export default store