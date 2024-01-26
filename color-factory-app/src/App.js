import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (obj) => {
    setColors(colors => [...colors, obj])
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
        <Routes>
            <Route path="/colors" element={<ColorList colors={colors} />} />
            <Route path="/colors/new" element={<NewColorForm createColor={addColor} />} />
            <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
            <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
