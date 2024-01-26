import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

function ColorDetails({colors}) {
    const { color } = useParams();
    if (!colors) return <Navigate to="/colors" />
    
    
    if (color) {
        console.log("test the param: " + color + " And the prop: " + colors)
        const currColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase());

        return (
            <div style={{backgroundColor: currColor.name}}>
                <h1>This is {currColor.name}</h1>
                <h1>Isn't it beautiful?</h1>
                <Link to="/colors">Go Back</Link>
            </div>
        )
    }

    return null;
}

export default ColorDetails;