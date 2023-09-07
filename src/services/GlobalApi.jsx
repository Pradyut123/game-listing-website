import axios from "axios";
const key = "18d8dc115d954615a6fe8522598e8a97";
const axioCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getgenreList = axioCreate.get("/genres?key=" + key);
const getAllGames = axioCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) =>axioCreate.get("/games?key=" + key + "&genres=" + id);

export default {
  getgenreList,
  getAllGames,
  getGameListByGenreId,
};
