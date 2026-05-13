import { useEffect, useState }
from "react";

import { useParams }
from "react-router-dom";

import { getAnimeDetails }
from "../services/animeService";

import "../styles/anime-details.css";

const AnimeDetails = () => {

  const { id } = useParams();

  const [anime, setAnime] =
    useState(null);

  useEffect(() => {

    const fetchAnime =
      async () => {

        const data =
          await getAnimeDetails(id);

        setAnime(data);
      };

    fetchAnime();

  }, [id]);

  if (!anime) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="anime-details">

      <div className="banner">

        <img
          src={
            anime.images.jpg.large_image_url
          }
          alt={anime.title}
        />

      </div>

      <div className="details-content">

        <h1>{anime.title}</h1>

        <div className="meta">

          <span>
            ⭐ {anime.score}
          </span>

          <span>
            Episodes:
            {anime.episodes}
          </span>

          <span>
            {anime.status}
          </span>

        </div>

        <p className="synopsis">
          {anime.synopsis}
        </p>

        <div className="genres">

          {anime.genres.map((genre) => (

            <span key={genre.mal_id}>
              {genre.name}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
};

export default AnimeDetails;