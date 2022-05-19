import React from "react";
import "./header.css"

const Header = () => {
    return(
        <div  className="max-width header">
        <img alt="zomato-logo" className="header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"/>
        <div className="header-right">
            <div className="header-location-search-container">
                <div className="location-wrapper">
                    <div className="location-icon-name">

                        <i className="fi fi-rr-marker absolute-center location-icon"></i>
                        <div>Bangalore</div>
                        
                    </div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className="location-search-separator"></div>
                    <div className="header-searchbar">
                        <i className="fi fi-rr-search absolute-center search-icon"></i>
                        <input placeholder="Search for restaurant,cuisine,dish" className="search-input"/>
                    </div>
                </div>
                <div className="profile-wrapper"> 
                
                    <img src="https://b.zmtcdn.com/data/user_profile_pictures/bf1/2f841183b344fe24486f7bd7920e8bf1.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                        className="header-profile-img" alt="profile-img"/>
                    <span className="header-username">Nisha</span>
                    <i className="fi fi-rr-angle-down absolute-center profile-options-icon"></i>
                </div>
         
        </div>
        
        </div>
    );
}

export default Header ;