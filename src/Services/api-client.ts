import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe976c00107d4894b5f667ef7db60e49",
  },
});
