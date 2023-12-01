import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionsType"

export const addToWishlist = (data)=>{
    return {
        type : ADD_TO_WISHLIST,
        payload : data
    }
}
export const removeFromWishlist = (id)=>{
    return {
        type : REMOVE_FROM_WISHLIST,
        payload : id
    }
}