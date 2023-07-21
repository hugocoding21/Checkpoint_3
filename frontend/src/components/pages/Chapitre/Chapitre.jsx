import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chapitre.css";

function Chapitre() {
  const [images, setImages] = useState([]);
  const [chapterId, setChapterId] = useState(1);

  const handleDecrement = () => {
    // Check if the previous chapter exists before decrementing
    if (chapterId > 1) {
      const newChapterId = chapterId - 1;
      setChapterId(newChapterId);
    }
  };

  const handleIncrement = () => {
    const newChapterId = chapterId + 1;
    setChapterId(newChapterId);
  };

  useEffect(() => {
    // Use the chapterId state to fetch the images for the corresponding chapter
    axios
      .get(`http://localhost:5000/image/${chapterId}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((err) => {
        console.error(err);
      });

    // Add event listeners for left and right arrow keys
    const handleArrowKeys = (event) => {
      if (event.keyCode === 37) {
        handleDecrement();
      } else if (event.keyCode === 39) {
        handleIncrement();
      }
    };

    window.addEventListener("keydown", handleArrowKeys);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleArrowKeys);
    };
  }, [chapterId]);

  return (
    <div className="chapitrecontainer">
      <div className="navigation">
        <button type="button" className="nav-button" onClick={handleDecrement}>
          left
        </button>
        <h1>{`Chapitre ${chapterId}`} </h1>
        <button type="button" className="nav-button" onClick={handleIncrement}>
          right
        </button>
      </div>
      {Array.isArray(images) &&
        images.map((img) => (
          <div className="imgcontainer" key={img.id}>
            <img className="image" src={img.img_url} alt="" />
          </div>
        ))}
    </div>
  );
}

export default Chapitre;
