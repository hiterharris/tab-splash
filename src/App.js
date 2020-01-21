import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const apiKey = "ac52df63d21b30457177b47056671a7f567ad59f2917eca8119d9b38f9b04387";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
      .then(response => {
        console.log(response.data);
        setData(response.data.urls.regular);
      });
  }, []);
  return (
    <div className="App">
      <img src={data} alt="Unsplash" />
    </div>
  );
}
