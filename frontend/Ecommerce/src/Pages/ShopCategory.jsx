import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext.jsx";
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import all_product from "../Components/Assets/all_product.js";
import Item from "../Components/Item/Item.jsx";

const ShopCategory=(props)=>{
   
    const {all_product}=useContext(ShopContext)

    return(
        <div className="shop_category">
             <img className="shop_category_banner" src={props.banner} alt="" />

             <div className="shop_category_indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shop_category_sort">
                     Sort by<img src={dropdown_icon} alt="" />
                </div>
             </div>

             <div className="shop_category_products">
                 {all_product.map((item,i)=>{
                      if(props.category===item.category){
                           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                      }
                      else{
                        return null
                      }
                 })}
             </div>

             <div className="shop_category_loadmore">
                Explore More
             </div>
        </div>
    )
}

export default ShopCategory;