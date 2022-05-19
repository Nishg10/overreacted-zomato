import React, { useState } from "react";
import Header from "../../components/common/header/header.js";
import TabOptions from "../../components/common/taboptions/tab.js";
import Footer from "../../components/common/footer/footer";
import Delivery from "../../components/delivery/delivery.js";
import Diningout from "../../components/diningout/diningout.js";
import Nightlife from "../../components/nightlife/nightlife.js";


const Home = () => {
    const [activeState,setActiveState]=useState("Delivery");
    return(
        <div>
        <Header/>
        <TabOptions activeState={activeState} setActiveState={setActiveState} />
        {getActiveScreen(activeState)}
        <Footer></Footer>
        </div>
    );
}

const getActiveScreen = (tab) =>{
    switch (tab){
        case "Delivery":
            return <Delivery/>;
        case "Dining Out":
            return <Diningout/>;
        case "Nightlife":
            return <Nightlife/>;
        default:
            return <Delivery/>;       
    }
}

export default Home ;