import {
  useEffect,
  useState
}
from "react";

import Navbar
from "../components/Navbar";

import AnimeCard
from "../components/AnimeCard";

import {
  getTrendingAnime
}
from "../services/animeService";

const Trending = () => {

  const [animeList, setAnimeList] =
    useState([]);

  useEffect(() => {

    const fetchAnime =
      async () => {

        const data =
          await getTrendingAnime();

        setAnimeList(
          data.slice(0, 20)
        );
      };

    fetchAnime();

  }, []);

  return (
    <div
      style={{
        padding: "3rem",
        color: "white"
      }}
    >

      <Navbar />

      <h1
        style={{
          margin:
            "2rem 0"
        }}
      >
        Trending Anime
      </h1>

      <div className="anime-grid">

        {animeList.map((anime) => (

          <AnimeCard
            key={anime.mal_id}
            anime={anime}
          />

        ))}

      </div>

    </div>
  );
};

export default Trending;