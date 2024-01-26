import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { useNavigate, Link } from "react-router-dom";

function NewColorForm({createColor}) {
    const [formData, setFormData] = useState({
        name: ""
    })

    // navigate is used to redirect user back to homepage after submitting
    const navigate = useNavigate();

    function isValidColor(colorString) {
        let s = new Option().style;
        s.color = colorString;

        // return false if color wasn't assigned
        return s.color === colorString?.toLowerCase();
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const input = (e) => {
        e.preventDefault();
        if(isValidColor(formData.name)) {
            createColor({...formData, id: uuid()});
            setFormData({name: ""})
            navigate("/");
        } else {
            alert("Input was not a valid color.")
        }
    }

    return (
        <div>
            <form onSubmit={input}>
                <div>
                    <label htmlFor="name">Color name:</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={formData.name}
                        id="name"
                    />
                </div>
                <button id="newBoxButton">Add new color</button>
            </form>
            <Link to="/colors">Nevermind, lets go back.</Link>
        </div>
    )
}

export default NewColorForm;