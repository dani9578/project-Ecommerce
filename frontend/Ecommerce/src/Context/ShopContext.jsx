import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product.js";

export const ShopContext= createContext(null)

const getDefaultCart=()=>{

    let cart={};
    
    for (let index = 0; index < all_product.length +1; index++) {               //1st step for cart 

        cart[index]=0
    }
    return cart
}

const ShopContextProvider =(props)=>{

       const[cartItems,setCartItems]=useState(getDefaultCart())                 //2nd step for cart
       
                        
       
       const addToCart=(itemId)=>{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))             //3rd step for cart
       }

       const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))               //4th step for cart
     }

       const getTotalCartAmount=()=>{
           let totalAmount=0;

           for (const item in cartItems) {
                if (cartItems[item]>0) {
                  
                  let itemInfo =all_product.find((product)=>product.id===Number(item))
                  totalAmount += itemInfo.new_price * cartItems[item]
                }
           }
           return totalAmount
       }

       const getTotalCartItems=()=>{
             let totalItem=0;

             for(const item in cartItems){
                if(cartItems[item]>0){
                    totalItem += cartItems[item]
                }
             }
             return totalItem
       }


     const contextValue={all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}        //5th step for cart

     return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
       )
}
export default ShopContextProvider;
