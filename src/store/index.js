import {createStore, combineReducers} from 'redux';
import cartReducer from "./reducers/cartReducers";

const configureStore = () => {
    const store = createStore( 
        combineReducers({
            cart: cartReducer
        })
        , {})
    return store; 
}

export default configureStore