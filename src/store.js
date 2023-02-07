
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

const middle=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middle))
)


export default store