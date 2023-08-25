import axios from "axios";

export default axios.create({
  baseURL: "https://damla1-deleted.glitch.me/api/",
  timeout: 1000 * 60 * 2, // 2dk
});
