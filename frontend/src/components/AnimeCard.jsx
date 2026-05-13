import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/AnimeCard.css";

const AnimeCard = ({ anime }) => {
  return (

    <Link
      to={`/anime/${anime.mal_id}`}
      className="anime-card"
    >

      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
      />

      <div className="anime-info">

        <h3>{anime.title}</h3>

        <p>
          ⭐ {anime.score || "N/A"}
        </p>

      </div>

    </Link>
  );
};

export default AnimeCard;