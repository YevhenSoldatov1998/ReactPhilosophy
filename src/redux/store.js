import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import dataReducer from "./dataReducer";
const reducers = combineReducers({
    data: dataReducer
})
const store = createStore(reducers , composeWithDevTools())
export default store
window.store = store;