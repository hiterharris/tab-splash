import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const apiKey = "Ce1NlWlzsDRByTbBB-TlkrVKHmW2PK1TD6xry1X4gK8";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setData(response.data.urls.regular);
        if (response.data.height < 4000) {
          return true;
        } else {
          return false;
        }
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
