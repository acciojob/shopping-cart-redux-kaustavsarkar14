import { ADD_TO_ALL, REMOVE_FROM_ALL } from "../actions/actionsType"


const initialValue =[
    {
      id: 1,
      name: "Windows 11 Hoodie",
      price: "$39.99",
      qty: 1,
      image: "[2]",
      type: "Hoodie"
    },
    {
      id: 2,
      name: "Microsoft Edge Shirt",
      price: "$24.99",
      qty: 1,
      image: "[3]",
      type: "Shirt"
    },
    {
      id: 3,
      name: "Xbox Logo T-Shirt",
      price: "$29.99",
      qty: 1,
      image: "[4]",
      type: "T-Shirt"
    },
    {
      id: 4,
      name: "Visual Studio Code Shirt",
      price: "$34.99",
      qty: 1,
      image: "[6]",
      type: "Shirt"
    },
  ];


const allProductsReducers = (state=initialValue, action)=>{
    if(action.type == ADD_TO_ALL){
        return [...state, action.payload]
    }
    else if(action.type == REMOVE_FROM_ALL ){
        return state.filter(item=>item.id!=action.payload)
    }
    else return state
} 

export default allProductsReducers