import React, { useState, useEffect } from 'react';
import '../App.css';

const Photo = () => {
    const apiKey = 'aBHCRL4VEsVTo2tFwFo-5xiOS75n-RDSK9vJMgWX714';
    const [photo, setPhoto] = useState('');
    const [alt, setAlt] = useState('');

    const getPhoto = () => {
        fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        .then((response) => response.json())
        .then((json) => {
            const url = json.urls.full;
            const alt = json.alt_description;
            setPhoto(url)
            setAlt(alt);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getPhoto();
    }, []);

    if (photo) return <img src={photo} alt={alt}/>
    else return <h2>Loading...</h2>
}

export default Photo;
