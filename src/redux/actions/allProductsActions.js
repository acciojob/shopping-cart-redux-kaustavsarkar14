import { ADD_TO_ALL, REMOVE_FROM_ALL } from "./actionsType"

export const removeFromAll = (id)=>{
    return {
        type : REMOVE_FROM_ALL,
        payload : id
    }
}

export const addToAll = (data)=>{
    return {
        type : ADD_TO_ALL,
        payload : data
    }
}