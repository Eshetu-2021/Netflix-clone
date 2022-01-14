import axios from "axios";
// https://api.themoviedb.org/3/movie/550?api_key=ec06f2de3477c25105a827270bb701d7

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/foo-bar");

export default instance;
