import React from "react";
import Photo from './components/Photo';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Photo />
      <div className='footer'>
        <p className='title'>Tab Splash</p>
        <p>Built by Hiter Harris</p>
        <p><a href="https://unsplash.com/">Unsplash</a> API</p>
      </div>
    </div>
  );
}
