import { ADD_ITEM_TO_CART } from "../actionTypes"

export const addToCart = (item) => {
    return {
        type: ADD_ITEM_TO_CART,
        item
    }
}