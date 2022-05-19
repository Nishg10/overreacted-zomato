import React from "react";
import "./delivery.css";
import Filters from "../common/filters/filter.js";
import Deliverycollections from "./deliverycollections";


const deliveryfilters=[
    {
        id:1,
        icon:<i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title:"Filters"
    },
    {
        id:2,
        title:"Rating: 4.0+"
    },
    {
        id:3,
        title:"Safe and Hygienic"
    },
    {
        id:4,
        title:"Pure Veg"
    },
    {
        id:5,
        title:"Delivery Time",
        icon:<i class="fi fi-rr-apps-sort absolute-center"></i>
    }
];
const Delivery = () => {
    return(
        <div>
            <div className="max-width">
            <Filters filterlist={deliveryfilters}/>
            </div>
            <Deliverycollections/>
        </div>
    );
}

export default Delivery ;