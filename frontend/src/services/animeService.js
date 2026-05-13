import axios from "axios";

const BASE_URL =
  "https://api.jikan.moe/v4";

export const getTrendingAnime =
  async () => {

    try {

      const response =
        await axios.get(
          `${BASE_URL}/top/anime`
        );

      return response.data.data;

    } catch (error) {

      console.log(error);

    }
};

export const searchAnime =
  async (query) => {

    try {

      const response =
        await axios.get(
          `${BASE_URL}/anime?q=${query}`
        );

      return response.data.data;

    } catch (error) {

      console.log(error);

    }
};

export const getAnimeDetails =
  async (id) => {

    try {

      const response =
        await axios.get(
          `${BASE_URL}/anime/${id}`
        );

      return response.data.data;

    } catch (error) {

      console.log(error);

    }
};