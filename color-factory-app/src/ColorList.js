import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}) {
    return (
        <div>
            <div>
                <h1>Welcome to the color factory.</h1>
                <h3><Link to={'/colors/new'}>Add a Color.</Link></h3>
            </div>
            <div>
                <p>Please select a color.</p>
                {colors.map(c => (
                    <div key={c.name}>
                        <h3>
                            <Link to={`/colors/${c.name}`}>{c.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ColorList;