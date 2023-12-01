import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QTY, DECREASE_QTY } from "./actionsType"

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}
export const increaseQty = (id)=>{
    return {
        type : INCREASE_QTY,
        payload : id
    }
}
export const decreaseQty = (id)=>{
    return {
        type : DECREASE_QTY,
        payload : id
    }
}