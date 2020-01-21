import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const apiKey = "33678ea5d2162d78ed95b142d75c2bb6f0d98ddbe7ed96a949da41989f4269d6";
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
    <div className="App" style={{backgroundImage: `url(${data})`}}>
      <div className='footer'>
        <p className='title'>Tab Splash</p>
        <p>Built by Hiter Harris</p>
        <p><a href="https://unsplash.com/">Unsplash</a> API</p>
      </div>
    </div>
  );
}
