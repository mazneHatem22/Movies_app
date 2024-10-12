import React from 'react'
import img from "../images/Buffering white (1).gif"
import { useState, useEffect } from 'react';
const SetImg = () => {

    const [fadeOut, setFadeOut] = useState("");


    useEffect(() => {
      
        const timer = setTimeout(() => {
          setFadeOut(true);
        }, 1500);
    
        return () => clearTimeout(timer);
      }, []);
  return (


    
    <div className='body'>
    <div className={`image-container ${fadeOut ? 'fade-out' : ''}`}>
    <img src={img} alt="الصورة" className="fade-image" />
  </div>
  </div>
  )
}

export default SetImg
