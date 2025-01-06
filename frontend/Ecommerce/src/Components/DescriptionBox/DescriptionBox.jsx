import React from "react";
import "./DescriptionBox.css";

const DescriptionBox=()=>{
    return(
        <div className="descriptionbox">
             <div className="descriptionbox_navigator">
                <div className="descriptionbox_nav_box">Description</div>
                <div className="descriptionbox_nav_box fade">Reviews(122)</div>
             </div>

             <div className="descriptionbox_description">
                <p>
                    An e-commerce website is an online platform that facilitates for buying and selling of products or
                    services as a virtual marketplace where businesses and individuals to showcase their products,interact
                    with customers and conducting the transactions without the need for a physical presence.E-commerce 
                    websites have gained immense popularity due to their convenience,accessibility,and the global reach they offer.
                </p>
                <p>
                    E-commerce websites typically display products or services along with detailed descriptions,images,prices 
                    and any available variations(e.g.,sizes,colors).Each product usually has its own dedicated page with relevant information.
                </p>

             </div>
        </div>
    )
}

export default DescriptionBox;