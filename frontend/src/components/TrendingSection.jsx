import { useEffect, useState }
from "react";

import AnimeCard from "./AnimeCard";
import SearchBar from "./SearchBar";
import FeaturedBanner from "./FeaturedBanner";

import {
  getTrendingAnime,
  searchAnime
}
from "../services/animeService";

import "../styles/TrendingSection.css";

const TrendingSection = () => {

  const [animeList, setAnimeList] =
    useState([]);

  useEffect(() => {

    fetchTrending();

  }, []);

  const fetchTrending = async () => {

    const data =
      await getTrendingAnime();

    setAnimeList(data.slice(0, 12));
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
    <section className="trending-section">

      <h2>
        Explore Anime
      </h2>

      <SearchBar
        onSearch={handleSearch}
      />

      <FeaturedBanner />

      <div className="anime-grid">

        {animeList.map((anime) => (

          <AnimeCard
            key={anime.mal_id}
            anime={anime}
          />

        ))}

      </div>
    </section>
  );
};

export default TrendingSection;