import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0dcca7b438f9466fb6e713bd37ce3cb5",
  },
});
