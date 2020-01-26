import axios from "axios";

const apiKey = "468a3504d2bcfc4926b8b092d9b7a883";

export const trendigFilmRequest = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
  );
};
export const w = 123;
