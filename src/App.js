import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const apiKey = 'oGhW-led2iTvxCpr7uMOpOAo7HPoz6J48wNf2pSetgU';
  const [image, setImage] = useState('');
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
      .then(response => {
        console.log(response.data);
        setImage(response.data.urls.regular);
      });
  }, []);
  return (
    <div className="App" style={{backgroundImage: `url(${image})`}}>
      <div className='footer'>
        <p className='title'>Tab Splash</p>
        <p>Built by Hiter Harris</p>
        <p><a href="https://unsplash.com/">Unsplash</a> API</p>
      </div>
    </div>
  );
}
