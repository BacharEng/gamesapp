import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "85989caec4f3477bb41c4bc63084c0f7",
  },
});
