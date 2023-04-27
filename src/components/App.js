import React, { useState, useEffect } from "react";


function App(){
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => setDogImage(data.image))
        .catch(error => console.error(error))
    }, [];



    )
}