import React from "react";

const Nextarrow = (props) => {
    const { className, style, onClick } = props;
    return(
        <div className={className}
        style={{ ...style, display: "flex", 
        justifyContent:"center",
        alignItems:"center",
        padding:"4px",
        background: "white",
        borderRadius: "50%" }}
        onClick={onClick}
      />
    );
}

export default Nextarrow ;