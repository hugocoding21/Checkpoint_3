import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css";

function Card() {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/manga")
      .then((response) => {
        setManga(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="galerie">
      {manga.map((item) => (
        <Link key={item.id} to={`/${item.url}/${item.id}`}>
          <div className="cardcontainer">
            <div>
              <img className="imgscan" src={item.img} alt={item.name} />
            </div>
            <h2>{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
