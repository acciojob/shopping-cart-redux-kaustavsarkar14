import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/actionsType"

const initialValue = []

const wishlistReducers = (state=initialValue, action)=>{
    if(action.type == ADD_TO_WISHLIST){
        return [...state, action.payload]
    }
    else if(action.type == REMOVE_FROM_WISHLIST){
        return state.filter(item=>item.id!=action.payload)
    }
    else return state
}

export default wishlistReducers