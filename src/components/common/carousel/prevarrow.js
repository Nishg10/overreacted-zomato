import React from "react";

const Prevarrow = (props) => {
    const { className, style, onClick } = props;
    return(
        <div className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
    );
}

export default Prevarrow ;