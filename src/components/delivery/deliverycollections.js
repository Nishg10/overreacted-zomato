import React from "react";
import Prevarrow from "../common/carousel/prevarrow";
import "./delivery.css";
import Nextarrow from "../common/carousel/nextarrow.js";
import Prevarrow from "../common/carousel/Prevarrow.js";


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Nextarrow />,
    prevArrow: <Prevarrow />
  };
const deliveryitems = [
    {
        id:1,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Home Style",
        cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
    },
    {
        id:3,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:4,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:5,
        title:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:6,
        title:"Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:7,
        title:"Dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id:8,
        title:"Paratha",
        cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
]
const Deliverycollections = () => {
    return(
        <div className="delivery-colection">
            <div className="max-width">
                <div className="collection-title">Eat what makes you happy   </div>
            </div>
        </div>
    );
}

export default Deliverycollections ;