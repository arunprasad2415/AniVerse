import {
  useState,
  useEffect
}
from "react";

import Navbar
from "../components/Navbar";

import AnimeCard
from "../components/AnimeCard";

import SearchBar
from "../components/SearchBar";

import {
  searchAnime,
  getTrendingAnime
}
from "../services/animeService";

const Explore = () => {

  const [animeList, setAnimeList] =
    useState([]);

  useEffect(() => {

    fetchTrending();

  }, []);

  const fetchTrending =
    async () => {

      const data =
        await getTrendingAnime();

      setAnimeList(
        data.slice(0, 20)
      );
  };

  const handleSearch =
    async (query) => {

      if (!query) {
        fetchTrending();
        return;
      }

      const data =
        await searchAnime(query);

      setAnimeList(data);
  };

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
        Explore Anime
      </h1>

      <SearchBar
        onSearch={handleSearch}
      />

      <div
        className="anime-grid"
        style={{
          marginTop: "3rem"
        }}
      >

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

export default Explore;