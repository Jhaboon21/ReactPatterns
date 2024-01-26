import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

function DogDetails({dogs}) {
    const { name } = useParams();
    if (!dogs) return <Navigate to="/dogs" />
    
    
    if (name) {
        const currentDog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

        return (
            <div>
                <img src={`/${currentDog.src}.jpg`} alt={currentDog.name} />
                <h2>{currentDog.name}</h2>
                <h2>{currentDog.age} years old.</h2>
                <ul>
                    {currentDog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Go Back</Link>
            </div>
        )
    }

    return null;
}

export default DogDetails;