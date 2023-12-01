import {ADD_TO_CART,DECREASE_QTY,INCREASE_QTY,REMOVE_FROM_CART} from "../actions/actionsType"

const initialValue = []
const cartReducers = (state=initialValue, action)=>{
    if(action.type == ADD_TO_CART){
        return [...state, action.payload]
    }
    else if(action.type == REMOVE_FROM_CART){
        return state.filter(item=>item.id!=action.payload)
    }
    else if(action.type==INCREASE_QTY){
        return state.map(item=>item.id==action.payload?{...item, qty:item.qty+1}:item)
    }
    else if(action.type==DECREASE_QTY){
        return state.map(item=>item.id==action.payload?{...item, qty:item.qty>0?item.qty-1:item.qty}:item)
    }
    else return state
}

export default cartReducers