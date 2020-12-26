import { ADD_ITEM_TO_CART } from '../actionTypes';


const cart = {
    items: []
}

const cartReducer = (state=cart, action) => {
    console.log(state, action)
    switch(action.type){
        case ADD_ITEM_TO_CART: {
            const {item} = action
            return {...state, items: [...state.items, item]}
        }
        default:
            return state;
    }
}

export default cartReducer;