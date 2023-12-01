
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { addToAll, removeFromAll } from "../redux/actions/allProductsActions";
import { addToCart, decreaseQty, increaseQty, removeFromCart } from "../redux/actions/cartActions";
import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlistActions";


const App = () => {
  const allProducts = useSelector(state=>state.allProducts)
  const cartItems = useSelector(state=>state.cart)
  const wishlistItems = useSelector(state=>state.wishlist)
  const dispatch = useDispatch()

  function addToCartFromAll(item){
    dispatch(addToCart(item))
    dispatch(removeFromAll(item.id))
  }
  function removeFromCartAddToAll(item){
    dispatch(removeFromCart(item.id))
    dispatch(addToAll(item))
  }
  function removeFromCartAddToWishlist(item){
    dispatch(addToWishlist(item))
    dispatch(removeFromCart(item.id))
  }
  function addToCartFromWishlist(item){
    dispatch(removeFromWishlist(item.id))
    dispatch(addToCart(item))
  }
  // console.log("all",allProducts)
  // console.log("cart",cartItems)
  // console.log("wishlist", wishlistItems)
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>All Products</h1>
        {
          allProducts.map(item=>(
            <div key={item.id} style={{border:"1px solid black"}} >
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={()=>addToCartFromAll(item)} >ADD TO CART</button>
            </div>
          ))
        }
        <h1>Wishlist</h1>
        {
          wishlistItems.length==0?
          <p>Wishlist is empty</p>
          :
          wishlistItems.map(item=>(
            <div key={item.id} style={{border:"1px solid black"}} >
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={()=>addToCartFromWishlist(item)} >ADD TO CART</button>
            </div>
          ))
        }
        <h1>Cart</h1>
        {
          cartItems.length==0?
          <p>Cart is empty</p>
          :
          cartItems.map(item=>(
            <div key={item.id} style={{border:"1px solid black"}} >
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <b>QTY : {item.qty}</b>
            <button onClick={()=>dispatch(increaseQty(item.id))} >+</button>
            <button onClick={()=>dispatch(decreaseQty(item.id))} >-</button>
            <button onClick={()=>removeFromCartAddToAll(item)} >REMOVE</button>
            <button onClick={()=>removeFromCartAddToWishlist(item)} >MOVE TO WISHLIST</button>
          </div>
          ))
        }
    </div>
  )
}

export default App
