import { combineReducers, createStore } from "redux";
import allProductsReducers from "./reducers/allProductsReducers";
import cartReducers from "./reducers/cartReducers";
import wishlistReducers from "./reducers/wishlistReducers";

const rootStore = combineReducers({
    allProducts : allProductsReducers,
    cart : cartReducers,
    wishlist : wishlistReducers
})

const store = createStore(rootStore)

export default store