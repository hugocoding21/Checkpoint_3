// Mangainfo.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Manga.css";

function Mangainfo() {
  const { mangaUrl, id } = useParams(); // Obtenez l'ID du manga et l'URL du manga à partir des paramètres d'URL
  const [manga, setManga] = useState({});
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/manga/${id}`)
      .then((response) => {
        setManga(response.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get(`http://localhost:5000/chapter/${id}`)
      .then((response) => {
        setChapters(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="mangainfo">
      <div className="manga">
        <img src={manga.img} alt={manga.name} />
        <div className="description">
          <h1>{manga.name}</h1>
          <div>
            Author: <br /> <br /> {manga.author}
          </div>
          <div>
            Description: <br />
            <br /> {manga.description}
          </div>
        </div>
      </div>
      <div className="list-chap">
        {Array.isArray(chapters) &&
          chapters.map((chap) => (
            <Link key={chap.id} to={`/${mangaUrl}/chapitre/${chap.chapter_id}`}>
              Chapter {chap.chapter_id}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Mangainfo;
